import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, ArrowLeft, Mail, Lock } from "lucide-react";


export default function TeacherLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Teacher login simulated! Connect backend here.");
    // navigate("/teacher-dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-[#0b3a8f] transition-colors font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center border-2 border-[#0b3a8f] shadow-sm">
            <User className="w-8 h-8 text-[#0b3a8f]" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-[#0b3a8f] font-serif">
          Faculty Portal
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Sign in to manage attendance, grading, and notices.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl border border-slate-100 sm:rounded-2xl sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-slate-700">Employee ID or Email</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  required
                  className="block w-full pl-10 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b3a8f] focus:border-[#0b3a8f] sm:text-sm transition-colors"
                  placeholder="e.g. emp@wonderstar.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="password"
                  required
                  className="block w-full pl-10 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b3a8f] focus:border-[#0b3a8f] sm:text-sm transition-colors"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" type="checkbox" className="h-4 w-4 text-[#0b3a8f] focus:ring-[#0b3a8f] border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-700">Remember me</label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-[#0b3a8f] hover:text-blue-800">Forgot password?</a>
              </div>
            </div>

            <button type="submit" className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-[#0b3a8f] hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0b3a8f] transition-colors">
              Secure Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}