import s from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><a href="src/Components/Navigation/Navigation#">Profile</a></li>
                <li><a href="src/Components/Navigation/Navigation#">Messages</a></li>
                <li><a href="src/Components/Navigation/Navigation#">News</a></li>
                <li><a href="src/Components/Navigation/Navigation#">Music</a></li>
                <li><a href="src/Components/Navigation/Navigation#">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;