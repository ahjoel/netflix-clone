import * as React from 'react'
import {render as renderReactTestingLib} from '@testing-library/react'
// import {HistoryMovieProvider} from '../context/HistoryMoviesContext'
import {QueryClient, QueryClientProvider} from 'react-query'
// import {AppProviders} from 'context'

// const wrapperHistoryContext = ({children}) => {
//   return <HistoryMovieProvider>{children}</HistoryMovieProvider>
// }
// const queryClient = new QueryClient()
// const wrapperReactQuery = ({children}) => {
//   return (
//     <QueryClientProvider client={queryClient}>{children} </QueryClientProvider>
//   )
// }

function render(ui, {...options} = {}) {
  return renderReactTestingLib(ui, {...options})
}

export * from '@testing-library/react'
export * from './data'
export {render}
