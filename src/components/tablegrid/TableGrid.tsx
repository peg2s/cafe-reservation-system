import React, {FC, useState} from 'react';
import {ITable} from "../../interfaces/ITable";
import {
    gridContainerStyles as GridContainer,
} from './TableGrid.styles';
import {TablesList} from "../tablelist/TablesList";
import {TableModal} from "../modal/TableModal";
import {useData} from "../../context/DataContext";

export const TableGrid: FC = () => {
    const { tables, reservations, loading, error } = useData();
    const [selectedTable, setSelectedTable] = useState<ITable | null>(null);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;

    return (
        <GridContainer>
            <TablesList
                tables={tables}
                onTableClick={setSelectedTable}
            />

            {selectedTable && (
                <TableModal
                    table={selectedTable}
                    reservations={reservations}
                    onClose={() => setSelectedTable(null)}
                />
            )}
        </GridContainer>
    );
};