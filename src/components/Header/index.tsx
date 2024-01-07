import { HeaderContainer } from './styles'
import logoImg from '../../assets/logo.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header (): JSX.Element {
  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <HeaderContainer>
       {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <img src={logoImg} alt="" />
       {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <nav>
         {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <NavLink title='Timer' to="/"><Timer size={24} /></NavLink>
         {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <NavLink title='Histórico' to="/history"><Scroll size={24} /></NavLink>
      </nav>
    </HeaderContainer>
  )
}
