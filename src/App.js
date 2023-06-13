import Footer from './components/Footer';
import Header from './components/Header';
import Fiche from './components/Fiche';
import './style.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        {array2}
      </main>
      <Footer />
    </div>
  );
}

export default App;

const array = [
  {
    "id":1,
    "titre":'caméléon de Madagascar',
    "taille":'50cm',
    "habitat":'Madagascar',
    "image":require('./images/cameleon04.jpg')
  },
  {
    "id":2,
    "titre":'caméléon Imposteur',
    "taille":'75cm',
    "habitat":'Brésil',
    "image":require('./images/cameleon15.jpg')
  },
  {
    "id":3,
    "titre":'caméléon nain du Mexique',
    "taille":'5cm',
    "habitat":'Mexique',
    "image":require('./images/cameleon02.jpg')
  },
  {
    "id":4,
    "titre":'caméléon Maximus Vulgaris',
    "taille":'15cm',
    "habitat":'Afrique orientale',
    "image":require('./images/cameleon03.jpg')
  },
  {
    "id":5,
    "titre":'caméléon Vert',
    "taille":'45cm',
    "habitat":'Inde',
    "image":require('./images/cameleon05.jpg')
  },
  {
    "id":6,
    "titre":'caméléon Bleu d\'Argentine',
    "taille":'40cm',
    "habitat":'Argentine',
    "image":require('./images/cameleon06.jpg')
  },
  {
    "id":7,
    "titre":'caméléon du Pacifique',
    "taille":'25cm',
    "habitat":'La réunion, île Maurice',
    "image":require('./images/cameleon07.jpg')
  },
  {
    "id":8,
    "titre":'caméléon Emeraude',
    "taille":'35cm',
    "habitat":'Australie occidentale',
    "image":require('./images/cameleon08.jpg')
  },
  {
    "id":9,
    "titre":'caméléon nain d\'Asie',
    "taille":'15cm',
    "habitat":'Asie du Sud-Est',
    "image":require('./images/cameleon09.jpg')
  },
  {
    "id":10,
    "titre":'caméléon acrobate',
    "taille":'40cm',
    "habitat":'Amazonie',
    "image":require('./images/cameleon10.jpg')
  },
  {
    "id":11,
    "titre":'caméléon de Madagascar',
    "taille":'50cm',
    "habitat":'Madagascar',
    "image":require('./images/cameleon04.jpg')
  },
  {
    "id":12,
    "titre":'caméléon Imposteur',
    "taille":'75cm',
    "habitat":'Brésil',
    "image":require('./images/cameleon15.jpg')
  },
  {
    "id":13,
    "titre":'caméléon nain du Mexique',
    "taille":'5cm',
    "habitat":'Mexique',
    "image":require('./images/cameleon02.jpg')
  },
  {
    "id":14,
    "titre":'caméléon Maximus Vulgaris',
    "taille":'15cm',
    "habitat":'Afrique orientale',
    "image":require('./images/cameleon03.jpg')
  },
  {
    "id":15,
    "titre":'caméléon Vert',
    "taille":'45cm',
    "habitat":'Inde',
    "image":require('./images/cameleon05.jpg')
  },
  {
    "id":16,
    "titre":'caméléon Bleu d\'Argentine',
    "taille":'40cm',
    "habitat":'Argentine',
    "image":require('./images/cameleon06.jpg')
  },
];

const array2 = array.map(
  (item, index) => {
    return(
      <Fiche titre={item.titre} srcAttribute={item.image} altAttribute={item.titre} taille={item.taille} habitat={item.habitat} id={item.id} key={'index_'+index} />
    )
  }
)