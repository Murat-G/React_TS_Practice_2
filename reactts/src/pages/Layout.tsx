import { Outlet, Link } from "react-router-dom";


export interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/typingprops">Typing Props</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;