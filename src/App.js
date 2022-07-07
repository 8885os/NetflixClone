import Logged from "./components/Logged";
import { Routes, Route } from "react-router-dom";
import Notlogged from "./components/Notlogged";
import Signupform from "./components/Signupform";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Notlogged />} />
                <Route path="/home" element={<Logged />} />
                <Route path="/signup" element={<Signupform />} />
            </Routes>
        </div>
    );
}

export default App;
