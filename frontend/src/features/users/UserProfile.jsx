import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchUserProfile } from "../auth/AuthSlice";
import {fetchUserProfile} from '../auth/authSlice'

const Profile = () => {
    const user = useSelector((state) => state.auth.user);
    const status = useSelector((state) => state.auth.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);
  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Profile</h2>
      {user && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <p className="text-lg">{user.username}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <p className="text-lg">{user.email}</p>
          </div>
          {/* Add more fields as necessary */}
        </div>
      )}
    </div>
  );
};

export default Profile;
