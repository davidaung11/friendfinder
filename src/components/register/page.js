"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);

  return (
    <main className="register-page">
      {/* Background decoration */}
      <div className="register-glow register-glow-left"></div>
      <div className="register-glow register-glow-right"></div>

      {/* Header */}
      <header className="register-header">
        <Link href="/" className="register-logo">
          <div className="logo-icon">♡</div>
          <span>
            Friend<span>Finder</span>
          </span>
        </Link>

        <div className="login-link">
          <span>Already have an account?</span>
          <Link href="/login">Log in</Link>
        </div>
      </header>

      {/* Register Content */}
      <section className="register-content">
        <div className="register-card">

          {/* Small badge */}
          <div className="register-badge">
            <span className="badge-dot"></span>
            Join the community
          </div>

          <h1>
            Create your
            <span> account.</span>
          </h1>

          <p className="register-subtitle">
            Join FriendFinder and discover people who match your vibe.
          </p>

          <form className="register-form">

            {/* Name */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Your first name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Your last name"
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email address</label>

              <div className="input-wrapper">
                <span className="input-icon">✉</span>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>

              <div className="input-wrapper">
                <span className="input-icon">●</span>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                />

                <button
                  type="button"
                  className="password-button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <p className="password-hint">
                Use at least 8 characters.
              </p>
            </div>

            {/* Birthday */}
            <div className="form-group">
              <label htmlFor="birthday">Date of birth</label>

              <input
                id="birthday"
                type="date"
              />

              <p className="password-hint">
                You must be 18 or older to create an account.
              </p>
            </div>

            {/* Terms */}
            <label className="terms">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />

              <span>
                I agree to the{" "}
                <Link href="/terms">Terms of Service</Link>{" "}
                and{" "}
                <Link href="/privacy">Privacy Policy</Link>.
              </span>
            </label>

            {/* Button */}
            <button
              type="submit"
              className="register-button"
              disabled={!agree}
            >
              Create Account
              <span>→</span>
            </button>
          </form>

          {/* Divider */}
          <div className="divider">
            <span>or</span>
          </div>

          {/* Social buttons */}
          <div className="social-buttons">
            <button type="button" className="social-button">
              <strong>G</strong>
              Continue with Google
            </button>

            <button type="button" className="social-button">
              <strong>f</strong>
              Continue with Facebook
            </button>
          </div>

          {/* Bottom login */}
          <p className="bottom-login">
            Already a member?{" "}
            <Link href="/login">Log in</Link>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="register-footer">
        <span>© 2026 FriendFinder</span>

        <div>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/about">About</Link>
        </div>
      </footer>
    </main>
  );
}