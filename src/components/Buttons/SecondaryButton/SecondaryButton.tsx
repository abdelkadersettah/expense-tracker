import "./secondaryButton.scss";

interface SecondaryButtonProps {
  handleClicked?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

const SecondaryButton: React.FunctionComponent<SecondaryButtonProps> = ({
  handleClicked,
  className,
  children,
  type = "button",
}) => {
  return (
    <button
      onClick={handleClicked}
      className={["secondary", className].join(" ")}
      type={type}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
