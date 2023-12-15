import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AddEmployee } from "./AddEmployee";
import { EditEmployee } from "./EditEmployee";
import { GlobalState } from "./GlobalState";
import { Home } from "./Home";

export default function App() {
  return (
<Router>
  <GlobalState>
    <Routes>
      <Route path="/add" element={<AddEmployee />} />
      <Route path="/edit/:id" element={<EditEmployee />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </GlobalState>
</Router>
  )

}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
