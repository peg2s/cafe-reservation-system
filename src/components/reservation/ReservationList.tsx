import { FC } from 'react';
import {
    reservationItemStyles as ReservationItem,
    reservationTimeStyles as ReservationTime,
} from '../tablegrid/TableGrid.styles';
import {IReservation} from "../../interfaces/IReservation";

interface ReservationListProps {
    reservations: IReservation[];
}

export const ReservationList: FC<ReservationListProps> = ({ reservations }) => {
    if (reservations.length === 0) {
        return <ReservationItem as="li">Нет бронирований</ReservationItem>;
    }

    return (
        <>
            {reservations.map(reservation => (
                <ReservationItem key={reservation.id}>
                    <div>{reservation.customerName}</div>
                    <ReservationTime>
                        {new Date(reservation.startTime).toLocaleString()} -{' '}
                        {new Date(reservation.endTime).toLocaleTimeString()}
                    </ReservationTime>
                </ReservationItem>
            ))}
        </>
    );
};