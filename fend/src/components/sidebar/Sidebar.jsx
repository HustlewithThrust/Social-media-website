import "./sidebar.css";
import {TrendData} from '../../dummyData.js';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import {HomeOutlined} from "@mui/icons-material";
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import {
  Laptop,
  Event,
  Search,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
        <div className="LogoSearch">
        <div className="searchbar">
        <Search className="searchIcon" /> 
          <input placeholder="Explore Beeewing" className=" searchInput"
          />
        </div>
      </div>
          <li className="sidebarListItem">
            <HomeOutlined className="sidebarIcon" />
            <a href="/" className="sidebarListItemText">Home</a>
          </li>
          <li className="sidebarListItem">
            <VideocamOutlinedIcon className="sidebarIcon" />
            <a href="/meeting" className="sidebarListItemText">Video Conferencing</a>
          </li>
          <li className="sidebarListItem">
            <PeopleAltOutlinedIcon className="sidebarIcon" />
            <a href="/userfriends" className="sidebarListItemText">My Friends</a>
          </li>
          
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <a href="/Events" className="sidebarListItemText">Events</a>
          </li>
          <li className="sidebarListItem">
            <Laptop className="sidebarIcon" />
            <a href="/Marketplace" className="sidebarListItemText">Marketplace</a>
          </li>
        </ul>
        <div className="TrendCard">
            <h3>Today Trending</h3>
            {TrendData.map((trend)=>{
                return(
                    <div className="trend">
                        <span>#{trend.name}</span>
                        <span>{trend.shares}k shares</span>
                    </div>
                )
            })}

    </div>
    
      </div>
    </div>
  );
}
