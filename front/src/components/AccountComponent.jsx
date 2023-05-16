import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext';
import PlacesComponent from './PlacesComponent';
import { RiAccountPinBoxLine } from 'react-icons/ri';
import { AiFillSchedule } from 'react-icons/ai';
import { BsHouseDoorFill } from 'react-icons/bs';

const style = {
    nav: 'flex flex-start gap-4 p-4 bg-[#1e90ff] shadow-lg shadow-[#dfe4ea] text-white',
    link: 'hover:text-[#192a56] hover:bg-white p-2 rounded-lg inline-flex items-center gap-2',
}
function AccountComponent() {
  const {ready, user} = useContext(UserContext);

  if(ready && !user) {
        <Navigate to="/login" />
  }
  let {subpage} = useParams();
  if(subpage === undefined) subpage = 'profile';
  
  const linkClasses = (type=null) => {
    let classes = style.link;
    if(type === subpage) {
      classes += ' bg-white text-[#192a56]';
    }
    return classes;
  }
  return (
    <div>
        <nav className={style.nav}>
            <Link className={linkClasses('profile')} to='/account'>
              <RiAccountPinBoxLine />
              My Profile
            </Link>
            <Link className={linkClasses('bookings')} to='/account/bookings'>
              <AiFillSchedule />
              My Bookings
            </Link>
            <Link className={linkClasses('places')} to='/account/places'>
              <BsHouseDoorFill />
              My Places
            </Link>
        </nav>
        {(subpage === 'places' && (
            <PlacesComponent />
        ))}
    </div>
  )
}

export default AccountComponent;