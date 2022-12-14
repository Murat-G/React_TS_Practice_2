type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  styles: React.CSSProperties;
};

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handleClick(event)} style={props.styles}>Add New Issue</button>
  );
};
