type IIntroduce = {
  children: React.ReactNode;
};

const Introduce = (props: IIntroduce) => {
  return (
    <div>
      React children test with welcome component
      {props.children}
    </div>
  );
};

export default Introduce;
