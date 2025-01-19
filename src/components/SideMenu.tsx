import '../styles/SideMenu.css'
import { Link } from "react-router-dom";
import logoImage from '../assets/image/greenleaf-logo.png';
import dashboardIcon from '../assets/icon/dashboard-one-is-filled.svg';
import farmIcon from '../assets/icon/farm.svg';
import employeeIcon from '../assets/icon/employee-solid.svg';
import vehicleIcon from '../assets/icon/semi-truck-vehicle-alt.svg';
import equipmentIcon from '../assets/icon/tools.svg';
import cropIcon from '../assets/icon/seedling.svg';
import cropDetailsIcon from '../assets/icon/monitor-dashboard.svg';

export function SideMenu() {
    return (
        <>
            <aside className="sidebar w-1/5 bg-green-200 flex flex-col items-center p-6">
                <div className="logo flex justify-center mb-12">
                    <img src={logoImage} alt="Logo" className="w-24" />
                </div>
                <nav className="menu w-full flex flex-col items-start space-y-4 gap-8">
                    <div className="menu-item group w-full p-2 flex items-center cursor-pointer transition duration-300 hover:bg-green-400 rounded-full">
                        <Link to="/dashboard" className="flex items-center space-x-4">
                            <div className="icon flex justify-center items-center">
                                <img src={dashboardIcon} alt="Home" className="custom-icon" />
                            </div>
                            <span className="menu-name opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 text-gray-800 font-bold text-lg">Dashboard</span>
                        </Link>
                    </div>

                    <div className="menu-item group w-full p-2 flex items-center cursor-pointer transition duration-300 hover:bg-green-400 rounded-full">
                        <Link to="/field" className="flex items-center space-x-4">
                            <div className="icon flex justify-center items-center">
                                <img src={farmIcon} alt="Field" className="custom-icon" />
                            </div>
                            <span className="menu-name opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 text-gray-800 font-bold text-lg">Field</span>
                        </Link>
                    </div>

                    <div className="menu-item group w-full p-2 flex items-center cursor-pointer transition duration-300 hover:bg-green-400 rounded-full">
                        <Link to="/staff" className="flex items-center space-x-4">
                            <div className="icon flex justify-center items-center">
                                <img src={employeeIcon} alt="Staff" className="custom-icon" />
                            </div>
                            <span className="menu-name opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 text-gray-800 font-bold text-lg">Staff</span>
                        </Link>
                    </div>

                    <div className="menu-item group w-full p-2 flex items-center cursor-pointer transition duration-300 hover:bg-green-400 rounded-full">
                        <Link to="/vehicle" className="flex items-center space-x-4">
                            <div className="icon flex justify-center items-center">
                                <img src={vehicleIcon} alt="Vehicle" className="custom-icon" />
                            </div>
                            <span className="menu-name opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 text-gray-800 font-bold text-lg">Vehicle</span>
                        </Link>
                    </div>

                    <div className="menu-item group w-full p-2 flex items-center cursor-pointer transition duration-300 hover:bg-green-400 rounded-full">
                        <Link to="/equipment" className="flex items-center space-x-4">
                            <div className="icon flex justify-center items-center">
                                <img src={equipmentIcon} alt="Equipment" className="custom-icon" />
                            </div>
                            <span className="menu-name opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 text-gray-800 font-bold text-lg">Equipment</span>
                        </Link>
                    </div>

                    <div className="menu-item group w-full p-2 flex items-center cursor-pointer transition duration-300 hover:bg-green-400 rounded-full ">
                        <Link to="/crop" className="flex items-center space-x-4">
                            <div className="icon flex justify-center items-center">
                                <img src={cropIcon} alt="Crop" className="custom-icon" />
                            </div>
                            <span className="menu-name opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 text-gray-800 font-bold text-lg">Crop</span>
                        </Link>
                    </div>

                    <div className="menu-item group w-full p-2 flex items-center cursor-pointer transition duration-300 hover:bg-green-400 rounded-full">
                        <Link to="/cropdetails" className="flex items-center space-x-4">
                            <div className="icon flex justify-center items-center">
                                <img src={cropDetailsIcon} alt="Crop Details" className="custom-icon" />
                            </div>
                            <span className="menu-name opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 text-gray-800 font-bold text-lg">Crop Details</span>
                        </Link>
                    </div>
                </nav>
            </aside>
        </>
    );
}
