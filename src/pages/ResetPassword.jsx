import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE from "../config/api";

export default function ResetPassword() {

  const navigate = useNavigate();

  const { state } = useLocation();

  const [form, setForm] = useState({
    code: "",
    newPassword: ""
  });

  const handleReset = async () => {

    try {

      await axios.post(
        `${API_BASE}/api/auth/reset-password`,
        {
          email: state.email,
          code: form.code,
          newPassword: form.newPassword
        }
      );

      alert("Password updated");

      navigate("/auth");

    } catch (err) {

      alert(
        err.response?.data?.error
      );

    }

  };

  return (

    <div className="auth-page">

      <div className="auth-box">

        <h2>Reset Password</h2>

        <input
          placeholder="Verification Code"
          onChange={(e) =>
            setForm({
              ...form,
              code: e.target.value
            })
          }
        />

        <input
          type="password"
          placeholder="New Password"
          onChange={(e) =>
            setForm({
              ...form,
              newPassword: e.target.value
            })
          }
        />

        <button onClick={handleReset}>
          Reset Password
        </button>

      </div>

    </div>

  );

}