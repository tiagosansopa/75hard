"use client";

export default function ProfileView() {
  const username = "uim"; // Replace with dynamic data if available
  const days = Array.from({ length: 33 }, (_, i) => i + 1); // Simulate 33 days for testing

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      padding: "20px",
    },
    profileHeader: {
      display: "flex",
      alignItems: "center",
      marginBottom: "20px",
    },
    profilePicture: {
      width: "100px",
      height: "100px",
      border: "2px solid #ddd",
      borderRadius: "5px",
      marginRight: "20px",
    },
    username: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)", // Always 5 columns
      gap: "0px", // No margin between squares
    },
    daySquare: {
      width: "100%",
      paddingTop: "100%", // Ensures a square aspect ratio
      backgroundColor: "#f4f4f4",
      backgroundImage: `url('/placeholder.jpg')`, // Corrected syntax for the placeholder image
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    addButton: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: "100%", // Ensures a square aspect ratio
      backgroundColor: "#e0e0e0",
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#0070f3",
      cursor: "pointer",
    },
  };

  const handleAddPicture = () => {
    // Logic to upload a picture
    alert("Upload picture functionality coming soon!");
  };

  return (
    <div style={styles.container}>
      {/* Profile Header */}
      <div style={styles.profileHeader}>
        <div style={styles.profilePicture} />
        <div style={styles.username}>{username}</div>
      </div>

      {/* Grid of Pictures */}
      <div style={styles.grid}>
        {days.map((day) => (
          <div
            key={day}
            style={{
              ...styles.daySquare,
              backgroundImage: `url('/icons/icon-512x512.png')`, // Ensure the image is correctly placed in the public folder
            }}
          />
        ))}
        <div style={styles.addButton} onClick={handleAddPicture}>
          +
        </div>
      </div>
    </div>
  );
}
