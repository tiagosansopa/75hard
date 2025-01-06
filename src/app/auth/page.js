"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === "register") {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Registering user:", formData);
      // Perform registration API call here
    } else {
      console.log("Logging in user:", {
        username: formData.username,
        password: formData.password,
      });
      // Perform login API call here
    }

    router.push("/home");
  };

  return (
    <div style={styles.container}>
      <div style={styles.tabs}>
        <button
          style={activeTab === "login" ? styles.activeTab : styles.inactiveTab}
          onClick={() => setActiveTab("login")}
        >
          Log In
        </button>
        <button
          style={
            activeTab === "register" ? styles.activeTab : styles.inactiveTab
          }
          onClick={() => setActiveTab("register")}
        >
          Register
        </button>
      </div>
      <form style={styles.form} onSubmit={handleSubmit}>
        {activeTab === "register" && (
          <>
            <input
              style={styles.input}
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              style={styles.input}
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <input
              style={styles.input}
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <input
              style={styles.input}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </>
        )}
        {activeTab === "login" && (
          <>
            <input
              style={styles.input}
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <input
              style={styles.input}
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </>
        )}
        <button style={styles.submitButton} type="submit">
          {activeTab === "login" ? "Log In" : "Register"}
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    padding: "20px",
  },
  tabs: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  activeTab: {
    padding: "10px 20px",
    fontSize: "1rem",
    fontWeight: "bold",
    borderBottom: "2px solid #0070f3",
    cursor: "pointer",
    background: "none",
    border: "none",
    outline: "none",
  },
  inactiveTab: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#888",
    cursor: "pointer",
    background: "none",
    border: "none",
    outline: "none",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "400px",
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  submitButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#0070f3",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
