import "./defaultButton.scss";

interface DefaultButtonProps {
  handleClicked?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

const DefaultButton: React.FunctionComponent<DefaultButtonProps> = ({
  handleClicked,
  className,
  children,
  type = "button",
}) => {
  return (
    <button
      onClick={handleClicked}
      className={["default", className].join(" ")}
      type={type}
    >
      {children}
    </button>
  );
};

export default DefaultButton;
