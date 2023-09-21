import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Country from "./Country";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/" exact />
        <Route element={<Country/>} path="/:i" exact />
        <Route element={<NotFound/>} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
