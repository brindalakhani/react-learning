import styled from 'styled-components';

export const NavList = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: center;
`;
NavList.displayName = 'NavList';

export const NavListItem = styled.li`
  margin: 0 10px;
`;
NavListItem.displayName = 'NavListItem';