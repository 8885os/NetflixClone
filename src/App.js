import { Routes, Route } from "react-router-dom";
import Logged from './components/Loggedin/Logged'
import Notlogged from "./components/NotLoggedIn/Notlogged";
import Signupform from "./components/Signupform";
import Signin from "./components/Signin";
import PrivateRoute from "./components/PrivateRoute";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Notlogged />} />
                <Route path='/home/*'
                    element={
                        <PrivateRoute>
                            <Logged />
                        </PrivateRoute>
                    }
                />
                <Route path="/signup" element={<Signupform />} />
                <Route path="/signin" element={<Signin />} />
            </Routes>

        </div>
    );
}

export default App;
