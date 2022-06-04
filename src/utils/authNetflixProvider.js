/* 
 -- Ne pas modifier --
 Exemple d'utilitaire permettant de se connecter au backend Netflix
*/
import {AUTH_URL, localStorageTokenKey} from '../config'

async function clientApiNetflix(endpoint, data) {
  const config = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'},
  }

  return fetch(`${AUTH_URL}/${endpoint}`, config).then(async response => {
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      console.log('clientApiNetflix ko', data)
      return Promise.reject(data)
    }
  })
}

async function getToken() {
  return window.localStorage.getItem(localStorageTokenKey)
}

function storeToken({user}) {
  window.localStorage.setItem(localStorageTokenKey, user.token)
  return user
}

async function login({username, password}) {
  return clientApiNetflix('login', {username, password}).then(storeToken)
}

async function register({username, password}) {
  return clientApiNetflix('register', {username, password}).then(storeToken)
}

async function logout() {
  window.localStorage.removeItem(localStorageTokenKey)
}

export {getToken, login, register, logout, localStorageTokenKey}
