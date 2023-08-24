import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Comp1 from "./component.tsx";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/new" element={<Comp1 />} />
      <Route path="/" element={<App />} />
    </Routes>
    
  </BrowserRouter>
);
