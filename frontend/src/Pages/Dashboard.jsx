import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../Dashboard/components/Topbar";
import WatchList from "../Dashboard/components/WatchList";
import { GeneralProvider } from "../context/GeneralContext";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Top navigation bar */}
            <TopBar />

            {/* Main dashboard content */}
            <div className="flex flex-1 mt-4 px-4 md:px-8">
                {/* Sidebar / WatchList */}


                {/* Main content area for nested routes */}
                <div className="flex-1 bg-white rounded-lg shadow p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;