# NetflixApp structure generale

### 💡 NetflixApp structure / dépendances


## Comprendre

Lorsque l'on démarre de `create react app` nous avons un page simple avec un
header. La première étapes va être de créer le composant de plus haut niveau de
notre application. Dans notre cas on l'appellera `NetflixApp.` On appellera
`NetflixApp` depuis `App.js.` On pourrait également appeler `NetflixApp` depuis
`index.js`.

```jsx
ReactDOM.render(
  <React.StrictMode>
    <NetflixApp />
  </React.StrictMode>,
  document.getElementById('root'),
)
```

Le but de cette première section va être de définir une structure pour nos
composants et notre application.

## Exercice

Dans cette exercice tu vas devoir nettoyer le fichier `App.js` de base de
`create-react-app` et ensuite créer un composant `NetflixApp` avec une structure
simpliste :

- Un menu de navigation
- un header
- un ligne contenant des images de pochettes vidéos (format large)
- un ligne contenant des images de pochettes vidéos (format poster)
- un footer

> Pour nous aider à faire cette maquette: le logo Netflix, Avatar et 4 pochettes
> de films/series sont déposés dans `public/images/`

**Fichiers :**

- `src/components/NetflixApp.js`
- `src/App.js`

## 🐜 Feedback


## Etape 2


# Style / Material UI

### 💡 Style / Material UI

## 📝 Tes notes

Detaille ce que tu as appris ici
`INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Il est existe de nombreuses librairies / frameworks CSS front pour React. Ils
font gagner en productivité on peut citer

- Material-UI
- Ant desing
- Reach UI
- Blueprint
- React Boostrap
- Onsen UI
- Evergrenn
- Semantic UI React
- Rebass
- et plein d'autres

Pour le clone de Netflix nous utiliserons Materil-Ui. Non pas qu'il est le plus
adapté pour ce projet, mais il est tellement répandu qu'il est intéressant de le
connaitre.

📑 Le lien vers
[Material UI](https://material-ui.com/getting-started/installation/)

Il faut donc installer les dépendances

```bash
npm install @emotion/react --save
npm install @emotion/styled --save
npm install @mui/lab --save
npm install @mui/material --save
npm install @mui/styles --save
```

> Note : Cela est déjà fait dans le projet

On peut ensuite créer un thème générale pour tous les composants `Materials-UI.`
Pour cela on va wrapper notre application avec le `ThemeProvider`

```bash
import { ThemeProvider} from '@mui/styles'
import NetFlixApp from './NetflixApp'

const theme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
}

function Theming() {
  return (
    <ThemeProvider theme={theme}>
      <NetFlixApp/>
    </ThemeProvider>
  );
}
```

📑 Le lien vers [l](https://material-ui.com/getting-started/installation/)a
[documentation du theme](https://material-ui.com/styles/advanced/)

**Fichiers :**

- `src/App.js`

## Exercice

Dans cet exercice nous allons commencer à styliser notre page en utilisant du
CSS classique qui est dans `Netflix.css` , du CSS via le thème de `Material-UI.`
ainsi que que des composant Material-ui. Le premier composant que nous allons
utiliser est le composant `AppBar`

```jsx
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
//...
;<AppBar>
  <Toolbar>
    <Typography variant="h6">Acceuil</Typography>
    <Typography variant="h6">Série</Typography>
  </Toolbar>
</AppBar>
```

📑 Le lien vers la
[documentation AppBar](https://material-ui.com/components/app-bar/)

**Fichiers :**

- `src/components/NetflixApp.js`

## Bonus

### 1. 🚀 Effet sur la barre de menu (scrool)

Sur le site de NetFlix la barre de menu est transparente lorsque le `scroll` est
en haut de la page. Lorsque l'on `scroll` vers le bas. La barre de menu n'est
plus transparente et cela s'effectue via une transition.

Dans cette exercice tu vas devoir changer le style dynamiquement en fonction de
la position de la scrollbar.

```jsx
// style scrool bas
{
	background: '#111',
	transition: 'background .5s ease-out',
	boxShadow: 'none',
}
// style scrool en haut
{
	background: 'transparent',
	transition: 'background .5s ease-out',
	boxShadow: 'none',
}
```

Pour cela transforme `appBarStyle` en `state` avec les valeurs par defaut.

Utilise ensuite le hook `useEffect` pour ajouter un eventListener sur le
changement de position de scrool

```jsx
window.addEventListener('scroll', onScroll)
```

Si `e.target.documentElement.scrollTop >= 100` applique le style `scrool` bas
sinon l'autre

> pense au `cleanup` du hook `useEffect` :

```jsx
return () => window.removeEventListener('scroll', onScroll)
```

## 🐜 Feedback
#
## Etape 3
#
# Découpage composants

### 💡 Découpage composants

## 📝 Tes notes

Detaille ce que tu as appris ici
`INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Pour une meilleur maintenance de l'application, nous allons maintenant découper
notre application avec des composants plus petits. Le but est d'avoir
`NetflixApp` de la forme :

```jsx
const NetflixApp = () => {
  return (
    <div>
      <NetflixAppBar />
      <NetflixHeader />
      <NetflixRow wideImage={false} title="Films Netflix" />
      <NetflixRow wideImage={true} title="Série Netflix" />
      <NetFlixFooter />
    </div>
  )
}
```

## Exercice

Découpe `NetflixApp` dans le but de pouvoir plus tard externaliser cers fichier
dans des composants. On veut que `NetflixRow` puisse afficher des pochettes au
format large ou poster.

**Fichiers :**

- `src/components/NetflixApp.js`

## 🐜 Feedback
#
## Etape 4
#
# Fetch Films Series

### 💡 Fetch Films Séries

## 📝 Tes notes


## Comprendre

