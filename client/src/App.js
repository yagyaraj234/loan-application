import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import {
  ActiveLoans,
  Home,
  LoanRequest,
  Signup,
  Login,
  Error,
  LoanPage,
} from "./pages/index";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useUserId } from "./components/TokenContext";
import Protected from "./components/Protected";
function App() {
  const { userId } = useUserId();

  return (
    <div className="overflow-hidden">
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route element={<Protected token={userId} />}>
            <Route path="/loans" element={<ActiveLoans />} />
            <Route path="/loans/:id" element={<LoanPage />} />
            <Route path="/request-loans" element={<LoanRequest />} />
          </Route>
          <Route element={<ProtectedRoutes token={userId} />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
