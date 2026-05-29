import { useState } from "react";
import axios from "axios";
import API_BASE from "../config/api";
import { FiMail, FiLock } from "react-icons/fi";

export default function ForgotPassword() {

  const [step, setStep] = useState("email");

  const [email, setEmail] = useState("");

  const [form, setForm] = useState({
    code: "",
    newPassword: ""
  });

  const [loading, setLoading] =
    useState(false);

  // SEND CODE
  const handleSendCode = async () => {

    try {

      setLoading(true);

      await axios.post(
        `${API_BASE}/api/auth/forgot-password`,
        { email }
      );

      setStep("reset");

    } catch (err) {

      alert(
        err.response?.data?.error
      );

    } finally {

      setLoading(false);

    }

  };

  // RESET PASSWORD
  const handleResetPassword =
    async () => {

      try {

        setLoading(true);

        await axios.post(
          `${API_BASE}/api/auth/reset-password`,
          {
            email,
            code: form.code,
            newPassword:
              form.newPassword
          }
        );

        alert(
          "Password updated successfully"
        );

        window.location.href = "/auth";

      } catch (err) {

        alert(
          err.response?.data?.error
        );

      } finally {

        setLoading(false);

      }

    };

  return (

    <div className="auth-page">

      <div className="auth-right">

        <div className="auth-box">

          {/* LOGO */}
          <div className="logo-box">

            <div className="logo-circle">
              B
            </div>

            <h2>Bio Link</h2>

          </div>

          {/* EMAIL STEP */}
          {step === "email" && (

            <div className="form-wrapper">

              <h2 className="auth-title">
                Forgot Password
              </h2>

              <p className="auth-subtitle">
                Enter your email to receive
                a verification code
              </p>

              <div className="input-box">

                <FiMail className="input-icon" />

                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />

              </div>

              <button
                className="submit-btn"
                onClick={handleSendCode}
                disabled={loading}
              >
                {
                  loading
                    ? "Sending..."
                    : "Send Code"
                }
              </button>

            </div>

          )}

          {/* RESET STEP */}
          {step === "reset" && (

            <div className="form-wrapper">

              <h2 className="auth-title">
                Reset Password
              </h2>

              <p className="auth-subtitle">
                Enter the verification code
                and your new password
              </p>

              <div className="input-box">

                <FiMail className="input-icon" />

                <input
                  placeholder="Verification Code"
                  value={form.code}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      code: e.target.value
                    })
                  }
                />

              </div>

              <div className="input-box">

                <FiLock className="input-icon" />

                <input
                  type="password"
                  placeholder="New Password"
                  value={form.newPassword}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      newPassword:
                        e.target.value
                    })
                  }
                />

              </div>

              <button
                className="submit-btn"
                onClick={
                  handleResetPassword
                }
                disabled={loading}
              >
                {
                  loading
                    ? "Updating..."
                    : "Reset Password"
                }
              </button>

            </div>

          )}

        </div>

      </div>

      {/* LEFT */}
      <div className="auth-left">

        <div className="auth-overlay" />

        <div className="auth-content">

          <div className="auth-badge">
            🔒 Secure Password Recovery
          </div>

          <h1>
            Recover your account safely.
          </h1>

          <p>
            We help you reset your
            password securely using
            email verification codes.
          </p>

        </div>

      </div>

    </div>

  );

}
/*
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
  */