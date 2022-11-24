import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import TypingProps from "./pages/TypingProps";
import "./App.css";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/typingprops" element={<TypingProps />} />
        </Route>
      </Routes>
    </BrowserRouter>
    );
};

export default App;
