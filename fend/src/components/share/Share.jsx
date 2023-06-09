import "./share.css";
import FilterOutlinedIcon from '@mui/icons-material/FilterOutlined';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';

export default function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={ user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"} alt="" />
          <input placeholder={"What's in your mind " + user.username + "?"} 
          className="shareInput"
          ref={desc} />

        </div>
        <hr className="shareHr"/>
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <CancelTwoToneIcon className="shareCancelImg" onClick={() => setFile(null)} />
           
          </div>
        )} 
        <form className="shareBottom" onSubmit={submitHandler}>
            <div className="shareOptions">
                <label htmlFor="file" className="shareOption">
                    <FilterOutlinedIcon  className="shareIcon"/>
                    <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />  
                </label>

                <div className="shareOption">
                    <VideoCameraBackOutlinedIcon  className="shareIcon"/>
                   
                </div>
                <div className="shareOption">
                    <InsertLinkOutlinedIcon className="shareIcon"/>
                 
                </div>
                <div className="shareOption">
                    <LocationOnOutlinedIcon className="shareIcon"/>
                 
                </div>
                <div className="shareOption">
                    <SentimentSatisfiedOutlinedIcon className="shareIcon"/>
                 
                </div>
            </div>
            <button className="shareButton">Post</button>
        </form>
        
      </div>
     
    </div>
  );
}
