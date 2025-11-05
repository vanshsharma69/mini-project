import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({ email: "", password: "", name: "" });
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (isSignUp) {
      if (users.find((u) => u.email === formData.email)) {
        alert("User already exists!");
        return;
      }
      users.push(formData);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Account created successfully!");
      setIsSignUp(false);
    } else {
      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );
      if (user) {
        alert(`Welcome back, ${user.name}!`);
        navigate("/");
      } else alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left Image Section */}
      <div className="hidden md:flex w-1/2 bg-gray-50 items-center justify-center">
        <div className="text-center space-y-6">
          <img
            src="https://imgs.search.brave.com/gNg_J-ii6BHwULpwmmYyhWSA8sMwm-9GddHf0kYhoPw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvbWFuLXBy/b2dyYW1taW5nLXNv/ZnR3YXJlLWF0LWxh/cHRvcC1pbGx1c3Ry/YXRpb24tc3ZnLWRv/d25sb2FkLXBuZy0x/MTg3MTc5OS5wbmc"
            alt="illustration"
            className="w-[600px] mx-auto"
          />
        </div>
      </div>

      {/* Right Form Section */}
      <div className="flex flex-col justify-center w-full md:w-1/2 px-10 md:px-20">
        <div className="max-w-md w-full mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            {isSignUp ? "Create Your Account" : "Welcome Back"}
          </h2>
          <p className="text-gray-500 mb-8">
            {isSignUp
              ? "Join EncryptoNotes and start securely managing your notes."
              : "Sign in to continue managing your encrypted notes."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignUp && (
              <div>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your username"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </div>
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-300 outline-none"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-10 py-2 border rounded-md focus:ring-2 focus:ring-blue-300 outline-none"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 cursor-pointer"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>

            <button
              type="submit"
              className="w-full text-lg font-semibold bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            {isSignUp ? "Already have an account?" : "Don’t have an account?"}{" "}
            <span
              onClick={toggleMode}
              className="text-black font-medium cursor-pointer hover:underline"
            >
              {isSignUp ? "Sign In here" : "Sign Up here"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
