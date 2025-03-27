import {IReservation} from "../../interfaces/IReservation";
import {
    reservationItemStyles as ReservationItem,
    reservationTimeStyles as ReservationTime,
    reservationGuestStyles as Guest
} from "../../components/tablegrid/TableGrid.styles";
import React from "react";
import {useData} from "../../context/DataContext";
import {ReservationList} from "../../components/reservation/ReservationList";

export const Bookings = () => {
    const {reservations} = useData()
    return (
       <ReservationList reservations={reservations}/>
    )
}