"use client";

export default function CalendarView() {
  // Simulate 75 days with different progress levels (shades of green)
  const days = Array.from({ length: 75 }, (_, i) => ({
    day: i + 1,
    progress: Math.floor(Math.random() * 5), // Random progress levels (0 to 4)
  }));

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      padding: "20px",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "20px",
      textAlign: "center",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)", // 7 columns for a weekly layout
      gap: "10px",
      justifyContent: "center",
    },
    dayCell: {
      width: "30px",
      paddingTop: "100%", // Ensures a square aspect ratio
      position: "relative",
      textAlign: "center",
      fontWeight: "bold",
      cursor: "pointer",
    },
    dayNumber: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "1rem",
      color: "#fff",
    },
  };

  // Function to determine the background color based on progress level
  const getBackgroundColor = (progress) => {
    const shadesOfGreen = [
      "#f4f4f4", // Default (no progress)
      "#a4d3a2", // Light green
      "#76c88a", // Medium green
      "#43b07a", // Darker green
      "#1f945f", // Dark green
    ];
    return shadesOfGreen[progress];
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}> </h1>
      <div style={styles.grid}>
        {days.map(({ day, progress }) => (
          <div
            key={day}
            style={{
              ...styles.dayCell,
              backgroundColor: getBackgroundColor(progress),
            }}
          >
            <div style={styles.dayNumber}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
