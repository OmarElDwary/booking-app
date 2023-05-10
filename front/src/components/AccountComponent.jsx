import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext';

const style = {
    nav: 'flex flex-start gap-4 p-4 bg-[#1e90ff] shadow-lg shadow-[#dfe4ea] text-white',
    link: 'hover:text-[#192a56] hover:bg-white p-2 rounded-lg',
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
            <Link className={linkClasses('profile')} to='/account'>My Profile</Link>
            <Link className={linkClasses('bookings')} to='/account/bookings'>My Bookings</Link>
            <Link className={linkClasses('places')} to='/account/places'>My Places</Link>
        </nav>
    </div>
  )
}

export default AccountComponent;