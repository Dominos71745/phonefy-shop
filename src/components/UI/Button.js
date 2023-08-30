const Button = (props) => {
  const buttonStyle = {
    backgroundColor: props.color || "transparent",
  };

  return (
    <button
      className="rounded-3xl p-2 px-5"
      style={buttonStyle}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
