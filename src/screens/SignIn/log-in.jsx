
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {GraduationCap, Github, Facebook, Apple } from 'lucide-react'
import illustration from '/src/assets/Illustrations.svg';
import { auth } from '@/apis';
import { useAuth } from '@/hooks/use-auth';

  const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useAuth();
    const handleSubmit = async(e) => {
      e.preventDefault(); 
      try{
        const {data}=await auth.login(email,password);
        // console.log(data);
        if(data.token){
          localStorage.setItem("token",data.token);
          login(data.userExists,data.token);
          navigate("/");
        }
      }catch(err){
        console.log(err);
      }
      // navigate('/'); 
    }
  return (
<div className="min-h-screen flex flex-col">
      
      <nav className="flex justify-between items-center p-6 bg-white shadow-sm px-[300px]">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative">
            <GraduationCap className="w-12 h-12 text-[blue] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <span className="text-2xl font-semibold">OS-Code</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-base text-gray-600">Don't have an account?</span>
          <a
            href="/create-account"
            className="text-base text-blue-600 bg-[#FFEEE8] px-[24px] py-[5px] hover:text-[#CC522B] hover:bg-[#FFDDD1]"
          >
            Create Account
          </a>
        </div>
      </nav>

      <div className="flex-grow flex">
      
        <div className="hidden lg:block w-1/2 bg-[#ebebff] relative overflow-hidden">
          <img
            src={illustration}
            alt="Login illustration"
            className="w-full h-[645px] object-contain" 
          />
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-lg ">
              <div className="p-8">
                <h2 className="text-3xl text-center font-semibold mb-8">
                  Sign in to your account
                </h2>
              </div>
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      id="email"
                      placeholder="Username or email address..."
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                        focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                      id="password"
                      placeholder="Password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                        focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h - 4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember"
                      className="text-sm font-medium text-gray-700"
                    >
                      Remember me
                    </label>
                  </div>
                  <button
                    className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    type="submit"
                  >
                    Sign in
                  </button>

                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-500">
                        SIGN IN WITH
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    
                    <a>
                    <button className="w-full inline-flex justify-center items-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      Google
                    </button>
                    </a>

                    <a>
                    <button className="w-full inline-flex justify-center items-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <Facebook className="w-5 h-5 mr-2" />
                      Facebook
                    </button>
                    </a>

                    <a>
                    <button className="w-full inline-flex justify-center items-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <Apple className="w-5 h-5 mr-2" />
                      Apple
                    </button>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LoginPage;
