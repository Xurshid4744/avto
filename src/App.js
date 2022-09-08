import AdminRouter from "./components/Router/Admin/AdminRouter";
import UserRouter from "./components/Router/User/UserRouter";
function App() {
  const token = localStorage.getItem("token");
  return <>{token === null ? <UserRouter /> : <AdminRouter />}</>;
}

export default App;
