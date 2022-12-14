import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import TypingProps from "./pages/TypingProps";
import Person from "./pages/Person";
import Search from "./pages/Search";
import UserProvider from "./components/UserProvider";

import "./App.css";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/typingprops" element={<TypingProps />} />
          <Route path="/people" element={<Person />} />
          <Route path="/search" element={<Search />} />
          <Route path="/context" element={<UserProvider />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
