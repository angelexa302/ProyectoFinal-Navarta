const Button = ({ color, border, label, style }) => {
  return (
    <button style={{ backgroundColor: color, border: border, ...style }}>
      <h3>{label}</h3>
    </button>
  );
};
export default Button;
