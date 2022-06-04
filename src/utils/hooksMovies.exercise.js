// 🐶 rien à faire pour l'exercice, mais sera utile pour l'exercice bonus 2 et 7

// 🐶 importe les 3 lignes suivantes elles seonrt utiles
import {useQuery, useMutation, useQueryClient} from 'react-query'
import {clientApi, clientNetFlix} from './clientApi'
import * as authNetflix from './authNetflixProvider'

const useMovie = (type, id) => {
  const {data} = useQuery(`${type}/${id}`, () => clientApi(`${type}/${id}`))
  return data
}

const useMovieFilter = (type, filter, param) => {
  // 🐶 on réutilise le code de NetflixRow
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
  const {data} = useQuery(`${endpoint}`, () => clientApi(`${endpoint}`))

  return data?.data?.results ?? []
}

const useBookmark = () => {
  const {data} = useQuery(`bookmark`, async () => {
    const token = await authNetflix.getToken()
    return clientNetFlix(`bookmark`, {token})
  })
  return data
}

const useAddBookmark = ({
  onSuccess = () => {},
  onError = () => {},
  onMutate = () => {},
  onSettled = () => {},
}) => {
  // 🐶 créé 'queryClient'
  const queryClient = useQueryClient()
  const addMutation = useMutation(
    async ({type, id}) => {
      const token = await authNetflix.getToken()
      return clientNetFlix(`bookmark/${type}`, {
        token,
        data: {id},
        method: 'POST',
      })
    },
    {
      onSuccess: data => {
        queryClient.invalidateQueries(`bookmark`)
        onSuccess(data)
      },
      onError: error => {
        onError(error)
      },
      onMutate: data => {
        onMutate(data)
      },
      onSettled: data => {
        onSettled(data)
      },
    },
  )
  return addMutation
}

const useDeleteBookmark = ({
  onSuccess = () => {},
  onError = () => {},
  onMutate = () => {},
  onSettled = () => {},
}) => {
  // 🐶 créé 'queryClient'
  const queryClient = useQueryClient()
  const deleteMutation = useMutation(
    async ({type, id}) => {
      const token = await authNetflix.getToken()
      return clientNetFlix(`bookmark/${type}`, {
        token,
        data: {id},
        method: 'DELETE',
      })
    },
    {
      onSuccess: data => {
        queryClient.invalidateQueries(`bookmark`)
        onSuccess(data)
      },
      onError: error => {
        onError(error)
      },
      onMutate: data => {
        onMutate(data)
      },
      onSettled: data => {
        onSettled(data)
      },
    },
  )
  return deleteMutation
}

const useSearchMovie = query => {
  const {data} = useQuery(`search/multi?query=${query}`, () =>
    clientApi(`search/multi?query=${query}`),
  )
  // Null caolishing
  return data?.data?.results ?? []
}

export {
  useMovie,
  useMovieFilter,
  useBookmark,
  useAddBookmark,
  useDeleteBookmark,
  useSearchMovie,
}
