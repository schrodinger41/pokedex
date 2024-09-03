import React, { useState } from "react";
import { auth, googleProvider } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import "./home.css";
import Text from "../../images/pokedextextnobg.png";
import Header from "../../components/header/Header";
import GoogleLogo from "../../images/googlelogo.png";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/invalid-email":
        return "Invalid email address.";
      case "auth/user-disabled":
        return "User account has been disabled.";
      case "auth/user-not-found":
        return "No user found with this email.";
      case "auth/wrong-password":
        return "Incorrect password.";
      case "auth/email-already-in-use":
        return "Email is already in use.";
      case "auth/weak-password":
        return "Password should be at least 6 characters.";
      default:
        return "An unexpected error occurred. Please try again.";
    }
  };//sdgfs

  const handleAuth = async () => {
    if (!email || !password || (isRegistering && !confirmPassword)) {
      setError("Please fill in all fields.");
      return;
    }

    if (isRegistering) {
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        window.location.assign("/pokemon");
      } catch (error) {
        setError(getErrorMessage(error.code));
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.assign("/pokemon");
      } catch (error) {
        setError(getErrorMessage(error.code));
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      window.location.assign("/pokemon");
    } catch (error) {
      setError(getErrorMessage(error.code));
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAuth();
    }
  };

  return (
    <main>
      <Header />
      <div className="login-page">
        <div className="container">
          <img src={Text} alt="Pokedex" className="pokedex-image" />

          {/* Email/Password Auth Form */}
          <div className="login-form-container">
            <h1 className="app-logo">
              {isRegistering ? "Sign Up!" : "Sign In!"}
            </h1>
            {error && <p className="error-message">{error}</p>}
            <form>
              <input
                type="email"
                placeholder="Email"
                className="input"
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <input
                type="password"
                placeholder="Password"
                className="input"
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              {isRegistering && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              )}
            </form>
            <div className="signup-text">
              {isRegistering
                ? "Already have an account?"
                : "Don't have an account?"}{" "}
              <a
                className="link-transfer-mode"
                onClick={() => setIsRegistering(!isRegistering)}
              >
                {isRegistering ? "Sign In" : "Sign Up"}
              </a>
            </div>
          </div>
          <button
            type="button"
            className="google-sign-in-button "
            onClick={signInWithGoogle}
          >
            <img src={GoogleLogo} alt="Google logo" />
            {isRegistering ? "Sign Up" : "Sign In"} with Google
          </button>
          <div className="signInButton" onClick={handleAuth}>
            <div className="button_container">
              <a className="button">
                <div className="button__content">
                  <span className="button__text">
                    {isRegistering ? "Sign Up" : "Sign In"}
                  </span>

                  <div className="button__reflection-1"></div>
                  <div className="button__reflection-2"></div>
                </div>

                <img src="/button/star.png" alt="" className="button__star-1" />
                <img src="/button/star.png" alt="" className="button__star-2" />
                <img
                  src="/button/circle.png"
                  alt=""
                  className="button__circle-1"
                />
                <img
                  src="/button/circle.png"
                  alt=""
                  className="button__circle-2"
                />
                <img
                  src="/button/diamond.png"
                  alt=""
                  className="button__diamond"
                />
                <img
                  src="/button/triangle.png"
                  alt=""
                  className="button__triangle"
                />

                <div className="button__shadow"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
