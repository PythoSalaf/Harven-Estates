import { useState } from 'react';
import {  useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false); 
  const isFormValid = form.email && form.password;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const navigate = useNavigate(); 

  const handleGoogleLogin = () => {
    console.log('Implement Google Login with Firebase');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log('Login submitted');
      navigate('/');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='layout'>

      <div className="min-h-screen flex items-center justify-center">
        <div className="p-8 rounded-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Welcome back to Haven!
          </h2>
          <p className="text-center text-gray mb-6">
            Login to your Agency’s workspace
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray">Email address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue"
                placeholder="Email address"
                required
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue"
                placeholder="Password"
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute top-[2.5rem] right-4 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="text-right mb-4"> Forgot your password? 
              <Link to="/reset-password" className="text-blue underline">
                Reset it here
              </Link>
            </div>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-2 px-4 text-white font-semibold rounded-md ${
                isFormValid
                  ? 'bg-blue hover:bg-primary'
                  : 'bg-gray cursor-not-allowed'
              }`}
            >
              Login
            </button>
          </form>

          <div className="mt-4">
            <div className="text-center text-gray">Or</div>
            <button
              onClick={handleGoogleLogin}
              className="w-full mt-4 py-2 px-4 border text-white border-blue rounded-md bg-blue hover:bg-primary"
            >
              Login with Google
            </button>
          </div>

          <p className="mt-6 text-center">
            New to Haven?{' '}
            <Link to="/sign-up" className="text-blue underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
      <div className='flex justify-center gap-3 text-sm mb-3 md:mb-5'>
        <p>Help |</p>
        <p>Terms & Condition |</p>
        <p>Privacy policy</p>
      </div>
    </div>
  );
}
