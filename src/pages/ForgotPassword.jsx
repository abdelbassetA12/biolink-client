import { useState } from "react";
import axios from "axios";
import API_BASE from "../config/api";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSend = async () => {

    try {

      await axios.post(
        `${API_BASE}/api/auth/forgot-password`,
        { email }
      );

      navigate("/reset-password", {
        state: { email }
      });

    } catch (err) {

      alert(
        err.response?.data?.error
      );

    }

  };

  return (

    <div className="auth-page">

      <div className="auth-box">

        <h2>Forgot Password</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <button onClick={handleSend}>
          Send Code
        </button>

      </div>

    </div>

  );

}