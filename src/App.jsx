import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";
import GiftDetail from "./pages/GiftDetail";
import ListGift from "./pages/ListGift";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gift" element={<ListGift />} />
            <Route path="/gift/:id" element={<GiftDetail />} />
        </Routes>
    );
}

export default App;
