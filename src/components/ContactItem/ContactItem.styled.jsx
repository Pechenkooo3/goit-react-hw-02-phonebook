import styled from 'styled-components';

export const ListItem = styled.li`
  font-size: 20px;
  font-weight: 600;
`;

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  box-shadow: 2px 2px 5px #928181;
  padding: 2px 5px 2px 10px;
  border-radius: 5px;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const NumberWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
export const ItemButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
`;
