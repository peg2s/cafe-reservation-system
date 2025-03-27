import {HeaderContainer} from "./Header.styles";
import {Logo} from "./logo/Logo";
import {Navbar} from "./navbar/Navbar";

export const Header = () => {
    return (
        <HeaderContainer>
            <Logo src="/logo.webp" alt="Наш логотип"/>
            <Navbar/>

        </HeaderContainer>
    );
}