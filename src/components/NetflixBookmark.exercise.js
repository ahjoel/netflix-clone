import * as React from 'react'
// ๐ถ importe les ressouces suivantes :
import {NetflixAppBar} from './NetflixAppBar'
import {NetflixHeader} from './NetflixHeader'
import {useFetchData} from '../utils/hooks'
import {clientNetFlix, clientApi} from '../utils/clientApi'
// import * as authNetflix from '../utils/authNetflixProvider'
import {TYPE_MOVIE, TYPE_TV, imagePath400} from '../config'
import {Link} from 'react-router-dom'

// ๐ถ 'NetflixBookmark' devra faire deux appels API
// 1. Le premier vers `bookmark` pour recuperer les favorie
// 2. Un appel vers API TMDB pour afficher le header

const NetflixBookmark = () => {
  const {data, execute} = useFetchData()
  const {data: headerMovie, execute: executeHeader} = useFetchData()

  React.useEffect(() => {
    async function getTokenExecute() {
      // const token = await authNetflix.getToken()
      const token = 'netflix_auth_token'
      execute(clientNetFlix(`bookmark`, {token}))
    }
    getTokenExecute()
  }, [execute])

  React.useEffect(() => {
    const id = data?.bookmark?.movies?.[0] ?? 749274
    executeHeader(clientApi(`${TYPE_MOVIE}/${id}`))
  }, [data, executeHeader])

  // ๐ถ utilise le hook 'useFetchData' et ''useEffect'' pour appeler `bookmark`
  // ๐ค const {data, execute}

  // ๐ถ utilise a nouveau le hook 'useFetchData' et ''useEffect'' pour appeler `TMDV`
  // pour eviter la collision de nom nous crรฉons des alias pour 'data' et 'execute'
  // ๐ค const {data: headerMovie, execute: executeHeader}

  // ๐ถ appelle 'bookmark' en utilisant
  // React.useEffect(() => {
  //   // - execute et clientNetFlix
  //   // - await authNetflix.getToken()
  // }, [])

  // // ๐ถ appelle 'api TMDB' APRES le premier appelle ร  'bookmark' grace ร  la dependance 'data'
  // // et utilise :
  // React.useEffect(() => {
  //   // - executeHeader et clientApi
  //   // ๐ถ utilise le premier films de la liste pour l'appel API TMBD sinon la le film 749274
  //   // ๐ค const id = data?.movies?.[0] ?? 749274
  // }, [])

  return (
    <>
      <NetflixAppBar />
      <NetflixHeader movie={headerMovie?.data} type={TYPE_MOVIE} />
      {/* ๐ถ utilise <NetflixHeader type={TYPE_MOVIE} /> */}
      {/* passe 'headerMovie.data' en prop 'movie' et 'type' 'movie' de <NetflixHeader> */}
      <div className="row">
        <h2>Films favoris</h2>
        <div className="row__posters">
          {data?.bookmark?.movies.map(id => {
            return (
              <Card
                key={id}
                id={id}
                type={TYPE_MOVIE}
                watermark={true}
                wideImage={true}
              />
            )
          })}
          {/* ๐ถ boucle sur 'data?.bookmark.movies' grace a `.map` et
        retourne le composant <Card> avec les props 'id' 'type' 'watermark' 'wideImage'*/}
        </div>
      </div>

      <div className="row">
        <h2>Sรฉries favorites</h2>
        <div className="row__posters">
          {data?.bookmark?.series.map(id => {
            return (
              <Card
                key={id}
                id={id}
                type={TYPE_TV}
                watermark={true}
                wideImage={true}
              />
            )
          })}
          {/* ๐ถ boucle sur 'data?.bookmark.series' grace ร  `.map` et
        retourne le composant <Card> avec les props 'id' 'type' 'watermark' 'wideImage'*/}
        </div>
      </div>
    </>
  )
}
// ๐ถ Le composant 'Card' ร  le mรชme rendu que 'NetflixRow'
// La difference est qu'au lieu de passer le 'movie' en prop, on passera l'id en props
// Ensuite avec ce 'id' il faudra appeler l'api TMBD et afficher les donneรฉs.
const Card = ({id, type, watermark, wideImage}) => {
  // ๐ถ Crรฉรฉ un state 'image' qui sera mis ร  jour image' aprรจs l'appel d'API
  const {data, execute} = useFetchData()
  const [image, setImage] = React.useState('')

  React.useEffect(() => {
    execute(clientApi(`${type}/${id}`))
  }, [execute, id, type])

  React.useEffect(() => {
    const buildImagePath = data => {
      const image = wideImage ? data?.backdrop_path : data?.poster_path
      return image ? `${imagePath400}${image}` : null
    }
    setImage(buildImagePath(data?.data))
  }, [data, wideImage])

  // ๐ถ Fais l'appel API `${type}/${id}`

  // ๐ถ utilise useEffect avec la dependance sur 'data' pour mettre ร  jour l'image
  // rappel de la fonction 'buildImagePath'
  // ๐ค

  const watermarkClass = watermark ? 'watermarked' : ''
  return (
    <Link key={id} to={`/${type}/${id}`}>
      <div className={`row__poster row__posterLarge ${watermarkClass}`}>
        {/* ๐ถ renseigne correctement src et alt */}
        <img src={image} alt={data?.name} />
      </div>
    </Link>
  )
}
export {NetflixBookmark}
