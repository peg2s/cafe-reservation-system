import {ITable} from "../../interfaces/ITable";


type TableInfoProps = {
    table: ITable;
};

export const TableInfo = ({ table }: TableInfoProps) => (
    <div>
        <h2>Стол {table.number}</h2>
        <p>Мест: {table.seats}</p>
        <p>Статус: {table.status}</p>
    </div>
);