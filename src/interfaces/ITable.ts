export interface ITable {
  id: number;
  number: string;
  seats: number;
  position: { x: number; y: number };
  shape: 'circle' | 'square'| 'rectangle';
  status: 'свободен' | 'забронирован' | 'занят';
}