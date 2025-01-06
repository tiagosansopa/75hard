"use client";

import { useState } from "react";

export default function ActionButton({ icon, text }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const styles = {
    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      width: "100px",
      height: "100px",
      margin: "10px",
      fontSize: "1rem",
      fontWeight: "bold",
      color: isActive ? "#fff" : "#555",
      backgroundColor: isActive ? "#28a745" : "transparent",
      border: `2px solid ${isActive ? "#28a745" : "#ccc"}`,
      borderRadius: "10px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    icon: {
      fontSize: "2rem",
      marginBottom: "5px",
    },
  };

  return (
    <button style={styles.button} onClick={handleClick}>
      <span style={styles.icon}>{icon}</span>
      {text}
    </button>
  );
}
