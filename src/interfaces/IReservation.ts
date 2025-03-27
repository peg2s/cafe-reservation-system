export interface IReservation {
  id: number;
  tableId: number;
  customerName: string;
  startTime: string;
  endTime: string;
  status: 'confirmed' | 'completed' | 'cancelled';
}