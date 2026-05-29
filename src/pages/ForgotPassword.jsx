import { useState } from "react";
import axios from "axios";
import API_BASE from "../config/api";

import {
  FiMail,
  FiLock,
  FiShield,
  FiArrowRight
} from "react-icons/fi";

export default function ForgotPassword() {

  // email -> verify -> password
  const [step, setStep] =
    useState("email");

  const [loading, setLoading] =
    useState(false);

  const [email, setEmail] =
    useState("");

  const [form, setForm] = useState({

    code: "",

    newPassword: ""

  });

  // SEND CODE
  const handleSendCode =
    async () => {

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

  // VERIFY CODE
  const handleVerifyCode =
    async () => {

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

  // UPDATE PASSWORD
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

        window.location.href =
          "/auth";

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

          {/* STEP 1 */}
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

                <FiMail
                  className="input-icon"
                />

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
                onClick={
                  handleSendCode
                }
                disabled={loading}
              >

                {
                  loading
                    ? "Sending..."
                    : "Send Code"
                }

                <FiArrowRight />

              </button>

            </div>

          )}

          {/* STEP 2 */}
          {step === "verify" && (

            <div className="form-wrapper">

              <h2 className="auth-title">
                Verify Code
              </h2>

              <p className="auth-subtitle">

                Enter the 6-digit code
                sent to your email.

              </p>

              <div className="input-box">

                <FiShield
                  className="input-icon"
                />

                <input
                  placeholder="Verification Code"
                  value={form.code}
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

                <FiArrowRight />

              </button>

            </div>

          )}

          {/* STEP 3 */}
          {step === "password" && (

            <div className="form-wrapper">

              <h2 className="auth-title">
                Create New Password
              </h2>

              <p className="auth-subtitle">

                Your identity has been
                verified successfully.

              </p>

              <div className="input-box">

                <FiLock
                  className="input-icon"
                />

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

                <FiArrowRight />

              </button>

            </div>

          )}

        </div>

      </div>

     

    </div>

  );

}
