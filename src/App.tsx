import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductManagement from "./pages/ProductManagement";
import ProductRegister from "./pages/ProductRegister";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/management/:buyerId" element={<ProductManagement />} />
          <Route
            path="/management/:buyerId/regiter"
            element={<ProductRegister />}
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
