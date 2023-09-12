import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeColor from "./components/ChangeColor";
import { useSelector } from "react-redux";
import ChangeBgColor from "./components/ChangeBgColor";

function App() {
    const themeColor = useSelector((state) => state.bgTheme.value);

    return (
        <div className="App" style={{ background: themeColor }}>
            <Profile />
            <Login />
            <ChangeColor />
            <ChangeBgColor />
        </div>
    );
}

export default App;
