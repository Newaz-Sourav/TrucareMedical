import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../config/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const provider = new GoogleAuthProvider();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful");
    } catch (err) {
      // Extract the error code after "auth/"
      const errorCode = err.code.split("/")[1];
      setError(errorCode);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");

    try {
      await signInWithPopup(auth, provider);
      console.log("Google Sign-In successful");
    } catch (err) {
      // Extract the error code after "auth/"
      const errorCode = err.code.split("/")[1];
      setError(errorCode);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Log In</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 flex justify-center">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8c0-17.8-1.6-35.2-4.6-52H249v98.4h135.9c-5.9 31.8-23.4 58.7-50.3 76.7v64.1h81.3c47.5-43.7 74.1-108 74.1-187.2zM249 452c65.7 0 120.7-21.9 160.9-59.4l-81.3-64.1c-22.5 15.1-51.1 23.8-79.6 23.8-61.5 0-113.6-41.5-132.1-97.5H74.3v61.6C114.6 410.4 177.3 452 249 452zM116.9 315.8c-5.7-17-8.9-35.1-8.9-53.8s3.2-36.8 8.9-53.8v-61.6H74.3C53.7 181.4 41 217.4 41 256s12.7 74.6 33.3 100.4l75.7-61.6zm132.1-165.4c28.5 0 54.1 9.9 74.2 28.6l55.7-55.7C324.3 100.6 287.7 85 249 85c-71.7 0-134.4 41.6-165.7 100.8l75.7 61.6c18.6-56.1 70.7-97.6 132.1-97.6z"
              ></path>
            </svg>
            Sign in with Google
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
