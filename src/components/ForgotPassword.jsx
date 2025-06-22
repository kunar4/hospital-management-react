import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailCheck = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = storedUsers.find(user => user.email === email);
    if (userExists) {
      setEmailVerified(true);
    } else {
      alert("Email not found. Please sign up.");
      navigate("/signup");
    }
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = storedUsers.map(user => {
      if (user.email === email) {
        return { ...user, password: newPassword };
      }
      return user;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert("Password reset successfully! Please log in.");
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h3 className="text-center text-success mb-4">Forgot Password</h3>
          <div className="card p-4 shadow">
            {!emailVerified ? (
              <form onSubmit={handleEmailCheck}>
                <div className="form-group mb-3">
                  <label htmlFor="email">Enter your email address</label>
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
                <button type="submit" className="btn btn-success btn-block">
                  Verify Email
                </button>
              </form>
            ) : (
              <form onSubmit={handlePasswordReset}>
                <div className="form-group mb-3">
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    placeholder="Enter new password"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="confirmPassword">Confirm New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="Confirm new password"
                  />
                </div>
                <button type="submit" className="btn btn-success btn-block">
                  Set New Password
                </button>
              </form>
            )}

            <div className="mt-3 text-center">
              <p>Remember your password? <a href="/login">Login</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
