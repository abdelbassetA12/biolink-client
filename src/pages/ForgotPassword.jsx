import { useState } from "react";
import axios from "axios";
import API_BASE from "../config/api";

import {
  FiMail,
  FiLock,
  FiShield
} from "react-icons/fi";

export default function ForgotPassword() {

  // email -> verify -> password
  const [step, setStep] = useState("email");

  const [email, setEmail] = useState("");

  const [form, setForm] = useState({
    code: "",
    newPassword: ""
  });

  const [loading, setLoading] =
    useState(false);

  // =========================
  // SEND RESET CODE
  // =========================
  const handleSendCode = async () => {

    try {

      setLoading(true);

      await axios.post(
        `${API_BASE}/api/auth/forgot-password`,
        { email }
      );

      setStep("verify");

    } catch (err) {

      alert(
        err.response?.data?.error ||
        "Something went wrong"
      );

    } finally {

      setLoading(false);

    }

  };

  // =========================
  // VERIFY CODE
  // =========================
  const handleVerifyCode = async () => {

    try {

      setLoading(true);

      await axios.post(
        `${API_BASE}/api/auth/verify-reset-code`,
        {
          email,
          code: form.code
        }
      );

      setStep("password");

    } catch (err) {

      alert(
        err.response?.data?.error ||
        "Invalid code"
      );

    } finally {

      setLoading(false);

    }

  };

  // =========================
  // UPDATE PASSWORD
  // =========================
  const handleUpdatePassword =
    async () => {

      try {

        setLoading(true);

        await axios.post(
          `${API_BASE}/api/auth/update-password`,
          {
            email,
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
          err.response?.data?.error ||
          "Something went wrong"
        );

      } finally {

        setLoading(false);

      }

    };

  return (

    <div className="auth-page">

      {/* RIGHT */}
      <div className="auth-right">

        <div className="auth-box">

          {/* LOGO */}
          <div className="logo-box">

            <div className="logo-circle">
              B
            </div>

            <h2>
              Bio Link
            </h2>

          </div>

          {/* =========================
              EMAIL STEP
          ========================= */}
          {step === "email" && (

            <div className="form-wrapper">

              <h2 className="auth-title">
                Forgot Password
              </h2>

              <p className="auth-subtitle">
                Enter your email address
                to receive a verification
                code.
              </p>

              <div className="input-box">

                <FiMail className="input-icon" />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
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

          {/* =========================
              VERIFY STEP
          ========================= */}
          {step === "verify" && (

            <div className="form-wrapper">

              <h2 className="auth-title">
                Verify Code
              </h2>

              <p className="auth-subtitle">
                Enter the verification
                code sent to:
              </p>

              <div
                style={{
                  marginBottom: "20px",
                  fontWeight: "600",
                  color: "#6366f1",
                  textAlign: "center",
                  wordBreak: "break-word"
                }}
              >
                {email}
              </div>

              <div className="input-box">

                <FiShield className="input-icon" />

                <input
                  type="text"
                  placeholder="6-digit code"
                  value={form.code}
                  maxLength={6}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      code:
                        e.target.value
                    })
                  }
                />

              </div>

              <button
                className="submit-btn"
                onClick={
                  handleVerifyCode
                }
                disabled={loading}
              >
                {
                  loading
                    ? "Verifying..."
                    : "Verify Code"
                }
              </button>

              <button
                className="switch-btn"
                onClick={() =>
                  setStep("email")
                }
              >
                Change Email
              </button>

            </div>

          )}

          {/* =========================
              PASSWORD STEP
          ========================= */}
          {step === "password" && (

            <div className="form-wrapper">

              <h2 className="auth-title">
                Create New Password
              </h2>

              <p className="auth-subtitle">
                Your verification was
                successful. Create a new
                secure password.
              </p>

              <div className="input-box">

                <FiLock className="input-icon" />

                <input
                  type="password"
                  placeholder="New Password"
                  value={
                    form.newPassword
                  }
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
                  handleUpdatePassword
                }
                disabled={loading}
              >
                {
                  loading
                    ? "Updating..."
                    : "Update Password"
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
            🔒 Secure Recovery System
          </div>

          <h1>
            Recover your account
            securely.
          </h1>

          <p>
            We use secure email
            verification to protect your
            account and help you reset
            your password safely.
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

        
          <div className="logo-box">

            <div className="logo-circle">
              B
            </div>

            <h2>Bio Link</h2>

          </div>

         
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
*/
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