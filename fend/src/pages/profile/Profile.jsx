import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);


  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">

            <div className="profileCover">
                <img
                  className="profileCoverImg"
                  src={
                    user.coverPicture
                      ? PF + user.coverPicture
                      : PF + "person/Beeewing.png"
                  }
                  alt=""
                />
                <img
                  className="profileUserImg"
                  src={
                    user.profilePicture
                      ? PF + user.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                />
              </div>

              <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>

                <div className="profileRightBottom">

                  <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">City:</span>
                      <span className="rightbarInfoValue">Basti</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">From:</span>
                      <span className="rightbarInfoValue">Uttar Pradesh</span>
                    </div>
                    <div className="rightbarInfoItem">
                      <span className="rightbarInfoKey">Relationship:</span>
                      <span className="rightbarInfoValue">Single</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profileRightBottom">
              <Rightbar user={user} />
              <Feed username={username} />
            </div>
          </div>
        </div>
        </div>
      </>
      );
}
