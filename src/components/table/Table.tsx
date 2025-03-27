import React from 'react';
import {ITable} from "../../interfaces/ITable";
import {StyledTable, TableNumber} from './Table.styles';

interface TableProps {
    table: ITable;
    onClick: (table: ITable) => void;
}

const Table: React.FC<TableProps> = ({table, onClick}) => {
    return (
        <StyledTable
            table={table}
            onClick={() => onClick(table)}
        >
            <TableNumber>{"Стол №" + table.number}</TableNumber>
        </StyledTable>
    );
};

export default Table;