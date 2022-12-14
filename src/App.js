import './App.css';
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Dialogs from './Components/Dialogs/Dialogs';
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UsersContainer} from "./Components/Users/UsersContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navigation/>
                <div className="app-wrapper__content">
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/dialogs/*" element={<Dialogs/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