Pour avoir accès aux nombreux films et séries disponible sur Netflix nous
aurions pu utiliser l'API développeur de Netflix. Celle n'est plus ouverte aux
développeurs. du coups nous allons utiliser l'API de
[TMDB (The Movie DB)](https://www.themoviedb.org/movie). La première chose a
faire est de [créer un compte ici](https://www.themoviedb.org/signup). Ensuite
il faut aller dans les paramètres et
[générer une clef d'API](https://www.themoviedb.org/settings/api) . On pourra
ensuite passer cette clef en `query param`. Exemple de requête

```html
https://api.themoviedb.org/3/movie/550?api_key=4fc7b001e8a107fe1fddc6b41ed0f4af
```

La réponse :

```json
{
  "adult": false,
  "backdrop_path": "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
  "belongs_to_collection": null,
  "budget": 63000000,
  "genres": [
    {
      "id": 18,
      "name": "Drama"
    }
  ],
  "homepage": "http://www.foxmovies.com/movies/fight-club",
  "id": 550,
  "imdb_id": "tt0137523",
  "original_language": "en",
  "original_title": "Fight Club",
  "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
  "popularity": 42.285,
  "poster_path": "/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
  "release_date": "1999-10-15",
  "revenue": 100853753,
  "runtime": 139,
  "status": "Released",
  "tagline": "Mischief. Mayhem. Soap.",
  "title": "Fight Club",
  "video": false,
  "vote_average": 8.4,
  "vote_count": 22389
}
```

> L'api permet de chercher des films `/movie` ou des séries `/tv`

📑 Le lien vers la
[documentation de l'API TMDV](https://developers.themoviedb.org/3)

## Exercice

👨‍✈️ Hugo le chef de projet nous demande la fonctionnalité suivante : Lorsque d'un
utilisateur arrive sur le site, un film par défaut sera afficher dans le header.

🐶 Tu vas devoir appeler cette API et récupérer un film de ton choix en fonction
de son id (tu trouveras l'id dans l'url de la page de détail d'un film: Par
exemple `848278` pour `Jurrasic Hunt:`
[https://www.themoviedb.org/movie/848278-jurassic-hunt](https://www.themoviedb.org/movie/848278-jurassic-hunt)

Ce film sera affiché par défaut sur le `header` sur la page d'accueil.

Nous utiliserons `axios` pour les appels HTTP (une alternative a `fetch`)

```bash
npm install axios --save or yarn add axios
```

exemple d'appel :

```jsx
import axios from 'axios'

axios
  .get('https://api.themoviedb.org/3/movie/550')
  .then(function (response) {
    // handle success
    console.log(response)
  })
  .catch(function (error) {
    // handle error
    console.log(error)
  })
  .then(function () {
    // always executed
  })
```

**Fichiers :**

- `src/components/NetflixApp.js`

## Bonus

### 1. 🚀 Gérer les Films et séries

👨‍✈️ Hugo le chef de projet nous demande de gérer les films mais aussi les séries
avec le même affichage.

L'API TMDB fonctionne pour les films et séries. La différence se fait sur l'url
de l'API mais aussi sur le format des données.. Quelques exemples

Films :

- url : `/movie`
- titre du film : champ `title`

Série

- url : `/tv`
- titre du film : champ `name`

Nous allons donc gérer ces deux cas : Dans `NetFlixApp` pour les appels API et
dans `NetflixHeader` pour l'affichage des données.

Le composant `NetflixHeader` :

Il doit gérer les deux cas. Pour cela tu vas devoir passer un `prop` 'type' qui
aura la valeur 'tv' ou 'movie' et en fonction du type tu vas devoir afficher le
bon titre.

Le composant `NetFlixApp` :

Créé une constante pour le type et utilise cette constante pour les appels API
et passe la a `NetflixHeader`

```jsx
const type = 'tv' // ou 'movie'
//...
<NetflixHeader movie={headerMovie?.data} type={type} />
```

Utilise ensuite le `type` dans l'url pour appeler la bonne API en fonction du
type.

> Attention aux ID qui sont différents entre films et séries, utilise `71446`
> pour casa de papel

**Fichiers :**

- `src/components/NetflixApp.js`

### 2. 🚀 Films et séries aléatoires

👨‍✈️ Hugo le chef de projet nous demande que lorsqu'un utilisateur arrive sur le
site il ne voit pas toujours même film sur dans le header. Il veut afficher
aléatoirement un film ou une série. et aléatoirement parmi une liste d'éléments.
Pour commencer il nous fournis il liste de films et séries

```jsx
const tvIds = [71446, 60574, 1399, 66732]
const moviesIds = [399566, 602734, 579047, 385128, 615658]
```

Tu vas devoir implémenter cette fonctionnalité : Pour cela Utilise
`getRandomIntInclusive` qui est dans le fichier `utils/helper.js` qui permet
d'avoir une nombre entier aléatoire sur une plage.

```jsx
import {getRandomIntInclusive} from '../utils/helper'
getRandomIntInclusive(0, 4) // nombre aleatoire entre 0 et 4
```

utilise `getRandomIntInclusive` pour afficher aléatoirement des films et des
séries.

> Transforme 'type' en `state` sinon `type` ne changera pas de valeur dans
> `NetflixHeader`. Du coup attention au dépendances de `useEffect`. On veut que
> l'appel API ne se fasse qu'une fois, utilise
> `// eslint-disable-next-line react-hooks/exhaustive-deps` pour supprimer le
> warning sur linter

**Fichiers :**

- `src/components/NetflixApp.js`

### 3. 🚀 Helper et constantes

Dans une application on réutilise souvent les mêmes variables et fonctions
utiles. Pour cela nous avons créé fichier helper dans `utils/helper.js` qui
contiendra toutes nos fonctions utile dans d'autres parties de notre
application. Par exemple les fonctions qui permettent de générer aléatoirement
des id de films / séries.

1.  Dans cette exercice tu vas devoir utiliser ces fonctions dans `NetFlixApp`

```jsx
export function getRandomType() {
  return [TYPE_TV, TYPE_MOVIE][getRandomIntInclusive(0, 1)]
}
export function getRandomMovie() {
  const moviesIds = [399566, 602734, 579047, 385128, 615658]
  return moviesIds[getRandomIntInclusive(0, moviesIds.length - 1)]
}
export function getRandomSerie() {
  const tvIds = [71446, 60574, 1399, 66732]
  return tvIds[getRandomIntInclusive(0, tvIds.length - 1)]
}
export function getRandomId(type = TYPE_MOVIE) {
  return type === TYPE_TV ? getRandomSerie() : getRandomMovie()
}
```

1. Nous aimons pas nous trimballer des `'magic string'` comme `'tv'` `'movie'`
   `'fr-fr'`,il est préférable de créer des constantes et les mettre dans un
   fichier à part.
2. De même pour les clefs d'API, si la clef change il va falloir modifier
   partout dans le code. Du coup on centralise les constantes.

```jsx
export const apiKey = '4fc7b001e8a107fe1fddc6b41ed0f4af'
export const lang = 'fr-fr'
export const imagePath = 'https://image.tmdb.org/t/p'
export const imagePathOriginal = `${imagePath}/original`
export const imagePath400 = `${imagePath}/w400`
export const TYPE_TV = 'tv'
export const TYPE_MOVIE = 'movie'
```

1. De même pour les URL images ou URL API qui peuvent varier d'un en fonction de
   l'environnement (dev, production, test etc ...)

Pour cela on utilise un fichier `.env` / `.env.production` / `.env.local`

```jsx
REACT_APP_API_URL=https://api.themoviedb.org/3
REACT_APP_IMAGE_URL=https://image.tmdb.org/t/p
```

📑 Le lien vers la doc
[cra variables environnement](https://create-react-app.dev/docs/adding-custom-environment-variables/)

**Fichiers :**

- `src/components/NetflixApp.js`
- `src/config.js`
- `src/utils/helper.js`
- `.env`

### 4. 🚀 API Client

Nous avons précédemment exporté dans des fichiers config `API_URL` `apiKey`
`lang`. Mais nous voulons aussi externaliser l'appel `axios` qui sera
vraisemblablement toujours le même à l' exception du `endpoint` . Nous n'avons
pas envie de nous trimballer l'appel Axios, la clef,la lang etc ... Idéalement
nous voudrions faire notre appel comme ceci

- `clientApi('/movie/550')`
- `clientApi('/tv/695')`

Pour cela nous avons créé une fonction `clientApi` dans `src/utils/clienApi.js`

```jsx
const clientApi = endpoint => {
  const page = 1
  const startChar = endpoint.includes('?') ? `&` : `?`
  const keyLang = `${startChar}api_key=${apiKey}&language=${lang}&page=${page}`
  return axios.get(`${API_URL}/${endpoint}${keyLang}`)
}
```

Dans cet exercice, utilise `clientApi` au lieu de `axios`

**Fichiers :**

- `src/components/NetflixApp.js`
- `src/utils/clientApi.js`

## 🐜 Feedback
#
## Etape 5
#
# Fetch avancé / status / error

### 💡 Fetch avancé / status / error

## 📝 Tes notes

Detaille ce que tu as appris ici
`INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Dans la section précédente nous avons vu une manière simple de gérer les appels
HTTP. Pour le moment nous ne gérons pas de status : `idle`, `fetching`, `done`,
`error` etc ... ce qui nous permettrais de gérer plus finement l'état du
composant. Par exemple pour afficher un <Loading> component durant le
chargement, afficher un message d'erreur etc ...

## Exercice

Dans cet exercice tu vas devoir gérer deux états et ajouter 2 composants
`MaterialUI`

- `fetching`(en cours de chargement)

utilisation de [CircularProgress](https://material-ui.com/components/progress/)

```jsx
import CircularProgress from '@material-ui/core/CircularProgress'
;<CircularProgress />
```

> Astuce pour simuler du délais : Modifier le `clientAPI`

```jsx
const sleep = t => new Promise(resolve => setTimeout(resolve, t))

const clientApi = async endpoint => {
  const page = 1
  const startChar = endpoint.includes('?') ? `&` : `?`
  await sleep(2000)
  const keyLang = `${startChar}api_key=${apiKey}&language=${lang}&page=${page}`
  return axios.get(`${API_URL}/${endpoint}${keyLang}`)
}
```

- `error` (erreur sur l'appel d'api)

utilisation de [Alert](https://material-ui.com/components/alert/)

```jsx
import {Alert, AlertTitle} from '@material-ui/lab'
;<Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  This is an error alert — <strong>check it out!</strong>
</Alert>
```

**Fichiers :**

- `src/components/NetflixApp.js`

## Bonus

### 1. 🚀 Utilisation d'un Hook `useFetchData`

Nous avions déjà coder un Hook réutilisable `useFetchData` dans les modules
précédents, qui permettais de gérer les états et les données et les messages
d'erreur. Afin d'avoir un comportement commun dans toute l'application l'avons
mis dans `src/utils/hooks.js`

```jsx
import {useFetchData} from './utils/hooks'
//...
const {data, error, status, execute} = useFetchData()
//...
execute(client(`${type}/${id}`))
```

Dans cet exercice tu vas devoir le l'utiliser.

Affiche également le libellé du message d'erreur géré par l'api. Il s'agit d'un
message d'erreur fonctionnel

```jsx
<Alert severity="error">
  <AlertTitle>Une erreur est survenue</AlertTitle>
  Detail : {error.message}
</Alert>
```

**Fichiers :**

- `src/components/NetflixApp.js`
- `src/utils/hooks.js`

### 2. 🚀 Utilisation de ErrorBoundary

Il peut survenir parfois des erreurs non gérer, erreur inconnus que nous voulons
traité. Le package `ReactErrorBoundary` permet de gérer cela

```jsx
npm install --save react-error-boundary --save
```

```jsx
import {ErrorBoundary} from 'react-error-boundary'

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

const ui = (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // reset the state of your app so the error doesn't happen again
    }}
  >
    <ComponentThatMayError />
  </ErrorBoundary>
)
```

Dans cet exercice tu vas devoir gérer le cas des erreurs générales du site. Lève
une erreur si le `status` est en erreur

```jsx
if (status === 'error') {
  // sera catcher par ErrorBoundary
  throw new Error(error.message)
}
```

**Fichiers :**

- `src/App.js`
- `src/components/NetflixApp.js`

## 🐜 Feedback
#
## Etape 6
#
# Composant : Ligne de films

### 💡 Composant : Ligne de films

## 📝 Tes notes

Detaille ce que tu as appris ici
`INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Dans l'application Netflix nous avons des lignes de films / séries.

- Les plus gros succès Netflix
- Tendances actuelles
- Films d'actions
- etc ...

De plus l'affichage des pochettes parfois vertical, parfois horizontal. Un logo
Netflix est superposé sur la pochette de film.

## Exercice

👨‍✈️ Hugo le chef de projet nous demande la fonctionnalité suivante : Pourvoir
afficher des films / séries de la même manière que sur Netflix, c'est à dire :

- des lignes de films
- des lignes de séries

filtrer par

- les nouveautés
- tendances
- populaires
- les mieux notée
- par genre (action, aventure, thriller etc ...)

🐶 Le but de cet exercice va être de développer un composant `NetflixRow` qui
gère tous ces cas. Nous utiliserons les API REST suivantes

- `/movie/latest`
- `/movie/popular`
- `/movie/top_rated`
- `/tv/latest`
- `/tv/popular`
- `/tv/top_rated`
- `/trending/all/day`

`📝` [Documentation API TMDB](https://developers.themoviedb.org/3)

**Fichiers :**

- `src/components/NetflixApp.js`
- `src/components/NetFlixRow.js`

## 🐜 Feedback
#
# Etape 7
#
# React Router

### 💡 React Router


## Comprendre

La base du WEB est basé sur les URL. Il suffit de partager une URL à quelqu'un,
sur un site, pour accéder facilement à une ressource. Dans notre application
NetFlix, nous pourrions avoir besoin de partager la page avec le détails d'un
film ou d'une série. La page de souscription ou le login. Il existe de
nombreuses librairies pour gérer le `routing` avec `React` mais la plus utilisé,
reconnue et standard est [React Router](https://reactrouter.com/). Ci dessous un
exemple d'utilisation

- installation

```jsx
npm install react-router-dom --save ou yarn ...
```

- exemple :

```jsx
import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  )
}

//Composants dans l'aplication
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  )
}

function Page404() {
  return (
    <div>
      <h2>Perdu ?</h2>
    </div>
  )
}
```

📑 Le lien vers [React Router](https://reactrouter.com/web/guides/quick-start)

## Exercice

👨‍✈️ Hugo le chef de projet nous demande d'avoir des pages différentes lorsque
l'on clique sur les menu `series` /`films` / `Nouveautés les plus regardés`

Ces menus sont liés aux PATH suivants

- `/series` une page dédiées aux séries

Cette page contiendra un header aléatoire mais uniquement sur les séries avec 5
lignes de séries

1. Séries tendances Netflix (`trending`)
2. Séries les mieux notées (`toprated`)
3. Les séries populaires (`populaire`)
4. Les documentaires (`genre 99`)
5. Les séries criminelles (`genre 80`)

- `/movies` une page dédiées aux films

Cette page contiendra un header aléatoire mais uniquement sur les films avec 5
lignes de films

1. Films Netflix (`trending`)
2. Les mieux notés (`toprated`)
3. Les films populaires (`populaire`)
4. Les films fantastiques (`genre 14`)
5. Les films de sciences fictions(`genre 878`)

- `/news` une page dédiées aux dernière nouveautés
  1. A venir (`latest`)
  2. Nouveauté (`latest`)
  3. laisse la suite comme `NetFlixApp`
- `/list` un page dédiées aux liste de film ajoutés
  - sera implémenté plus tard avec la gestion authentification

`🐶` Dans cet exercice tu vas devoir configurer le router dans `App` pour gérer
les routes

- `/`
- `/movies`
- `/series`
- `/news`
- `/*`

pour que ces routes charges les bons composants : `NetflixApp` etc ...

> 💡 Pour simplifier l'exercice `NetflixApp` à été dupliquer en `NetflixMovies`
> , `NetflixSeries`, `NetFlixNews` qui nous servira de base de départ

**Fichiers :**

- `src/App.js`
- `src/components/NetflixSeries.js`
- `src/components/NetflixMovies.js`
- `src/components/NetflixNews.js`

## Bonus

### 1. 🚀 Path Param

👨‍✈️ Hugo le chef de projet nous demande d'avoir la possibilité de partager des
films ou des séries via des URL de la forme suivante

- `/movie/:movieId`
- `/tv/:tvId`

Quand cette URL est partagée, le Header avec le titre, la description, image est
affiché. L'utilisateur doit également avoir la possibilité de naviguer librement
en **cliquant sur le lien des pochettes**. On doit aussi de pouvoir arriver sur
des pages particulière comme :

🐶 Nous allons dupliquer le composant `<NetflixApp/>` dans `<NetflixById>` et
adapter l'affichage du `header`.

Nous utiliserons deux `hooks` intéressant pour récupérer les `query params` pour
avoir l'id et savoir si on est en mode `series/films`

```jsx
import {useParams, useLocation} from 'react-router-dom'

let {tvId} = useParams() //id de la serie
const location = useLocation()
localtion.pathname //-> /tv/1554 ou /movie/5845
```

> utilise `location.pathname.includes` pour determiner le mode TV /MOVIE

Pense a modifier `NetFlixRow` pour mettre le lien vers le films/serie

📑 Le lien vers la doc de
[useParam](https://reactrouter.com/web/api/Hooks/useparams)

📑 Le lien vers la doc de
[useLocaltion](https://reactrouter.com/web/api/Hooks/uselocation)

**Fichiers :**

- `src/components/NetflixById.js`
- `src/components/NetflixRow.js`

### 2 🚀 Liens internes

Les liens de notre barre de menu sont développé avec les balises html
`<a></a href=''>`

Cela est problématique dans une application React puisque cela force le
rechargement complet de la page. _(perte des states etc ...)._ A la place il est
possible d'utiliser le composant Link de ReactRouter

```jsx
import {Link} from 'react-router-dom'
//
<Link to="/">
```

Fais ce changement dans `NetflixAppBar` et `NetflixRow`

**Fichiers :**

- `src/NetflixAppBar`
- `src/NetflixRow`

### 3 🚀 Scroll Top

Lorsque l'on navigue (on change de page) on constate que la `scrollbar` reste
dans la même position, ce qui peut être gênant

Améliore ce comportement en remontant la `scrollbar` , en douceur

```jsx
window.scrollTo({
  top: 0,
  behavior: 'smooth',
})
```

**Fichiers :**

- `src/components/NetflixById.js`

## 🐜 Feedback

#
## Etape 8
#
# Authentification

### 💡 Authentification

## 📝 Tes notes

Detaille ce que tu as appris ici
`INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Il existe de de nombreuses méthodes pour gérer l'authentification d'un
utilisateur. `oauth2`, `openid`, `cas`, `saml` etc ... Il s'agit souvent de de
récupérer un `Token` en fonction d'un couple `username/password`. Tous les
échanges sont ensuite fait avec ce `Token`. Cela évite d'avoir à échanger en
permanence le `username/password`. On passe généralement le `Token` dans le
header http. voici un exemple avec `'axios'`. Installation avec : ```yarn add react-testing-library > yarn add msw  ```. 
Pour le fonctionnement du projet dans cette partie nous aurons besoin d'ajouter "browser": {"crypto": false} au package.json pour que le projet tourne

```jsx
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
}
return axios.get(`/ressources`, config)
```

📑 Le liens vers la documentation de
[configuration du header http avec axios](https://axios-http.com/docs/req_config)

Gérer l'authentification est les droits peut vite devenir compliqué, c'est la
raison pour laquelle ils existe de nombreux service qui le gère pour nous.

- Firebase Authentication
- AWS Cognito
- Auth0
- etc ...

Il est pénible pour un utilisateur d'avoir à saisir systématiquement le
`username/password` à chaque connexion. En règle général le `Token` est stocké
dans le navigateur (`Cookies`, `LocalStorage`), ce qui permet d'être directement
authentifié.

## Exercice

👨‍✈️ Hugo le chef de projet nous demande de gérer l'authentification, les
utilisateurs non connectés ne pourront plus voir la liste des films et verrons
un formulaire d'inscription / connexion. Les équipes qui développent le backend
nous on fournis un utilitaire permettant de se connecter aux API
d'authentification Netflix `authNetflixProvider.js` et le composant
`<LoginRegister>`. Avec cela on peux se connecter, s'enregistrer et se
déconnection via :

```jsx
import * as authNetflix from 'auth-netflix-provider'

authNetflix.login({username, password})
authNetflix.register({username, password})
authNetflix.logout()
authNetflix.getToken()
```

> `login` et `register` stocke le `token` dans le navigateur (localstorage),
> `getToken` permet d'accéder à ce `token`, `logout` supprime le `token` du
> navigateur

**Fichiers :**

- `src/App.js`
- `src/AuthApp.js`
- `src/UnauthApp.js`

## Bonus

### 1. 🚀 Auto login

👨‍✈️ Hugo le chef de projet veut que lorsque l'utilisateur revient sur la page, il
n'ait pas à retaper le login et mot de passe. L'utilitaire fournis par l'équipe
backend `authNetflixProvider` nous permet de récupérer le `token` sauvegardé
lors de la dernière connexion avec `authNetflix.getToken()`. L'équipe backend
nous informe également quand appelant l'API REST `/me` avec le `Token`, on
récupère les informations de l'utilisateur connecté.

1. **Créé une fonction async `getUserByToken`**

   Cette fonction récupère le `token` avec `authNetflix.getToken()` et appel
   l'API `/me`

   avec `clientAuth`

   ```jsx
   import {clientAuth} from './utils/clientApi
   clientAuth('me',token)
   ```

   et retourne l'utilisateur connecté.

2. **Utilise notre Hook** `useFetchData`

   Afin d'uniformiser tous les appels HTTP, on utilise le `hook useFetchData`
   pour faire appel à `getUser`. nous n'utiliseront pas le state `authUser` met
   le state de `useFetchData`

   > Fait l'appel dans un `useEffect` et utilise `setData` de `useFetchData`
   > pour mettre à jour les données

**Fichiers :**

- `src/App.js`

### 2. 🚀 Chargement BackDrop

Lorsque l'utilisateur se connecte il y a un petit effet ou l'on voit apparaitre
le composant login puis il disparait. Utilise le `status` de `useFetchData` pour
afficher un composant de chargement en plein écran

```jsx
status === 'fetching'
```

Exemple d'utilisation de `Backdrop`

```jsx
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

;<Backdrop open={true}>
  <CircularProgress color="primary" />
</Backdrop>
```

Condition l'affiche du `backdrop` quand le `status` est a `fetching`

`📝` doc de [backdrop mui](https://mui.com/components/backdrop/)

**Fichiers :**

- `src/App.js`

### 3 🚀 **Gérer les messages d'erreur**

Lorsqu'un utilisateur veut créer un compte, il peut y avoir un problème de
connexion, idem sur la création de compte. Créé un state `authError` et met à
jour la valeur

```jsx
authNetflix
  .register(data)
  .then(user => setData(user))
  .catch(err => setAuthError(err))
```

passe ensuite ce state en `prop error` de `<UnauthApp />`

**Fichiers :**

- `src/App.js`
- `src/UnauthApp.js`

## 🐜 Feedback
#
## Etape 9
#
# API REST : Gestion des favoris

### 💡 API REST : Gestion des favoris

## 📝 Tes notes

Detaille ce que tu as appris ici
`INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Dans une application le front interagis fortement avec le backend. Une fois
l'utilisateur authentifié il peut ensuite effectuer des actions qui seront
sauvegarder coté backend. Pour cela il est possible de faire des appels HTTP
selon la norme API REST, GraphL ou autre. Ici nous utiliseront des API REST.
Dans les API REST les paramètres importants à prendre en prendre sont :

- La ressource (le endpoint)
- La méthode HTTP (`GET,POST,PUT,DELETE`)

Exemple d'appel API REST pour une ressource que nous appelleront `articles`

```jsx
GET /articles
// liste tous les articles
POST /articles
// Créé un nouvel article
GET /articles/:id
// récupère une article
PUT /articles/:id
// met à jour un article
DELETE /articles/:id
// supprime une article
```

## Exercice

👨‍✈️ Hugo le chef de projet nous informe que les équipes backend viennent de nous
proposer un nouvelle version des API REST qui permet de gérer liste de films et
séries favorites. Voila la documentation :

```jsx
GET /bookmark
// recupère les favoris de l'utilisateur connecté
// reponse contient un array d'id de films et de series
{uid: 1, movies: [5, 10, 15], series: [20, 25]}

POST /bookmark/tv
// ajoute une série dans la liste des series favorites

POST /bookmark/movie
// ajoute un film dans la liste des series favorites

DELETE /bookmark/tv
// spprime une série dans la liste des series favorites

DELETE /bookmark/movie
// spprime un film dans la liste des series favorites
```

> L'id sera passé dans le `body` de la requête

> Une erreur st retourner en cas de doublons

👨‍✈️ Hugo le chef de projet nous demande d'implémenter la gestion des films et
séries favorites. La gestion se fera principalement dans le composant
`NetflixHeader`.

- On doit pouvoir voir si un film est dans notre liste (proposer de le
  supprimer)
- On doit pouvoir ajouter le film/série dans la liste
- On doit pouvoir supprimer le film/série dans la liste

**Fichiers :**

- `src/components/NetflixHeader.js`

## Bonus

### 1. 🚀 Notification (SnackBars), Erreurs et Icones

👨‍✈️ Hugo le chef de projet veut un icone de suppression lorsqu'il est possible de
supprimer un film série de la liste. On utilisera les icone de `material-ui` avec le package
yarn add @mui/icon-material et yarn add @mui/icons-material

```jsx
import DeleteIcon from '@mui/icons-material/Delete'
//.
;<DeleteIcon
  color="secondary"
  style={{marginRight: '5px'}}
  fontSize={'small'}
/>
```

📑 Le lien vers la
[documentation des icones](https://mui.com/components/material-icons/)

👨‍✈️ Hugo souhaite aussi pouvoir notifier l'utilisateur si **une erreur est
survenu** ou si l'ajout/suppression s'est **dérouler correctement**. Pour cela
nous utiliseront les composants `Snackbar` et `MuiAlert`

```jsx
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
}
//...
const [snackbarOpen, setSnackbarOpen] = React.useState(false)
//...
<Snackbar
  open={snackbarOpen}
  autoHideDuration={4000}
  onClose={() => setSnackbarOpen(false)}
>
  <Alert severity="error" sx={{width: '100%'}}>
	   erreur est survenue
  </Alert>
</Snackbar>
```

📑 Le lien vers la
[documentation Snackbar](https://mui.com/components/snackbars/)

Utilise `error` et `status` de `useFetchData`

```jsx
const {data, error, status, execute} = useFetchData()
```

Base toi sur les `status` et `error` :

- `status === 'done'` pour afficher le message dans la snackbar : _Liste
  modifiée avec succès_
- `status === 'error'` pour afficher le message dans la snackbar :
  `Problème lors de l'ajout : {error.message}`

> Comme `status` vient de `useFetchData` et qu'il est partagé avec l'appel
> initial (`'/bookmark'`), créé un state `callBookmark` initialisé à `false` par
> défaut. Passe le à `true` lors d'un appel ajout/suppression aux favoris. et
> ajoute une condition d'affichage aux snackbars (`callBookmark && status ===` )

Pense à changer le state de la snackbar sur chaque changement de `status`

```jsx
React.useEffect(() => {
  setSnackbarOpen(true)
}, [status])
```

**Fichiers :**

- `src/components/NetflixHeader.js`

### 2. 🚀 Route affichage des favoris

👨‍✈️ Hugo souhaite avoir une route dédiée avec la liste de tous les favoris. Il
souhaite avoir le même rendu que les autres pages c'est a dire :

- `<NetflixAppBar />`
- `<NetflixHeader />`
  - qui contiendra le premier film favori sinon un par défaut
- Et deux lignes (`row`)
  - une ligne : _Films favoris_
  - une ligne : _Séries favorites_

La route à été définie dans le composant `AuthApp` elle est donc accessible et
il n'y aura rien a faire dessus

```jsx
import {NetflixBookmark} from 'components/NetflixBookmark'
//...
;<Route path="/list" element={<NetflixBookmark logout={logout} />} />
```

Créé un composant `NetflixBookmark` qui fera fera tous les appels nécessaires
pour afficher les favoris

**Fichiers :**

- `src/components/NetflixBookmark.js`
- `src/components/AuthApp.js`

## 🐜 Feedback
#
## Etape 10
#
# Gestion de cache avec React-Query

### 💡 Gestion de cache avec React-Query

## 📝 Tes notes

Detaille ce que tu as appris ici
`INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Dans une application nous devons souvent gérer deux choses importantes,
l'affichage et les données (provenant du backend). Gérer ces états (
`state management` ) peut vite devenir compliqué. On a d'un coté les états de
l'application coté front

- Le user est-il connecté ?
- Une erreur est-elle survenue ?
- Le thème est il en dark mode / Light mode ?
- etc ...

Et les états des données cotés backend

- La liste des derniers films
- Les mieux notés
- Les séries tendances
- Les favoris (bookmark) de l'utilisateur
- etc ...

Les applications deviennent de plus en plus complexes et on a tendance à
mélanger tous les states alors qu'il est préférable de les séparer. il existe
des dizaines d'outils de gestion d'états, mais il ne sont parfois pas dédiées à
la gestion des données cotés serveur, avec gestion de la mémoire cache, ce qui
veut dire que ce mécanisme est à réimplémenter. Heureusement
[React-Query](https://react-query.tanstack.com/) permet de faire cela. Installation : yarn add react-query

```jsx
// Querie
const bookmark = useQuery('bookmark', clientApi(`/bookmark`))

// Mutation & Cache
const cache = useQueryCache()

const [addBookmark] = useMutation(clientApi(`/bookmark`, filmId, 'POST'), {
  onSuccess: () => {
    // Query Invalidations
    cache.invalidateQueries('bookmark')
  },
})
```

📑 Le liens vers les `hooks`

- [useQuery](https://react-query.tanstack.com/reference/useQueries#_top)
- [useMutation](https://react-query.tanstack.com/reference/useMutation#_top)

## Exercice

👨‍✈️ Hugo le chef de projet nous indique que le nombre d'utilisateurs augmente
rapidement. Il veut que l'on gère les données en cache ,cela rendra le site plus
rapide et évitera les surcharges d'appels vers le backend.

Ton boulot va d'être de changer tout les appels API (TMDB et Auth) par
`react-query`. Pense à utiliser le même nom de `query` pour les appels
identiques. cela nous permettra de supprimer les donnée en cache. par exemple

- `useQuery('bookmark')`
- `useQuery('tv/555')`
- `useQuery('discover/movies-genres=758')`

Pour la fonctionnalité d'ajout aux favoris, utilise le `hook useMutation` et
invalide les données en cache avec `cache.invalidateQueries('bookmark')`

Commence par `App.js,` ensuite toutes les `queries` et termine par les
`mutations`

**Fichiers :**

- `src/App.js`
- `src/components/NetflixAppjs`
- `src/components/NetflixById.js`
- `src/components/NetflixHeader.js`
- `src/components/NetflixMovies.js`
- `src/components/NetflixRow.js`
- `src/components/NetflixNews.js`
- `src/components/NetflixSeries.js`
- `src/components/NetflixBookmark.js`

## Bonus

### 1. 🚀 Configuration retry / error

Il est possible de configurer finement `React-Query`, comme par exemple
rafraichir les données lorsque le navigateur a le focus, gérer les erreurs, le
nombre de tentatives sur erreur etc ...

Dans cet exercice tu vas devoir configurer le `QueryClient` dans `App.js`

📑
[https://react-query.tanstack.com/reference/QueryClient#\_top](https://react-query.tanstack.com/reference/QueryClient#_top)

On veut avoir le caractéristiques suivantes sur les `queries`et `mutations`

- un délais entre 2 tentatives de 500ms
- 3 tentatives de connexion par défaut sauf pour :
  - error 404 ou 401 pas de nouvelles tentatives
- utilisation de `ErrorBoundary` en cas d'erreur
- désactiver l'option qui `refetch` sur le focus de la fenêtre
- 1 seul tentative de reconnexion sur mutation.

```jsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
      retryDelay: 500,
      retry: (failureCount, error) => {
        if (error.status === 404) return false
        else if (error.status === 401) return false
        else if (failureCount > 3) return false
        else return true
      },
    },
    mutations: {
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
      retryDelay: 500,
      retry: 1,
      // mutation options
    },
  },
})
```

Nous allons devoir adapter la fonction `clientApi` qui est dans
`src//utils/clientApi.js` pour retourner le `status` (pour connaitre le code 401
404 etc ...) et avoir afficher le message d'erreur de l'api TMDB. Pour rappel
cette api retourne

```json
{
  "success": false,
  "status_code": 34,
  "status_message": "The resource you requested could not be found."
}
```

Adapte la fonction `clientApi` et au lieu de retourner

```jsx
return axios.get(`${API_URL}/${endpoint}${keyLang}`).
```

catch l'erreur (qui contient le `status` dans `error.response` de `axios`)

```jsx
return axios.get(`${API_URL}/${endpoint}${keyLang}`).catch(error => {
  // retourne err qui est un objet qui contient le 'status' et 'message'
  return Promise.reject(err)
})
```

La propriété `message` est utilisée sur le composant `ErrorFallback` de
`errorBoundary` . Utilise un `spred operérator`

```jsx
const err = {
  ...error.response,
  message: error.response?.data?.status_message,
}
return Promise.reject(err)
```

Pour tester l'erreur utilise cette URL

- [http://localhost:3000/movie/id-inexistant](http://localhost:3000/movie/id-inexistant)

**Fichiers :**

- `src//App.js`
- `src//utils/clientApi.js`

### 2. 🚀 Faire des Hooks personnalisés

La modification des appels API, le passage de notre hook `useFechData` à
`useQuery` à du être répété dans de nombreux fichiers. A la place il est
préférable de centraliser cela dans des `hooks` personnalisés. Par exemple

- `useMovie(type, id)`
- `useMovieGroup(type, filter, param)`
- `useBookmark()`
- `useAddBookmark(type, id)`
- `useDeleteBookmark(type, id)`

**Tu vas devoir créer ces hooks :**

1. Pour les hooks `GET` le code est sensiblement le même que dans les composants
   qui utilisent `useQuery`.

   Remplace ensuite tous les appels par :

   ```jsx
   const {data: headerMovie} = useQuery(`${type}/${defaultMovieId}`, () =>
     clientApi(`${type}/${defaultMovieId}`),
   )

   //en ca
   const headerMovie = useMovie(type, defaultMovieId)
   // pense a changer headerMovie.data en headerMovie dans <NetflixHeader>
   ```

2. Pour les hooks personnalisés qui **utilisent les mutations :**

   Le principe consiste à utiliser `useMutation` et passer les callbacks
   `onSuccess onError onSettled onMutate` en paramètres pour pouvoir utiliser
   ces `hooks` de la manière suivante :

   ```jsx
   const addMutation = useAddBookmark({
     onSuccess: () => {
       setSnackbarOpen(true)
       setMutateBookmarkError()
     },
     onError: error => {
       setSnackbarOpen(true)
       setMutateBookmarkError(error)
     },
   })
   ```

Note sur tous les composants utilisant ces nouveaux hooks

> Supprime tous les `status === 'error'` car c'est gérer par `errorBoundary`

> Remplace tous les `status === 'loading'` par `!data`

> Remplace tous les `headerMovie.data` par `data`

**Fichiers :**

- `src/utils/hookMovies.js`
- `src/components/NetflixApp.js`
- `src/components/NetflixAppjs`
- `src/components/NetflixById.js`
- `src/components/NetflixHeader.js`
- `src/components/NetflixMovies.js`
- `src/components/NetflixRow.js`
- `src/components/NetflixNews.js`
- `src/components/NetflixSeries.js`
- `src/components/NetflixBookmark.js`

### 3. 🚀 Récupérer les erreurs de mutation

Nous voulons un comportement spécial pour les erreurs de mutations. Nous ne
voulons pas utiliser `ErrorBoundary` mais plutôt utiliser le composant `Mui`
Alerte et Snackbar. Il ne faut donc pas mettre `useErrorBoundary: true` pour les
mutations.

```jsx
mutations: {
 useErrorBoundary: false,
 refetchOnWindowFocus: false,
 retryDelay : 500,
 retry:1,
  // mutation options
},

// onError sera ensuite pris en compte
onError: error => {
  setSnackbarOpen(true)
  setMutateBookmarkError(error)
},
```

> Pour simuler une erreur de mutation, modifie `useAddBookmark` et passe un
> `token` invalide : par exemple `token:'inexistant'`,

### 4. 🚀 Rechercher des films

👨‍✈️ Hugo le chef de projet nous demande de créer une fonctionnalité de recherche
de films / séries. Il souhaite ajouter un champs de recherche dans la
`NetflixAppBar`.

**Les étapes pour développer cette fonctionnalité :**

1. Créer un `hook` personnalisé (`src/utils/hooksMovies`) :

   `useSearchMovie(query)` qui va appeler l'api suivante :

   - `search/multi?query=${query}` avec `useQuery` et `clientApi`

2. Créer un composant `<NetflixSearch/>` (`src/components/NetflixSearch`) pour
   la route `/search/:query` :

   - Connecter la route au composant dans `AuthApp` (déjà fait)

   ```jsx
   <Route path="/search/:query" element={<NetflixSearch logout={logout} />} />
   ```

   - Utiliser `useParams` pour récupérer `query`
   - Appeler `useSearchMovie(query)` pour faire la recherche :
   - Filtrer les films et séries et afficher deux `rows` : ligne film/ligne
     séries
   - url de test :
     [http://localhost:3000/search/walking](http://localhost:3000/search/walking)

3. Ajouter le champs de recherche dans la `<NetflixAppBar>`
   (`src/components/NetFlixAppbar`) :
   - Base toi sur l'exemple : 📑
     [https://mui.com/components/app-bar/#app-bar-with-search-field](https://mui.com/components/app-bar/#app-bar-with-search-field)
   - Lors d'un clique sur `'enter'` redirection vers la bonne route : exemple :
     [http://localhost:3000/search/walking](http://localhost:3000/search/walking)

### 5. 🚀 React Query DevTools

Dans une application il peut y avoir des centaines de requetes à analyser.
`React Query` propose un outils de développement que l'on peut utiliser lors des
phases de développement `process.env.NODE_ENV === 'development'`.

```jsx
import {ReactQueryDevtools} from 'react-query/devtools'

{
  process.env.NODE_ENV === 'development' && (
    <ReactQueryDevtools initialIsOpen={false} />
  )
}
```

Ajoute `ReactQueryDevtools` uniquement en `'development'` en composant enfant de
`<QueryClientProvider>`

**Fichiers :**

- `src/App.js`

### 6. 🚀 Suppression cache sur Logout

Dans notre application nous gardons les données en mémoire cache. Par exemple la
liste des films / series favoris. `(/bookmark`). Que se passe-t-il si on
utilisateur se déconnecte et qu'un nouvel utilisateur se connecte ? Les favoris
et autres données seront récupérer de la mémoire cache. C'est pourquoi il faut
supprimer les données en cache sur la déconnexion d'un utilisateur. Pour cela on
va utiliser

```jsx
queryClient.clear()
```

Dans cet exercice tu vas devoir appeler `queryCache.clear()` lors de l'appel à
`logout`

📑
[https://react-query.tanstack.com/reference/QueryClient#queryclientclear](https://react-query.tanstack.com/reference/QueryClient#queryclientclear)

**Fichiers :**

- `src/App.js`

## 🐜 Feedback
#
## Etape 11
#
# Context API

### 💡 Utilisation du Context API pour gérer les states dans l'application

## 📝 Tes notes

Detaille ce que tu as appris ici
`INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Nous gérons d'un coté, l'état (`state management`) de toutes les données du
serveur grâce à `react-query` . Mais ce n'est pas suffisant, nous devons aussi
gérer l'état de notre application, le user connecté et les diffèrent états des
interfaces. il existe de nombreux outils (state manager) pour faire cela. comme
`Redux`, `Mobx`, `zustand` etc ... mais depuis l'apparition de l'`API context`
et du hook `useContext()` cela nous permet de gérer les états nativement avec
React. Ces états sont ensuite accessibles dans toutes l'application sans passer
par des props (`props drills pattern`) Rappel sur l'utilisation de l'api
`context` et `useContext`

```jsx
const ThemeContext = React.createContext()

<ThemeContext.Provider value={theme}>
      <Toolbar />
</ThemeContext.Provider>

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      Je suis stylé par le contexte de thème !
    </button>
  );
}
```

📑 Le lien vers la doc de
[createContext](https://fr.reactjs.org/docs/context.html#reactcreatecontext) et
du
[hook useContext](https://fr.reactjs.org/docs/hooks-reference.html#usecontext)

## Exercice

A l'heure actuelle nous passons `logout` `login` `register` en props de
composants en composants. Par exemple :

- `logout` passe par : `AuthApp` → `NetflixApp` → `NetflixAppBar`
- `register` et `login` passe par : `UnauthApp`-> `LoginRegister` → `PopupLogin`

Dans cet exercice tu vas devoir créer un context `AuthContext` qui contiendra
`logout` `login` `register`, `authUser`. On pourra ensuite utiliser le
`AuthContext.Provider` dans `App`

```jsx
<AuthContext.Provider value={props}>
  <AuthApp />
</AuthContext.Provider>
//AuthApp et les enfant auront accès a AuthContext
//const {logout} = React.useContext(AuthContext)
```

**Fichiers :**

- `src/context/AuthContext.js`
- `src/App.js`
- `src/UnauthApp.js`
- `src/AuthApp.js`
- `src/components/NetflixAppBar.js`
- `src/components/LoginRegister.js`

## Bonus

### 1. 🚀 hook personnalisé useAuth

Au lieu d'avoir à utiliser `React.useContext(AuthContext)` et ensuite vérifier
si le context n'est pas `null` (ce qui peut arriver lorsque l'on utilise
useContext en dohers du provider), on peut créé un hook `useAuth.` Créé ce
`hook` et utilise le partout ou l'on a besoin de faire appel au context pour
récupérer `logout` `login` `register`, `authUser`, `authError`

**Fichiers :**

- `src/context/AuthContext.js`
- `src/components/NetflixAppBar.js`
- `src/components/LoginRegister.js`
- `src/AuthApp.js`

### 2. 🚀 AuthProvider

A l'heure actuelle nous avons toutes la logique d'authentification de
l'utilisateur avec les states : `logout` `login` `register`, `authUser`,
`authError,` directement dans `App` ,cela est aussi mélangé avec le code du
thème de `Material-ui` et la configuration de `React-Query`. Il est préférable
de séparer le code lié au l'authentification dans un composant `AuthProvider`
pour une meilleure maintenabilité du code. Dans cet exercice créé un composant
`AuthProvider` qui reprend toute la logique d'authentification de App et qui
retourne sur le `status === 'done'`

```jsx
const value = {authUser, login, register, logout, authError}
return <AuthContext.Provider value={value} {...props} />
```

Utilisation dans `App` :

```jsx
<QueryClientProvider client={queryClient}>
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <AppConsumer />
    </AuthProvider>
  </ThemeProvider>
</QueryClientProvider>
// <AppConsumer /> est le composant qui retourne
// <AuthApp/> / <UnauthApp/> en function de authUser
// accessible avec : const {authUser} = useAuth()
```

> On pourra également retourner le composant Mui Backdrop qui affiche le
> chargement sur la `status === 'fetching' || status === 'idle'`

```jsx
if (status === 'fetching' || status === 'idle') {
  return (
    <Backdrop open={true}>
      <CircularProgress color="primary" />
    </Backdrop>
  )
}
```

> Attention : utilise `useQueryClient` pour accéder a `queryClient` depuis le
> `AuthContext`

**Fichiers :**

- `src/context/AuthContext.js`
- `src/AuthApp.js`

### 3. 🚀 AppProviders

Notre `App` commence à contenir de nombreux providers :

```jsx
<QueryClientProvider client={queryClient}>
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <AppConsumer />
    </AuthProvider>
  </ThemeProvider>
</QueryClientProvider>
```

Nous voudrions avoir un composant `AppProviders` qui regroupe tous les providers
et que nous pourrions utiliser de la manière suivante

```jsx
<AppProviders>
  <AppConsumer />
</AppProviders>
```

Dans cet exercice créé un composant `AppProviders` qui contiendra tous les
providers avec un `children`. Il contera également toute la configuration du
`theme mui` et `reactQuery` de tel sorte que l'on puisse utiliser comme ceci :

```jsx
function App() {
  return (
    <AppProviders>
      <AppConsumer />
    </AppProviders>
  )
}
```

**Fichiers :**

- `src/context/index.js`
- `src/App.js`

### 4. 🚀 useClientNetflixHook

A plusieurs endroit dans le code nous devons avoir accès au `token` pout faire
des appel API vers le backend.

```jsx
const {data} = useQuery(`bookmark`, async () => {
  const token = await authNetflix.getToken()
  return clientNetFlix(`bookmark`, {token})
})
```

Plus l'application va grandir et plus nous aurons d'appel vers le backend en
utilisant le `token` . Pour simplifier créé un hook `useClientNetflix` qui fera
appel à `useAuth()` pour récupérer le `token` et retournera un fonction
`clientNetFlix` avec le token préconfiguré de tel manière que l'on puisse
utiliser directement (sans gérer de token)

```jsx
const clientNetFlix = useClientNetflix()
const {data} = useQuery(`bookmark`, () => clientNetFlix(`bookmark`))
```

**Fichiers :**

- `src/utils/hooksMovies.js`
- `src/context/AuthContext.js`

## 🐜 Feedback
#
## Etape 12
#
# Context API (historique des visites)

### 💡 Context API & state management (historique des visites)

## 📝 Tes notes

Detaille ce que tu as appris ici
`INSTRUCTIONS.md`ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Comme pour le `AuthContext`, nous avons besoin de gérer des états dans notre
application sans avoir à les passer en props de composant en composant (props
drill). Nous n'allons pas utiliser le `AuthContext` qui sert à la logique
d'authentification. A la place nous allons créer des contextes spécifiques pour
gérer les états (state management) de nos différentes fonctionnalités de notre
application. On pourrait imaginer a terme avoir quelque chose du genre :

```html
- AuthContext - Paymentcontext - SearchContext - etc etc ...
```

## Exercice

👨‍✈️ Hugo le chef de projet nous demande un fonctionnalité d'historique des
derniers films et séries visités. Cela permettra à l'utilisateur de retrouver
facilement un film qui a déjà été vu ou visité (c'est à dire où l'utilisateur
est allé voir la fiche de détails du film/série). Cette liste des N derniers
films/séries sera affichée dans un menu déroulant en haut à droite lors d'un
clique sur un icone. Dans cet exercice tu vas devoir créer un composant
`MenuHistory` en utilisant 2 composants de Mui `:`

- Menu Customisé : 📑
  [https://mui.com/components/menus/#customization](https://mui.com/components/menus/#customization)
- Card material : 📑
  [https://mui.com/components/cards/#ui-controls](https://mui.com/components/cards/#ui-controls)

Ce composant affichera la liste de l'historique et lors d'un clique sur un item
l'utilisateur sera redirigé vers la page du film

> Les données (films / séries) ne seront pas passés en `props` mais récupérer
> via l'`API Context`.

Un icone placé dans la `NetflixAppBar` permettra de déplier ce composant

```jsx
<MenuHistory style={{cursor: 'pointer', marginRight: '10px'}} />
```

Tu vas donc devoir créer un contexte `HistoryMoviesContext` qui permettra
d'ajouter des films / séries et d'accéder à ses films / séries. Ce contexte sera
utilisé :

- Dans `MenuHistory` pour lire les dernier films / series visités
- Dans `NetFlixById` pour ajouter le film/série en cours de visite.

**Fichiers :**

- `src/context/HistoryMoviesContext.js`
- `src/context/index.js`
- `src/components/MenuHistory.js`
- `src/components/NetFlixById.js`

## Bonus

### 1. 🚀 Logique réutilisable useReducer

Plutôt que d'avoir à gérer les `arrays` d'historique de `series` et `movies`
dans les différents endroit de l'application il est préférable de centraliser
cette logique dans le Provider. A la place d'avoir à gérer cela dans
`NetflixById`

```jsx
const {series, movies, setMovies, setSeries} = useHistoryMovie()
//...
if (type === TYPE_TV) {
  setSeries([
    headerMovie,
    ...series.slice(
      0,
      series.length >= MAX_ELEMENTS ? MAX_ELEMENTS - 1 : series.length,
    ),
  ])
} else {
  setMovies([
    headerMovie,
    ...movies.slice(
      0,
      movies.length >= MAX_ELEMENTS ? MAX_ELEMENTS - 1 : movies.length,
    ),
  ])
}
```

Tu vas devoir créer cette logique dans `HistoryMovieContext.` Pour cela
n'utilise plus les states `series` et `movies` mais utilise le hook `useReducer`
avec un `reducer` de telle manière que l'on puisse utiliser `useHistoryMovie` de
la manière suivante.

```jsx
const {addSerie, addMovie} = useHistoryMovie()
//...
addMovie(movie)
addSerie(serie)
```

> pense à : `useCallback` pour retourner `addMovie` `addSerie` de
> `HistoryMovieProvider`

**Fichiers :**

- `src/components/NetflixbyId.js`
- `src/context/HistoryMovieContext.js`

### 2. 🚀 hook useAddToHistory

Plutôt que d’avoir à gérer un `side effect`, le type etc ... comme cela

```jsx
React.useEffect(() => {
  if (headerMovie) {
    if (type === TYPE_TV) {
      addSerie(headerMovie)
    } else {
      addMovie(headerMovie)
    }
  }
}, [headerMovie])
```

Créé un hook `useAddToHistory` qui permettra une utilisation simplifier de la
forme

```jsx
useAddToHistory(movie, type)
```

**Fichiers :**

- `src/components/NetflixbyId.js`
- `src/context/HistoryMovieContext.js`

### 3. 🚀 Suppression historique sur déconnexion

Que se passe-t-il si un utilisateur se déconnecte et qu'un nouveau se reconnecte
? Le nouvel utilisateur verra l'historique de l'ancien, ce qui est
problématique. Un `AuthContext` existe déjà avec le fonction `Logout.`

Dans cet exercice tu vas devoir modifier le `reducer` de `HistoryMovieProvider`
pour qu'il prennent en compte le type `clear`. et vide les arrays `movies` et
`series`

```jsx
dispatch({
  type: 'clear',
})
```

`HistoryMovieProvider` devra retourner également une fonction `clearHistory`.
Ensuite créé un hook `useClearHistory` qui retourne `clearHistory` (utilise
`useHistoryMovie` pour y avoir accès). Dans `AuthContext` utilise
`useClearHistory` pour vider l'historique lors du `logout`.

**Fichiers :**

- `src/context/HistoryMovieContext.js`
- `src/context/AuthContext.js`

## 🐜 Feedback
#
# Etape ..
#
# Tests unitaires

### 💡 Tests unitaires

## 📝 Tes notes

Detaille ce que tu as appris ici `INSTRUCTIONS.md`
ou sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Dans une application il y a de nombreuses fonctions que nous réutilisons dans
différentes parties de notre application (_helpers, formatage de date,
manipulation d'objet ou d'array etc ..._). Un changement, un bug dans une de ces
fonctions peut impacter de nombreuses parties de l'application. Il est très
utilise de tester ce genre de fonctions avec des tests unitaires car cela nous
permettra de détecter rapidement une régression.

Pour faire nos tests unitaires dans notre application nous utiliserons
[JEST](https://jestjs.io/fr/) qui est inclus et configuré dans le
[CRA](https://create-react-app.dev/docs/running-tests/) et
[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Exercice

Dans cet exercice tu vas devoir tester des fonctions du helpers ce qui ne
devrait pas trop être compliqué. Ensuite tu vas devoir tester les fonctions
d'appel d'api (`clientAuth`, `clientNetflix`)

Pour cela nous allons utiliser [msw](https://mswjs.io/) qui nous permet de
mocker les appels HTTP. comme nous l'utilisons déjà dans ce projet, la
configuration et presque identique pour les tests.

```jsx
server.use(
  rest.get(`${AUTH_URL}/${endpoint}`, async (req, res, ctx) => {
    return res(ctx.json(resultRequest))
  }),
)
const result = await axios.get(endpoint)
expect(result.data).toEqual(resultRequest)
```

**Fichiers :**

- `src/utils/__tests__/Helper.js`
- `src/utils/__tests__/clientApi.js`

## Bonus

### 1. 🚀 Tester les erreurs d'authentification

Cette fois ci nous allons tester `clientNetflix` qui retourne un message
d'erreur en cas de problème d'authentification. `"Authentification incorrecte"`.
pour tester ce cas nous allons `mocker` et retourner un code 401

```jsx
server.use(
  rest.post(`${AUTH_URL}/${endpoint}`, async (req, res, ctx) => {
    return res(ctx.status(401), ctx.json(resultRequest))
  }),
)
```

Il est possible que lors de nos tests les fonctions fassent appel à des modules
externe. dans notre cas nous faisons appel à `authNetflix.logout()` qui fait une
suppression dans le `localstorage` (ce qui est supporté par `jsdom`). mais dans
certain cas cela pourrait ne pas être supporté. Il faudrait alors mocker ces
modules avec `jest.mock`.

Dans cet exercice tu vas devoir tester le code 401 et vérifier que nous avons
bien les message d'erreur `"Authentification incorrecte"` et utilise `jest.mock`
pour t'assurer que `authNetflix.logout()` a bien été appeler une fois .

Teste aussi une erreur 400 et vérifie que l'on récupère le message retouné par
le serveur

**Fichiers :**

- `src/utils/__tests__/clientApi.js`

### 2. 🚀 setupTests.js

`Jest` nous permet de centraliser de la configuration et de l'initialisation
dans un fichier `setupTests`. Regarde dans le fichier `jest.config` il y a la
configuration `setupFilesAfterEnv: fs.existsSync('src/setupTests.js')`

Ce qui veut dire que l'on peut mettre de la configuration commue aux tests ici

Dans cet exercice déplace dans `setupTests` les fonctions `beforeAll afterAll`
`afterEach` qui initialise le server `msw`

## 🐜 Feedback
