interface Props {
  children: string;
  onClicked: () => void;
}
const Button = ({ children, onClicked }: Props) => {
  return (
    <>
      <button type="button" className="btn btn-primary" onClick={onClicked}>
        {children}
      </button>
    </>
  );
};

export default Button;
