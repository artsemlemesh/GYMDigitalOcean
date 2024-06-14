import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "./authSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);
  const user = useSelector((state) => state.auth.user);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");




  
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  const handleLogout = async () => {
    dispatch(logoutUser());
  };

  return (
    <div className="relative">
      {user ? (
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          {authStatus === "loading" ? "Logging out ..." : "Logout"}
        </button>
      ) : (
        <div className="absolute right-0 mt-2 w-72 bg-white shadow-md rounded p-4 z-50">
          <form onSubmit={handleLogin} className="space-y-4">
            <h2 className="text-xl font-bold text-center">Login</h2>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                {error}
              </div>
            )}
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              {authStatus === "loading" ? "Logging in ..." : "Login"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
