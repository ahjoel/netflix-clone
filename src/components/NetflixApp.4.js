import React from 'react'
import {NetflixAppBar} from './NetflixAppBar'
import {NetflixRow} from './NetflixRow'
import {NetFlixFooter} from './NetFlixFooter'
import {getRandomType, getRandomId} from '../utils/helper'
import {imagePathOriginal, TYPE_MOVIE} from '../config'

import {clientApi} from '../utils/clientApi'
import './Netflix.css'

// 🐶 passe en prop 'movie' qui contiendra les informations d'un film
const NetflixHeader = ({movie, type = TYPE_MOVIE}) => {
  const title = type === TYPE_MOVIE ? movie?.title : movie?.name
  const imageUrl = `${imagePathOriginal}${movie?.backdrop_path}`
  const banner = {
    backgroundImage: `url('${imageUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    color: 'white',
    objectFit: 'contain',
    height: '448px',
  }
  if (!movie) {
    // 🐶 si 'movie' n'est pas défini, retourne un fragment vide 🤖 <></>
    return <></>
  }

  // 🐶 si 'movie' est défini, retourne le header
  return (
    // ⛏️ supprime le prop 'className' et utilise le prop 'style' avec l'objet 'banner'
    <header style={banner}>
      <div className="banner__contents">
        {/* Utilise la propriété 'title' de 'movie' pour remplacer le titre 'La casa de papel' - Note : utilise 'l'optionnal chaining' pour accéder à title 
        
        Note : Utilise 'Nullish coalescing' pour afficher '...' s'il n'y a pas de données */}
        <h1 className="banner__title">{title ?? '...'}</h1>
        <div className="banner__buttons">
          <button className="banner__button banner__buttonplay">Lecture</button>
          <button className="banner__button banner__buttonInfo">
            Ajouter à ma liste
          </button>
        </div>
        <h1 className="synopsis">{movie?.overview ?? '...'}</h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  )
}

// 🐶 Tu vas devoir gérer le fetch de données avec axios dans 'NetflixApp'
const NetflixApp = () => {
  const [headerMovie, setHeaderMovie] = React.useState()
  const [type] = React.useState(getRandomType())
  const defaultMovieId = getRandomId(type)

  React.useEffect(() => {
    clientApi(`${type}/${defaultMovieId}`)
      .then(response => setHeaderMovie(response) /*console.log(response)  */)
      .catch(error => console.error(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <NetflixAppBar />
      <NetflixHeader movie={headerMovie?.data} type={type} />
      <NetflixRow wideImage={false} title="Films Netflix" />
      <NetflixRow wideImage={true} title="Série Netflix" />
      <NetFlixFooter />
    </div>
  )
}
export {NetflixApp}
