type IGreetProps = {
  name: string;
  lastName: string;
  age: number;
  isLoggedIn: boolean;
};

const GreetProps = (props: IGreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <div>
           <h5>Welcome {props.name} {props.lastName}</h5>
        </div>
      ) : (
        <div>
          <p>Please Log in</p>
        </div>
      )}
      <h5>Age: {props.age}</h5>
    </div>
  );
};

export default GreetProps;
