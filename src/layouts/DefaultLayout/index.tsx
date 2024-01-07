import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/index'
import { Footer } from '../../components/Footer'
import { LayoutContainer } from './styles'

export function DefaultLayout (): JSX.Element {
  return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <LayoutContainer>
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <Header />
             {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <Outlet />
             {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <Footer />
        </LayoutContainer>
  )
}
