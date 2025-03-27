import styled from "@emotion/styled";

export const modalOverlayStyles = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

export const modalContentStyles = styled.div`
  background-color: white;
  padding: 2.5rem;
  border-radius: 0.5rem;
  width: 40rem;
`;

export const modalHeaderStyles = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const modalButtonStyles = styled.div`
  background-color: #3b82f6;
  color: white;
  padding: 1rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  margin: 2rem 2rem;
  text-align: center;
  &:hover {
    background-color: #2563eb;
  }
`;
export const modalButtonInlineGroup = styled.div`
  text-align: center;
`;