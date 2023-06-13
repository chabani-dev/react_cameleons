import MenuItem from "./MenuItem";
import Clock from "./Clock";

function Header() {
    console.log(array2);
    return(
        <header>
            <h1>i love cameleons</h1>
            <ul>
                {array2}
                <Clock />
            </ul>
        </header>
    );
}

export default Header;

const array = [
    {
        'lien':'https://ilovecameleon.com',
        'nom':'accueil',
    },
    {
        'lien':'https://ilovecameleon/login',
        'nom':'connexion',
    },
    {
        'lien':'https://ilovecameleon/register',
        'nom':'inscription'
    },
];

const array2 = array.map(
    (item, index) => {
        return(<MenuItem key={'index_'+index} link={item.lien} text={item.nom} />);
    }
);