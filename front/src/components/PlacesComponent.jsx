import { React } from "react";
import { Link } from "react-router-dom";
import { IoAddCircle } from "react-icons/io5";
import { useParams } from "react-router";
import { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import PerksComponent from "./PerksComponent";
import axios from "axios";
const style = {
  link: "text-center justify-center flex w-full p-4",
  btn: "bg-[#1e90ff] hover:bg-white hover:text-[#1e90ff] hover:border hover:border-[#1e90ff] text-white font-bold py-2 px-4 rounded inline-flex items-center gap-2 text-xl text-center justify-center",
  form: "flex flex-col gap-2 p-4",
  label: "text-[#2f3640] font-bold",
  input: "border border-[#2f3640] rounded p-2",
  submitImg: "bg-[#1e90ff] hover:bg-white hover:text-[#1e90ff] hover:border hover:border-[#1e90ff] text-white font-bold py-2 px-4 rounded inline-flex items-center gap-2 text-xl text-center justify-center",
  imglink: "inline-flex gap-2 items-center",
  image: "text-[#2f3640] text-8xl hover:text-[#1e90ff] cursor-pointer",
  textarea: "border border-[#2f3640] rounded p-2 h-32",
  others:
    "border border-[#2f3640] rounded p-2 flex flex-row gap-2 space-between justify-between px-10",
  other: "flex flex-col gap-2 text-center",
  submitbtn:
    "bg-[#1e90ff] hover:bg-white hover:text-[#1e90ff] hover:border hover:border-[#1e90ff] text-white font-bold py-2 px-4 rounded inline-flex items-center gap-2 text-xl text-center justify-center",
};
function PlacesComponent() {
  const { action } = useParams();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [imglink, setImglink] = useState("");
  const [addedImg, setAddedImg] = useState([]);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [maxGuests, setMaxGuests] = useState(1);
  const [checkin, setCheckin] = useState("");


async function uploadImg(ev) {
    const files = ev.target.files;
    const data = new FormData();
    for(let i = 0; i < files.length; i++) {
        data.append("img", files[i]);
    }
    await axios.post("/upload", data , {    
        headers: {
            "Content-Type": "multipart/form-data",
            },
            })
            .then((res) => {
                const {data:filename} = res;
                setAddedImg(prev => [...prev, filename]);
            })
}
  return (
    <div>
      {action !== "add" && (
        <Link className={style.link} to="/account/places/add">
          <button className={style.btn}>
            <IoAddCircle />
            Add Place
          </button>
        </Link>
      )}
      {action === "add" && (
        <div>
          <form className={style.form}>
            <label className={style.label} htmlFor="name">
              Title
            </label>
            <input
              className={style.input}
              type="text"
              placeholder="Title"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
            <label className={style.label} htmlFor="address">
              Address
            </label>
            <input
              className={style.input}
              type="text"
              placeholder="Address"
              value={address}
              onChange={(ev) => setAddress(ev.target.value)}
            />
            <label className={style.label} htmlFor="price">
              Price
            </label>
            <input className={style.input} type="number" placeholder="Price" />
            <label className={style.label} htmlFor="image">
              Image
            </label>
            <div className="flex flex-col gap-2">
                <label className={style.label}>
                  Upload from your device
                    <input type="file" multiple onChange={uploadImg} className="hidden" />
                    <div className="flex-col">
                    <div className="flex flex-row gap-2">
                {addedImg.length > 0 && addedImg.map((img, index) => (
                    <div className={style.imglink} key={index}>
                        <img src={`http://localhost:5000/uploads/${img}`} alt="img" className="rounded-2xl w-20 object-cover" />
                        <button className={style.submitImg} onClick={() => setAddedImg(prev => prev.filter((img, i) => i !== index))}>Remove</button>
                    </div>
                ))}
                
            </div>
                    <AiOutlineCloudUpload className={style.image} />
                    </div>
                </label>
            </div>
    
            <label className={style.label} htmlFor="description">
              Description
            </label>
            <textarea
              className={style.textarea}
              type="text"
              placeholder="Description"
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />
            <PerksComponent seleced={perks} onChange={setPerks} />
            <div className={style.others}>
              <div className={style.other}>
                <label className={style.label} htmlFor="guests">
                  Max Guests
                </label>
                <input
                  className={style.input}
                  type="number"
                  placeholder="Max Guests"
                  value={maxGuests}
                  onChange={(ev) => setMaxGuests(ev.target.value)}
                />
              </div>
              <div className={style.other}>
                <label className={style.label} htmlFor="checkin">
                  Check In
                </label>
                <input
                  className={style.input}
                  type="time"
                  placeholder="Check In Time"
                  value={checkin}
                  onChange={(ev) => setCheckin(ev.target.value)}
                />
              </div>
              <div className={style.other}>
                <label className={style.label} htmlFor="checkout">
                  Check Out
                </label>
                <input
                  className={style.input}
                  type="time"
                  placeholder="Check Out Time"
                  value={checkin}
                  onChange={(ev) => setCheckin(ev.target.value)}
                />
              </div>
            </div>
            <button className={style.submitbtn}>Add Place</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default PlacesComponent;
