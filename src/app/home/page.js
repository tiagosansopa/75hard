"use client";

import { useState } from "react";
import ActionButton from "../components/ActionButton";
import ProfileView from "../components/ProfileView";
import CalendarView from "../components/CalendarView";

export default function Home() {
  const [activeView, setActiveView] = useState("calendar");
  const [dayNumber, setDayNumber] = useState(1); // Variable state for the day number

  const renderContent = () => {
    switch (activeView) {
      case "calendar":
        return <CalendarView />;
      case "day":
        return (
          <div>
            <div style={styles.dayHeader}>
              <h1>DAY {dayNumber}</h1>
            </div>
            <div style={styles.grid}>
              <ActionButton icon="💧" text="Water Gallon" />
              <ActionButton icon="📖" text="10 Pages Inside" />
              <ActionButton icon="🏋️‍♂️" text="Workout Outside" />
              <ActionButton icon="🏋️‍♀️" text="Workout Inside" />
              <ActionButton icon="🍎" text="Diet + No Alcohol + No Cheat" />
              <ActionButton icon="📸" text="Progress Pic" />
            </div>
          </div>
        );
      case "profile":
        return <ProfileView />;
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>{renderContent()}</div>
      <nav style={styles.nav}>
        <button
          style={
            activeView === "calendar" ? styles.activeButton : styles.navButton
          }
          onClick={() => setActiveView("calendar")}
        >
          📅
        </button>
        <button
          style={activeView === "day" ? styles.activeButton : styles.navButton}
          onClick={() => setActiveView("day")}
        >
          🔥
        </button>
        <button
          style={
            activeView === "profile" ? styles.activeButton : styles.navButton
          }
          onClick={() => setActiveView("profile")}
        >
          👤
        </button>
      </nav>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  content: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "2rem",
    color: "#333",
  },
  nav: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px 0",
    backgroundColor: "#fff",
    borderTop: "1px solid #ddd",
  },
  navButton: {
    fontSize: "1.5rem",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  activeButton: {
    fontSize: "1.5rem",
    background: "none",
    border: "none",
    color: "#0070f3",
    cursor: "pointer",
  },
  dayHeader: {
    marginBottom: "20px",
    textAlign: "center",
    color: "black",
  },
};
