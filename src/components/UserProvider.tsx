import { UserContextProvider } from "../store/UserContext";
import Context from "../pages/Context";

const UserProvider = () => {
  return (
    <UserContextProvider>
      <Context />
    </UserContextProvider>
  );
};

export default UserProvider;
