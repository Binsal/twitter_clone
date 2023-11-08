import React from "react";
import { signOut } from "firebase/auth";
import auth from '../firebase.init'
import { Outlet } from "react-router-dom";
import Sidebar from './sidebar/sidebar'
import Widgets from './Widgets/Widgets'
import {useAuthState} from 'react-firebase-hooks/auth'

const Home = () =>{

    const user = useAuthState(auth);

    const handleLogout = ()=>{
        signOut(auth)
    }

    return(
        <div className="app">
            <Sidebar handleLogout={handleLogout} user={user}/>
            <Outlet />
            <Widgets/>
        </div>
    );
};

export default Home;