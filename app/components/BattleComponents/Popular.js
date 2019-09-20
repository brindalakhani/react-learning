import React from 'react';
import { NavList, NavListItem } from './style';

export class Popular extends React.PureComponent {
    render(){
        const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        return(
            <NavList>
                {languages.map((language) => (
                    <NavListItem key={language}>
                        <button type="button" className="btn btn-primary">{language}</button>
                    </NavListItem>
                ))}
            </NavList>
        );
    }
}
export default Popular;