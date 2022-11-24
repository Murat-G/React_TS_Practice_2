type IGreetProps = {
  name: string;
  lastName: string;
};

const GreetProps = (props: IGreetProps) => {
  return (
    <div>
      <h2>Typing props example</h2>
      {props.name}! .....
      {props.lastName}
    </div>
  );
};

export default GreetProps;
