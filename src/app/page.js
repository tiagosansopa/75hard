"use client";

import { useState } from "react";

export default function Home() {
  const handleLoginOrRegister = () => {
    // Navigate to the login or registration page
    window.location.href = "/auth"; // Adjust the path as needed
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>75 Hard</h1>
      <button style={styles.button} onClick={handleLoginOrRegister}>
        Log In or Register
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4", // Light background color
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "30px",
  },
  button: {
    padding: "15px 30px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#0070f3",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  permissionButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#28a745",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
