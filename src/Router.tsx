/* eslint-disable eol-last */
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router (): JSX.Element {
  return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <Routes>
           {/* eslint-disable-next-line react/react-in-jsx-scope */}
          <Route path='/' element={<DefaultLayout />}>
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <Route path='/' element={<Home />} />
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <Route path='/history' element={<History />} />
            </Route>
        </Routes>
  )
}