type PersonsListProps = {
  names: { first: string; last: string }[];
};

const PersonList = (props: PersonsListProps) => {
  return (
    <div>
      <h5>
        {props.names.map((name, i) => {
          return (
            <p key={i}>
              {" "}
              {name.first} {name.last}{" "}
            </p>
          );
        })}
      </h5>
    </div>
  );
};

export default PersonList;
