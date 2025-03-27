import {FC} from 'react';
import {ITable} from "../../interfaces/ITable";
import {IReservation} from "../../interfaces/IReservation";
import Table from "../table/Table";

interface TablesListProps {
    tables: ITable[];
    onTableClick: (table: ITable) => void;
}

export const TablesList: FC<TablesListProps> = ({tables, onTableClick}) => {
    return (
        <>
            {tables.map(table => (
                <Table
                    key={table.id}
                    table={table}
                    onClick={onTableClick}
                />
            ))}
        </>
    );
};