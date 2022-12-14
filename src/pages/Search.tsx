import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";

const Search = () => {
  const [text, setText] = useState<string>("");
  const [all, setAll] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setText(newValue);
  };

  const handleSubmit = () => {
    setAll([...all, text]);
    setText("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input value={text} handleChange={handleInputChange} />
        <Button
          handleClick={handleSubmit}
          styles={{
            color: "white",
            backgroundColor: "black",
            borderRadius: "1rem",
            padding: "0.5rem",
          }}
        />
      </div>
      <div>
        {all.map((el, i) => {
          return <p key={i}>{el}</p>;
        })}
      </div>
    </div>
  );
};

export default Search;
