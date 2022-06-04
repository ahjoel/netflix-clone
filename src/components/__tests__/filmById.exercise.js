// import * as React from 'react'
// import {
//   render,
//   screen,
  
//   sampleMovie,
//   resultsMovies,
//   bookmark,
// } from '../../test/test-utils'
// import { waitForElementToBeRemoved } from '@testing-library/react'
// //import userEvent from '@testing-library/user-event'
// import {
//   AUTH_URL,
//   API_URL,
//   localStorageTokenKey,
//   imagePathOriginal,
// } from '../../config'
// import {App} from '../../App'


// test("rendu de l'app avec Token et NetFlixById", async () => {
//     const route = `/movie/645886`
//     window.history.pushState({}, 'Test page', route)
//     window.scrollTo = jest.fn()
//     const user = {id: '1', username: 'fakeUsername', token: 'FAKE_TOKEN'}
//     const filmname = sampleMovie.title
//     const overview = sampleMovie.overview
//     const imageUrl = `${imagePathOriginal}${sampleMovie.backdrop_path}`
//     window.localStorage.setItem(localStorageTokenKey, user.token)
//     render(<App></App>)
//     // await waitForElementToBeRemoved(() => screen.getByRole('alert'))
//     await waitForElementToBeRemoved(() =>
//         screen.getByRole('button', {name: "Plus d'infos"}),
//     )
//     expect(screen.getByRole('heading', {name: filmname})).toBeInTheDocument()
//     expect(screen.getByRole('heading', {name: overview})).toBeInTheDocument()
//     expect(screen.getByRole('banner', {name: 'banner'})).toHaveAttribute(
//       'style',
//       expect.stringContaining(imageUrl),
//     )
//   })

  test.todo("rendu de l'app et click")