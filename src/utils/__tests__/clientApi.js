// 🐶 importe les fonctions et constates que tu vas avoir besoins de tester
import {clientAuth} from '../clientApi'
// 🐶 importe {server, rest} depuis mocks, il contiennent la config MSW pour mocker les appels HTTPS

import {server, rest} from '../../mocks/server'
// import {server, rest } from 'msw'
import {AUTH_URL} from '../../config'
// import { setupServer } from 'msw/node'

// const server = setupServer(
//   rest.get('/book/:bookId', (req, res, ctx) => {
//     return res(ctx.json({mockResult: 'TEST'}))
//   }),
// )


test.todo('Back-end à implémenter plus tard')
// 🐶 appelle 'server.listen()' avant tous les tests
// 🐶 appelle 'server.close()' après tous les tests
// 🐶 appelle 'server.resetHandlers()' après chaque test
// 📝 https://jestjs.io/fr/docs/setup-teardown

// 🐶 pour ce test créé une fonction asynchrone pour executer le test : async () => {}
// test('faire une requette HTTP GET vers un endpoint quelconque', async () => {
//   const endpoint = 'fake-endpoint'
//   const resultRequest = {mockResult: 'TEST'}

//   // 🐶 créé une constante pour pointer vers un fake endpoint 'fake-endpoint'
//   // le resultat attendu sera  : 'TEST'
//   // 🐶 crée un fake result
//   // 🤖 const resultRequest = {mockResult: 'TEST'}

//   // 🐶 mock le endpoint `${AUTH_URL}/${endpoint}` grace à MSW
//   // 🤖
//   server.use(
//     rest.get(`${AUTH_URL}/${endpoint}`, async (req, res, ctx) => {
//       return res(ctx.json(resultRequest))
//     }),
//   )
//   const result = await clientAuth(endpoint)
//   expect(result.data).toEqual(resultRequest)
// })

// )
// 🐶 execute l'appel à `clientAuth(endpoint)` et récupère le resultat dans'result' (utilise await)
// 🐶 vérifie que que 'result.data' (les données retourné du serveur par axios)
// soit égale à 'resultRequest'

// test('Verifier les data passées en parameters', async () => {
//   const endpoint = 'fake-endpoint'
//   const resultRequest = {mockResult: 'TEST'}
//   const data = {fake: 'kafeData'}
//   let request

//   server.use(
//     rest.post(`${AUTH_URL}/${endpoint}`, async (req, res, ctx) => {
//       request = req
//       return res(ctx.json(resultRequest))
//     }),
//   )
//   await clientAuth(endpoint, {data})
//   expect(data).toEqual(request.body)
// })
// 🐶 a peu pret identique au précedent à la diference que nous voulons tester des data
// passées à clientAuth :
// 🤖 await clientAuth(endpoint, {data})

// 🐶 créé une constante data
// 🤖 const data = {fake: 'fakedata'}

// pour rapppel lorsque l'on passe des 'data' a clientAuth, on utilise la méthode POST,
// tu vas donc devoir mocker via la methode POST
// 🤖 rest.post(`${AUTH_URL}/${endpoint}`,

// affecte la requete 'req' de msw à une variable request pour pouvoir faire l'essertion
// 🤖 let request

// 🐶 fait l'appel a clientAuth
// 🐶 verifie que 'data' et 'request.body' soit egale

// test('Verifier le token  passé en parameters', async () => {
//   const endpoint = 'fake-endpoint'
//   const resultRequest = {mockResult: 'TEST'}
//   const token = {fake: 'faketoken'}
//   let request

//   server.use(
//     rest.get(`${AUTH_URL}/${endpoint}`, async (req, res, ctx) => {
//       request = req
//       return res(ctx.json(resultRequest))
//     }),
//   )
//   await clientAuth(endpoint, {token})
//   expect(request.headers.get('Authorization')).toBe(`Bearer ${token}`)
// })
// 🐶 la meme chose mais pour le Token, on veut tester l'appel
// 🤖 await clientAuth(endpoint, {token})

// 🐶 créé une constante token = 'faketoken'
// 🐶 mock a nouveau sur la methode GET
// 🤖 rest.get(`${AUTH_URL}/${endpoint}`,

// 🐶 verifie que le header 'Authorization' contienne `Bearer ${token}`
// pour acceder au header utilise : request.headers.get('Authorization')

// 🐶 on veut veirfie token et data
// la méthode est en POST dans ce cas
// await clientAuth(endpoint, {token})
// 🐶 verifie les data et le token

// Cas d'ajout des favoris(apres authentification, insertion des données)
// test('Verifier le couple token/data passé en parameters', async () => {
//   const endpoint = 'fake-endpoint'
//   const resultRequest = {mockResult: 'TEST'}
//   const data = {fake: 'kafeData'}
//   const token = 'faketoken'
//   let request

//   server.use(
//     rest.post(`${AUTH_URL}/${endpoint}`, async (req, res, ctx) => {
//       request = req
//       return res(ctx.json(resultRequest))
//     }),
//   )
//   await clientAuth(endpoint, {token, data})
//   expect(request.headers.get('Authorization')).toBe(`Bearer ${token}`)
//   expect(data).toEqual(request.body)
// })
