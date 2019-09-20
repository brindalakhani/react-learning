import React from 'react';


export class Popular extends React.PureComponent {
    render(){
        const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        return(
            <ul>
                {languages.map((language) => (
                    <li key={language}>
                        <button type="button" className="btn btn-primary">{language}</button>
                    </li>
                ))}
            </ul>
        );
    }
}
export default Popular;