import React from 'react'
import {NetflixAppBar} from './NetflixAppBar'
import {NetflixRow} from './NetflixRow'
import {NetFlixFooter} from './NetFlixFooter'
import axios from 'axios'
import './Netflix.css'

const NetflixHeader = ({movie, type = 'movie'}) => {
  const title = type === 'movie' ? movie?.title : movie?.name
  const imageUrl = `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`
  const banner = {
    backgroundImage: `url('${imageUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    color: 'white',
    objectFit: 'contain',
    height: '448px',
  }
  if (!movie){
    return <></>
  }
  return (
    <header style={banner}>
      <div className="banner__contents">
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

const NetflixApp = () => {
  const [headerMovie, setHeaderMovie] = React.useState()
  const defaultMovieId = 71446//399566
  const apiKey = '4fc7b001e8a107fe1fddc6b41ed0f4af'
  const lang = 'fr-fr'
  const type = 'tv' //'movie'
  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${defaultMovieId}?api_key=${apiKey}&language=${lang}`
      )
      .then(response => setHeaderMovie(response))
      .catch(error => console.error(error))
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
