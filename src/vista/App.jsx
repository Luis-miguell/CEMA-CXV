import FormLogin from "./components/Login/Login.jsx";
import Landing from "./components/landing_page/landing.jsx";
import Register from "./components/register/register.jsx";
import PasswordRecovery from "./components/passwordRecovery/passwordRecovery.jsx";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { UserProvider } from "../UserProvider.jsx";


function App() {

    return (
        <UserProvider>
            <BrowserRouter basename="/CEMA-CXV">
                <Routes>
                    <Route path="/" element={<Landing/>}/>
                    <Route path="/login" element={<FormLogin/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/password-recovery" element={<PasswordRecovery/>}/>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;            