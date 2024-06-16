import { Link, Navigate, Outlet, Route, Routes } from "react-router-dom";
import EnrolledClasses from "../components/EnrolledClasses";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-200">
      {/* sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 text-xl font-bold text-gray-800">Dashboard</div>
        <nav className="p-4">
          <ul>
            <li className="mb-4">
              <Link
                to="/dashboard/enrolled-classes"
                className="text-gray-700 hover:text-blue-600"
              >
                Enrolled classes
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/dashboard/profile"
                className="text-gray-700 hover:text-blue-600"
              >
                Profile{" "}
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/dashboard/settings"
                className="text-gray-700 hover:text-blue-600"
              >
                Settings{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* main content */}

      <div className="flex-1 p-6 overflow-x-auto">
        {" "}
        {/* overflow-x-auto - makes classes block scrollabke */}
        <div className="flex space-x-4">
          <Outlet />
          {/* outlet is a placeholder in my parent route component where the nested route components will be rendered. acts as a dynamic part of the paretn route */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
