const ActionButton = ({ children, onClick }) => (
  <button
    style={{
      margin: "1rem",
      borderRadius: "0.5rem",
      border: "none",
      background: "#CADCFC",
      gap: "1rem",
    }}
    onClick={onClick}
  >
    {children}
  </button>
);

export default ActionButton;
