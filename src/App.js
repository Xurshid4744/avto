import AdminRouter from "./components/Router/Admin/AdminRouter";
import UserRouter from "./components/Router/User/UserRouter";
import { useSelector } from "react-redux";
function App() {
  const { change } = useSelector((state) => state.change);
  return (
    <>
      {change === "user" ? (
        <UserRouter />
      ) : change === "admin" ? (
        <AdminRouter />
      ) : null}
    </>
  );
}

export default App;
