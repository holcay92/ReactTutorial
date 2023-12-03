interface ButtonProps {
  text: string;
  color?: string;
  onClick: () => void;
}

const Button = ({ text, onClick, color = "primary" }: ButtonProps) => {
  //handle onClick event

  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {" "}
      {text}
    </button>
  );
};

export default Button;