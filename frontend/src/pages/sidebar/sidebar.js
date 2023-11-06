import React from "react";
import "./sidebar.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SafetyDividerIcon from '@mui/icons-material/SafetyDivider';
import DoneIcon from '@mui/icons-material/Done';
import ListIcon from '@mui/icons-material/List';
import SidebarOptions from "./SidebarOptions";
import { Avatar,IconButton, MenuItem,Menu, ListItemIcon } from "@mui/material";
import {Button,Divider} from "@mui/material";
import avator from "../../assests/images/avatar.png"
import { useState } from "react";


const Sidebar = ({handleLogout,user}) =>{
    const [anchorEl,setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);

    const handleClick = e =>{
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () =>{
        setAnchorEl(null);
    }

    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon"/>
            <SidebarOptions active Icon ={HomeIcon} text="Home" />
            <SidebarOptions active Icon ={SearchIcon} text="Explore" />
            <SidebarOptions active Icon ={NotificationsIcon} text="Notifications"/>
            <SidebarOptions active Icon ={MailIcon} text="Messages"/>
            <SidebarOptions active Icon ={BookmarkIcon} text="Bookmarks" />
            <SidebarOptions active Icon ={ListAltIcon } text="List" />
            <SidebarOptions active Icon ={PermIdentityIcon} text="Profile" />
            <SidebarOptions active Icon ={MoreHorizIcon} text="More" />

            <Button variant='outlined' className='sidebar_tweet'>
                Tweet
            </Button>

            <div className="Profile_info">
                <Avatar src={avator}/>
                <div className="user_info">
                    <h4>Saloni Bindal</h4>
                    <h5>@salonibindal</h5>
                </div>
                <IconButton 
                    size="small" 
                    sx={{ml:2}}
                    aria-controls={openMenu?"basic-menu":undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenu?"true":undefined}
                    onClick={handleClick}
                >
                <MoreHorizIcon/>
                </IconButton>
                <Menu id="basic-menu" anchorEl={anchorEl} open={openMenu} onClick={handleClose} onClose={handleClose}>
                    <MenuItem className='Profile_info1'>
                    <Avatar src={avator}/>
                    <div className="user_info  subUser_info">
                       <div>
                       <h4>Saloni Bindal</h4>
                        <h5>@salonibindal</h5>
                       </div>
                       <ListItemIcon className="done_icon">
                            <DoneIcon/>
                       </ListItemIcon>
                    </div>
                    </MenuItem>
                    <Divider/>
                    <MenuItem onClick={handleClose}>Add an existing account</MenuItem>
                    <MenuItem onClick={handleLogout}>Log out @salonibindal</MenuItem>
                </Menu>
            </div>
        </div>
    );
};

export default Sidebar;