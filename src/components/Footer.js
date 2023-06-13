import React from "react";
import MenuItem from "./MenuItem";
import Clock from "./Clock";

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <ul>
                    {array2}
                    <Clock />
                </ul>
            </footer>
        );
    }
}

export default Footer;

const array = [
    {
        'lien':'https://ilovecameleon/contact',
        'nom':'contact',
    },
    {
        'lien':'',
        'nom':'copyright - ilovecameleon.com',
    },
];

const array2 = array.map(
    (item, index) => {
        return(<MenuItem key={'index_'+index} link={item.lien} text={item.nom} />);
    }
);