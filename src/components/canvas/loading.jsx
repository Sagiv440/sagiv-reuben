export default function Loading({hide_text = false}) {
  return (

    <div style={styles.wrapper}>
      <div style={styles.spinner}></div>
      {!hide_text && <p style={styles.text}>Loading...</p>}
    </div>
  );
}

const styles = {
  wrapper: {
    width: "100%",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "6px solid #ddd",
    borderTopColor: "#000",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  text: {
    animation: "pulse 1.5s infinite",
    fontSize: "20px",
    fontWeight: "bold"
  }
};
