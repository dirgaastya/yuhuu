import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/menu" element={<Menu />} />
        </Routes>
    );
}

export default App;
