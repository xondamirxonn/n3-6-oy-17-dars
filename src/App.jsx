import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Phones } from "./pages/Phones";
import { MainLayout } from "./layout/MainLayout";
import { Notebook } from "./pages/Notebook";
import { Auto } from "./pages/Auto";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/notebook" element={<Notebook />} />
        <Route path="/auto" element={<Auto />} />
      </Route>
    </Routes>
  );
}

export default App;
