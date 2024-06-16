import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../auth/authSlice';

import imagee from '../../../public/user.jpg'

const Profile = () => {
  const user = useSelector(state => state.auth.user);
  const status = useSelector(state => state.auth.status);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, user]);

  if (status === 'loading') {
    return <div className="text-center"><p>Loading...</p></div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Profile</h2>
      {user && (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img src={imagee} alt="Profile" className="h-48 w-full object-cover md:h-full md:w-48"/>
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Profile Details</div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black">Username: {user.username}</p>
              <p className="block mt-1 text-lg leading-tight font-medium text-black">Email: {user.email || 'default-email@gmail.com'}</p>
              {/* Add more fields as necessary */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;