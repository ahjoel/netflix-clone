import * as React from 'react'
// 🐶 'mocks' permet de simuler le backend netflix avec MSW,
import './mocks'
import {AuthApp} from './App.start'
import {AppProviders} from './context/index.exercise'

function App(){
  return (
    <AppProviders>
      <AppConsumer />
    </AppProviders>  
  )
}

const AppConsumer = () => {
  // const {authUser} = useAuth()
  // return authUser ? <AuthApp /> : <UnauthApp />
  return <AuthApp />
}

export {App}
