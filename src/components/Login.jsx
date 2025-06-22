import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
  
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find((u) => u.email === email && u.password === password);
  
    const admin = { email: 'admin@hospital.com', password: 'admin123' };
  
    if (user) {
      // Save the current logged-in user to localStorage
      localStorage.setItem("currentUser", JSON.stringify(user));  // ✅ Store current user
      alert("Login successful!");
      navigate("/home"); // Navigate to appointments page for users
    } else if (email === admin.email && password === admin.password) {
      // Save admin to localStorage
      localStorage.setItem("currentUser", JSON.stringify(admin));  // ✅ Store admin user
      alert("Admin login successful!");
      navigate("/adminPanel"); // Navigate to admin panel
    } else {
      alert("Invalid email or password");
    }
  };
  
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h3 className="text-center text-success mb-4">Hospital Management Login</h3>
          <div className="card p-4 shadow">
            <form onSubmit={handleLogin}>
              <div className="form-group mb-3">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="btn btn-success btn-block">
                Login
              </button>
            </form>
            <div className="mt-3 text-center">
              <p>Don't have an account? <a href="/signup">Signup</a></p>
              <p>Forgot your password? <a href="/forgotpassword">Reset Password</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
