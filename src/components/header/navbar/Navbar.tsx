import {Topnav, TopnavLink} from "./Navbar.styles";

export const Navbar = () => {
    return (
        <Topnav>
            <TopnavLink to="/">Главная</TopnavLink>
            <TopnavLink to="/bookings">Бронирования</TopnavLink>
            <TopnavLink to="/guests">Гости</TopnavLink>
        </Topnav>
    );
};