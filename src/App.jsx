import { Fragment } from "react";
import { Route, Routes } from "react-router";
import Tabel from "./components/Tabel";
import CompositeItems from "./screens/CompositeItem";
import HomePage from "./screens/HomePage";
import Items from "./screens/Items";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="item" element={<Items />} />
        <Route path="composite-item" element={<CompositeItems />} />
        <Route path="tabel" element={<Tabel />} />
      </Routes>
    </Fragment>
  );
}

export default App;
