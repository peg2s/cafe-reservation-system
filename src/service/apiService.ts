import {IReservation} from "../interfaces/IReservation";
import {ITable} from "../interfaces/ITable";

const mockReservations: IReservation[] = [
    {
        id: 1,
        tableId: 2,
        customerName: 'Иван Иванов',
        startTime: '2023-05-20T14:00:00',
        endTime: '2023-05-20T16:00:00',
        status: 'confirmed'
    },
    {
        id: 2,
        tableId: 2,
        customerName: 'Петр Петров',
        startTime: '2023-05-21T11:00:00',
        endTime: '2023-05-21T15:30:00',
        status: 'confirmed'
    },
    {
        id: 3,
        tableId: 5,
        customerName: 'Лев Сидоров',
        startTime: '2023-06-21T15:20:00',
        endTime: '2023-06-21T18:20:00',
        status: 'confirmed'
    },
];

const mockTables: ITable[] =  [
    { id: 1, number: '1', seats: 4, position: { x: 0, y: 0 }, shape: 'circle', status: 'свободен' },
    { id: 2, number: '2', seats: 6, position: { x: 100, y: 0 }, shape: 'square', status: 'забронирован' },
    { id: 3, number: '3', seats: 6, position: { x: 200, y: 0 }, shape: 'square', status: 'свободен' },
    { id: 4, number: '4', seats: 6, position: { x: 300, y: 0 }, shape: 'rectangle', status: 'свободен' },
    { id: 5, number: '5', seats: 6, position: { x: 400, y: 0 }, shape: 'square', status: 'занят' },
];

export interface IApiService {
    getTables: () => Promise<ITable[]>;
    getReservations: () => Promise<IReservation[]>;
    updateTable: (table: ITable) => Promise<void>;
    addReservation: (reservation: IReservation) => Promise<void>;
}

export const mockApiService: IApiService = {
    getTables: async () => mockTables,
    getReservations: async () => mockReservations,
    addReservation: async (reservation) => {
        console.log('Reservation added', reservation);
    },
    updateTable: async (table) => {
        console.log('Table updated', table);
    }
};

export const realApiService: IApiService = {
    getTables: async () => {
        const response = await fetch('/api/tables');
        return response.json();
    },
    getReservations: async () => {
        const response = await fetch('/api/reservations');
        return response.json();
    },
    updateTable: async (table) => {
        await fetch('/api/tables', {
            method: 'PUT',
            body: JSON.stringify(table)
        });
    },
    addReservation: async (reservation) => {
        await fetch('/api/reservations', {
            method: 'PUT',
            body: JSON.stringify(reservation)
        });    },
};

export const apiService: IApiService = mockApiService;
