import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Header} from "../components/header/Header";
import {MainPage} from "../pages/main/MainPage";
import {MainContainer} from "../layout/MainContainer";
import {globalStyles} from "./App.styles";
import { Global } from '@emotion/react';
import {Bookings} from "../pages/bookings/Bookings";
import {Guests} from "../pages/guests/Guests";
import {DataProvider} from "../context/DataContext";

function App() {
    return (
        <BrowserRouter>
            <DataProvider>
                <Global styles={globalStyles} />
                <div className="App">
                    <Header/>
                    <Routes >
                        <Route element={<MainContainer/>}>
                            <Route path="/" element={<MainPage/>}/>
                            <Route path="/bookings" element={<Bookings/>}/>
                            <Route path="/guests" element={<Guests/>}/>
                        </Route>
                    </Routes>
                </div>
            </DataProvider>
        </BrowserRouter>
    )
}

export default App;
