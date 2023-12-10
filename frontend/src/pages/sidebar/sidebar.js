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
// import SafetyDividerIcon from '@mui/icons-material/SafetyDivider';
import DoneIcon from '@mui/icons-material/Done';
// import ListIcon from '@mui/icons-material/List';
import SidebarOptions from "./SidebarOptions";
import { Avatar,IconButton, MenuItem,Menu, ListItemIcon } from "@mui/material";
import {Button,Divider} from "@mui/material";
import avator from "../../assests/images/avatar.png"
import { useState } from "react";
import { Link } from "react-router-dom";
import CustomeLink from "./CustomeLink";
import loggedInUser from '../../hooks/useLoggedInUser'


const Sidebar = ({handleLogout,user}) =>{
    const [anchorEl,setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);

    const handleClick = e =>{
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () =>{
        setAnchorEl(null);
    }
    const result = user?.email?.split('@')[0];

    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar_twitterIcon"/>
            <CustomeLink to='home/feed'>
            <SidebarOptions active Icon ={HomeIcon} text="Home" />
            </CustomeLink>
            <CustomeLink to='home/explore'>
            <SidebarOptions active Icon ={SearchIcon} text="Explore" />
            </CustomeLink>
            <CustomeLink to='home/notifications'>
            <SidebarOptions active Icon ={NotificationsIcon} text="Notifications"/>
            </CustomeLink>
            <CustomeLink to='home/messages'>
            <SidebarOptions active Icon ={MailIcon} text="Messages"/>
            </CustomeLink>
            <CustomeLink to='home/bookmarks'>
            <SidebarOptions active Icon ={BookmarkIcon} text="Bookmarks" />
            </CustomeLink>
            <CustomeLink to='home/list'>
            <SidebarOptions active Icon ={ListAltIcon } text="List" />
            </CustomeLink>
            <CustomeLink to='home/profile'>
            <SidebarOptions active Icon ={PermIdentityIcon} text="Profile" />
            </CustomeLink>
            <CustomeLink to='home/more'>
            <SidebarOptions active Icon ={MoreHorizIcon} text="More" />
            </CustomeLink>

            <Button variant='outlined' className='sidebar_tweet'>
                Tweet
            </Button>

            <div className="Profile_info">
                <Avatar src={avator}/>
                <div className="user_info">
                    <h4>
                    {loggedInUser[0]?.name ? loggedInUser[0].name : user && user[0]?.displayName}
                    </h4>
                    <h5>@{result}</h5>
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
                        <h4>
                            {loggedInUser[0]?.name ? loggedInUser[0].name : user && user[0]?.displayName}
                        </h4>
                            <h5>@{result}</h5>
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