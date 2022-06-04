import * as React from 'react'
import {TYPE_MOVIE, imagePath400} from '../config'
import { useMovieFilter } from '../utils/hooksMovies.exercise'
import {RowSkeleton} from './skeletons/RowSkeleton.exercise'
import {Link} from 'react-router-dom'

const NetflixRow = ({
  title = '',
  wideImage = true,
  type = TYPE_MOVIE,
  param,
  filter = 'populaire',
  watermark = false,
}) => {
  
  const endpointLatest = `${type}/upcoming`
  const endpointPopular = `${type}/popular`
  const endpointTopRated = `${type}/top_rated`
  const endpointGenre = `discover/${type}?with_genres=${param}`
  const endpointTrending = `trending/${type}/day`

  let endpoint
  switch (filter) {
    case 'populaire':
      endpoint = endpointPopular
      break
    case 'latest':
      endpoint = endpointLatest
      break
    case 'toprated':
      endpoint = endpointTopRated
      break
    case 'genre':
      endpoint = endpointGenre
      break
    case 'trending':
      endpoint = endpointTrending
      break
    default:
      throw new Error('Type non supporté')
  }

  //const {data, error, status} = useQuery(`${endpoint}`, () => clientApi(`${endpoint}`),)
  
  const data = useMovieFilter(type, filter, param)

  const buildImagePath = data => {
    const image = wideImage ? data?.backdrop_path : data?.poster_path
    return `${imagePath400}${image}`
  }

  const watermarkClass = watermark ? 'watermarked' : ''

  // Props drilling car les props seront transmis depuis le composant parent
  if (!data) {
    return <RowSkeleton title={title} wideImage={wideImage} nbElement={10} />
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {data.map(movie => {
          return (
            <Link key={movie.id} to={`/${type}/${movie.id}`}>
              <div
                className={`row__poster row__posterLarge ${watermarkClass}`}
              >
                <img src={buildImagePath(movie)} alt={movie.name} />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export {NetflixRow}