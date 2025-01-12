import '../styles/Dashboard.css'
import React from "react";
import {SideMenu} from "../components/SideMenu.tsx";
import logout_icon from "../assets/icon/alternate-sign-out.svg"
import {Link} from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex h-screen">
            <SideMenu/>
            <div className="w-4/5">
                <header className="content-header flex justify-between items-center my-7 mx-14">
                    <h1 className="text-4xl font-bold">Dashboard</h1>
                    <Link to="/" className="flex items-center">
                        <img src={logout_icon} className="w-8" alt="Logout"/>
                    </Link>
                </header>
                <div className="cards-container">
                    <div className="cards">
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>
                    <div className="cards">
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
