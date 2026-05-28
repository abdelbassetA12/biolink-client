import { useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

import API_BASE from "../config/api";

export default function VerifyEmail() {

  const navigate = useNavigate();

  const location = useLocation();

  // email القادم من صفحة التسجيل
  const email = location.state?.email || "";

  const [code, setCode] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const handleVerify = async (e) => {

    e.preventDefault();

    setLoading(true);

    setError("");
    setSuccess("");

    try {

      const res = await axios.post(
        `${API_BASE}/api/auth/verify-code`,
        {
          email,
          code
        }
      );

      setSuccess(res.data.message);

      setTimeout(() => {

        navigate("/auth");

      }, 2000);

    } catch (err) {

      setError(
        err.response?.data?.error ||
        "Verification failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="verify-page">

      <div className="verify-card">

        <h1>
          Verify Email
        </h1>

        <p>
          Enter the 6-digit code sent to:
        </p>

        <strong>
          {email}
        </strong>

        <form onSubmit={handleVerify}>

          <input
            type="text"
            placeholder="Enter verification code"
            value={code}
            onChange={(e) =>
              setCode(e.target.value)
            }
            maxLength={6}
            required
          />

          <button
            type="submit"
            disabled={loading}
          >
            {
              loading
                ? "Verifying..."
                : "Verify"
            }
          </button>

        </form>

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        {success && (
          <p className="success">
            {success}
          </p>
        )}

        <Link to="/auth">
          Back to Login
        </Link>

      </div>

    </div>

  );

}