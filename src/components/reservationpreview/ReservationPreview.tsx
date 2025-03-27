import {ReservationList} from "../reservation/ReservationList";
import {IReservation} from "../../interfaces/IReservation";

type ReservationsPreviewProps = {
    reservations: IReservation[];
};

export const ReservationsPreview = ({ reservations }: ReservationsPreviewProps) => (
    <div>
        <h3>Ближайшие бронирования:</h3>
        {reservations.length > 0 ? (
            <ReservationList reservations={reservations} />
        ) : (
            <p>Нет бронирований</p>
        )}
    </div>
);