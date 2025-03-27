import styled from "@emotion/styled";
import {ITable} from "../../interfaces/ITable";

export const StyledTable = styled.div<{ table: ITable }>`
  position: relative;
  left: ${({table}) => table.position.x}px;
  top: ${({table}) => table.position.y}px;
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.25s ease;
  margin: 5px;
  background-color: #5bec3c;

  &:hover {
    box-shadow: 10px 10px 10px 5px rgba(107, 107, 107, 0.5);
  }

  ${({table}) => table.shape === 'circle' && 'border-radius: 50%;'}
  ${({table}) => table.shape === 'rectangle' && 'width:300px;'}
  ${({table}) => getStatusBackground(table.status)}
`;


export const TableNumber = styled.span`
  font-weight: bold;
`;

const getStatusBackground = (status: ITable['status']) => {
    switch(status) {
        case 'свободен': return 'background-color: #5BEC3CFF;';
        case 'забронирован': return 'background-color: #FFD080FF;';
        case 'занят': return 'background-color: #ea3e3e;';
        default: return '';
    }
};