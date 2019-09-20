import styled from 'styled-components';

export const NavList = styled.ul`
    margin: 10px 0;
`;
NavList.displayName = 'NavList';

export const NavListItem = styled.li`
    display:flex;
    justify-content: space-between;
    align-items: center;
    background: #eee;
    margin: 0 0 2px;
    padding: 10px;
`;
NavListItem.displayName = 'NavListItem';