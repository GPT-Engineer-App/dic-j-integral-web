import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CalculationProcess from "./pages/CalculationProcess.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/calculation-process" element={<CalculationProcess />} />
      </Routes>
    </Router>
  );
}

export default App;
