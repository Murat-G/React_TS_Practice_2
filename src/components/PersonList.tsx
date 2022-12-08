type PersonsListProps = {
  names: { first: string; last: string }[];
};

const PersonList = (props: PersonsListProps) => {
  return (
    <div>
      <h5>
        {props.names.map((name, i) => {
          return(
            <h5 key={i}> {name.first} {name.last} </h5>
          )
        })}
      </h5>
    </div>
  );
};

export default PersonList;
