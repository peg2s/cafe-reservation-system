import {IReservation} from "../../interfaces/IReservation";
import {
    reservationGuestStyles as Guest
} from "../../components/tablegrid/TableGrid.styles";
import React from "react";
import {useData} from "../../context/DataContext";

export const Guests = () => {
    const { reservations } = useData();

    return (
        <>
            {reservations.map(reservation => (
                <div>
                    <Guest>{reservation.customerName}</Guest>
                    <hr/>
                </div>


            ))}
        </>
    )
}