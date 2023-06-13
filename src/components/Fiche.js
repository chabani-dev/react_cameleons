function Fiche(props) {
    return(
        <article>
            <h3>{props.titre}</h3>
            <img src={props.srcAttribute} alt={props.altAttribute} />
            <ul>
                <li>Taille : {props.taille}</li>
                <li>Habitat : {props.habitat}</li>
            </ul>
            <a href={'https://ilovecameleon/fiche/'+props.id}>Voir les détails</a>
        </article>
    );
}

export default Fiche;