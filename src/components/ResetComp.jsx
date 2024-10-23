import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Email submitted: " + email);
    
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md p-6">
          <h2 className="text-2xl font-semibold text-center text-gray mb-6">
            Forgot Password
          </h2>
          <p className="text-gray text-center mb-6">
            Enter your email address and we’ll email you a link to reset your password.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray rounded-md shadow-sm placeholder-gray focus:outline-none focus:ring-blue-500 focus:border-blue sm:text-sm"
                placeholder="Email address"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue rounded-md hover:bg-primary focus:ring-4 focus:ring-blue focus:outline-none"
            >
              Send Link
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
