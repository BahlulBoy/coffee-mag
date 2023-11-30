import { Routes, Route } from "react-router-dom";
import App from "../App";

const RouterIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  )
};

export default RouterIndex