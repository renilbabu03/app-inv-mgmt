import React from 'react';
import './Login.scss';

type FieldType = {
  date?: string;
};




const Login: React.FC = () => {
  return (
    <>
      <div className="max-w-[80%] w-full mx-auto">

        <h2 className="text-2xl font-semibold mb-2">Sign in to your account</h2>
        <p className="text-gray-500 mb-6">
          Not a member? <a href="#" className="text-blue-600 hover:underline">Start a 14 day free trial</a>
        </p>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email address</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="inline-flex items-center">
              <input type="checkbox" className="text-blue-600 rounded" />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6 text-center text-gray-500">
          <p className="mb-2">Or continue with</p>
          <div className="flex justify-center space-x-4">
            <button className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100">
              <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="h-5 w-5 mr-2" />
              Google
            </button>
            <button className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100">
              <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="h-5 w-5 mr-2" />
              GitHub
            </button>
          </div>
        </div>

      </div>
    </>
  )
}
export default Login;