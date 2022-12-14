type IWelcomeProps = {
  children: string;
};

const Welcome = (props: IWelcomeProps) => {
  return <div>{props.children}</div>;
};

export default Welcome;
