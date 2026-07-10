import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/home/Home";
import { Layout } from "./pages/Layout/Layout";
import { NotFound } from "./pages/notFound/NotFound";
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
