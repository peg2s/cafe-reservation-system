import React, {createContext, FC, ReactNode, useContext, useEffect, useState} from 'react';
import {ITable} from "../interfaces/ITable";
import {IReservation} from "../interfaces/IReservation";
import {apiService} from "../service/apiService";


interface DataContextType {
    tables: ITable[];
    reservations: IReservation[];
    loading: boolean;
    error: string | null;
    refreshData: () => Promise<void>;
    updateTable: (table: ITable) => Promise<void>;
}

const DataContext = createContext<DataContextType>({} as DataContextType);

export const DataProvider: FC<{children: ReactNode}> = ({ children }) => {
    const [tables, setTables] = useState<ITable[]>([]);
    const [reservations, setReservations] = useState<IReservation[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const loadData = async () => {
        try {
            setLoading(true);
            const [tablesData, reservationsData] = await Promise.all([
                apiService.getTables(),
                apiService.getReservations()
            ]);
            setTables(tablesData);
            setReservations(reservationsData);
        } catch (err) {
            setError('Ошибка загрузки данных');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateTable = async (table: ITable) => {
        try {
            await apiService.updateTable(table);
            await loadData();
        } catch (err) {
            setError('Ошибка обновления стола');
            console.error(err);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <DataContext.Provider value={{
            tables,
            reservations,
            loading,
            error,
            refreshData: loadData,
            updateTable: handleUpdateTable
        }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);