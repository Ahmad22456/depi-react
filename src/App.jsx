import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/:id" element={<PostPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/:id/update" element={<EditPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
