import { useState } from 'react'; 
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isFormValid =
    form.firstName &&
    form.lastName &&
    form.password.length >= 6 &&
    form.password === form.confirmPassword &&
    form.agree;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className='layout'>
      <div className="min-h-screen flex items-center justify-center ">
        <div className="bg-white p-8 rounded-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Complete Sign Up
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="First name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Last name"
                required
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password (min. 6 characters)"
                required
              />
              {form.password.length > 0 && form.password.length < 8 && (
                <p className="text-red-500 text-sm mt-1">
                  Password must be at least 8 characters.
                </p>
              )}
              <span
                onClick={togglePasswordVisibility}
                className="absolute top-[2.5rem] right-4 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm Password"
                required
              />
              {form.confirmPassword.length > 0 &&
                form.password !== form.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    Passwords do not match.
                  </p>
              )}
              <span
                onClick={toggleConfirmPasswordVisibility}
                className="absolute top-[2.5rem] right-4 cursor-pointer"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="text-gray-700">
                I agree to Haven’s{' '}
                <a href="#" className="text-blue-500 underline">
                  Terms & Conditions
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-500 underline">
                  Privacy Policy
                </a>
              </label>
            </div>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-2 px-4 text-white font-semibold rounded-md ${
                isFormValid
                  ? 'bg-blue hover:bg-blue'
                  : 'bg-gray cursor-not-allowed'
              }`}
            >
              Sign Up
            </button>
          </form>

          <div className="mt-4">
            <div className="text-center text-gray-500">Or</div>
            <button
              className="w-full mt-4 py-2 px-4 border text-white bg-blue rounded-md "
              onClick={() => {
                console.log("Handle Google Sign-In with Firebase later");
              }}
            >
              Sign up with Google
            </button>
          </div>

          <p className="mt-6 text-center">
            Already have an account?{' '}
            <Link to='/sign-in' className='text-blue underline'>
            Login
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
