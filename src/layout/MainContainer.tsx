import {Outlet} from "react-router-dom";
import { Container } from "./MainContainer.styles";

export const MainContainer = () => {
    return (
        <Container>
            <Outlet />
        </Container>
    );
};