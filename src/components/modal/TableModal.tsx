import {FC, useMemo} from 'react';
import {
    modalOverlayStyles as ModalOverlay,
    modalContentStyles as ModalContent,
    modalHeaderStyles as ModalHeader,
    modalButtonStyles as Button,
    modalButtonInlineGroup as ButtonGroup
} from '../modal/Modal.styles';
import {IReservation} from "../../interfaces/IReservation";
import {ITable} from "../../interfaces/ITable";
import {ReservationList} from "../reservation/ReservationList";
import {TableInfo} from "../tableinfo/TableInfo";
import {ReservationsPreview} from "../reservationpreview/ReservationPreview";

interface TableModalProps {
    table: ITable;
    reservations: IReservation[];
    onClose: () => void;
}


export const TableModal: FC<TableModalProps> = ({
                                                    table,
                                                    reservations,
                                                    onClose,
                                                }) => {
    const filteredReservations = useMemo(() => (
        reservations
            .filter(r => r.tableId === table.id)
            .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime())
            .slice(0, 3)
    ), [reservations, table.id]);

    return (
        <ModalOverlay>
            <ModalContent>
                <TableInfo table={table}/>
                <ReservationsPreview reservations={filteredReservations}/>
                <ButtonGroup>
                    <Button onClick={onClose}>Закрыть</Button>
                </ButtonGroup>
            </ModalContent>
        </ModalOverlay>
    );
};