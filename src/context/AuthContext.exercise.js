/* eslint-disable no-unused-vars */
import * as React from 'react'
import {clientAuth} from '../utils/clientApi'
import * as authNetflix from '../utils/authNetflixProvider'
import {useFetchData} from '../utils/hooks'
import {useQueryClient} from 'react-query'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

// 🐶 créé un context appelé 'AuthContext' et exporte le
// 📑 https://fr.reactjs.org/docs/context.html#reactcreatecontext
const AuthContext = React.createContext()

const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth s utilise avec <AuthContext.Provider />')
  }
  return context
}

async function getUserByToken() {
  let user = null
  const token = await authNetflix.getToken()
  if (token) {
    const data = await clientAuth('me', {token})
    user = data.data.user
  }
  return user
}

const AuthProvider = props => {
  const queryClient = useQueryClient()
  const {data: authUser, execute, status, setData} = useFetchData()
  React.useEffect(() => {
    execute(getUserByToken())
  }, [execute])

  const [authError, setAuthError] = React.useState()
  const login = data =>
    authNetflix
      .login(data)
      .then(user => setData(user))
      .catch(err => setAuthError(err))
  const register = data =>
    authNetflix
      .register(data)
      .then(user => setData(user))
      .catch(err => setAuthError(err))
  const logout = () => {
    authNetflix.logout()
    queryClient.clear()
    setData(null)
  }
  if (status === 'fetching' || status === 'idle') {
    return (
      <Backdrop open={true}>
        <CircularProgress color="primary" />
      </Backdrop>
    )
  }

  if (status === 'done') {
    const value = {authUser, authError, login, register, logout}
    return <AuthContext.Provider value={value} {...props} />
  }

  throw new Error('Status invalide')
}

export {AuthContext, useAuth, AuthProvider}
