/* eslint-disable no-unused-vars */
// 🐶 rien à faire pour l'exercice, mais sera utile pour l'exercice bonus-4
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import {Link, useNavigate} from 'react-router-dom'
// 🐶 importe les composant MUI
import SearchIcon from '@mui/icons-material/Search'
import {styled, alpha} from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
// 🐶 importe le hook 'useNavigate', il permettra de rediriger
// vers la page resultat de recherche
//import { useNavigate } from "react-router-dom"

// 🐶 Décommente les composant styled 'Search' 'SearchIconWrapper', 'StyledInputBase'
// ci-dessous, il sont pris des exemple de composant de recherche de Mui
//📑 https://mui.com/components/app-bar/#main-content

const Search = styled('div')(({theme}) => ({
  marginRight: '10px',
  marginLeft: 'auto',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    /*marginLeft: theme.spacing(1),*/
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const NetflixAppBar = () => {
  const navigate = useNavigate()
  const [query, setQuery] = React.useState()

  const [appBarStyle, setAppBarStyle] = React.useState({
    background: 'transparent',
    boxShadow: 'none',
  })
  React.useEffect(() => {
    const onScroll = e => {
      if (e.target.documentElement.scrollTop >= 100) {
        setAppBarStyle({
          background: '#111',
          transition: 'background .5s ease-out',
          boxShadow: 'none',
        })
      } else {
        setAppBarStyle({
          background: 'transparent',
          transition: 'background .5s ease-out',
          boxShadow: 'none',
        })
      }
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const margin10 = {margin: 10}

  // 🐶 'handleKeyPress' sera declanché lors de l'appuis sur une touche
  // du composant <StyledInputBase>
  // on souhaite detecter la touche 'enter'
  const handleKeyPress = e => {
    if (e.keyCode === 13) {
      navigate(`/search/${query}`)
    }
    // 🐶 conditionne la redirection vers :
    // navigate(`/search/${query}`)
    // - si la touche préssée est la touche 'enter'
    // base toi sur le code
    // `e.keyCode === 13`
  }
  return (
    <AppBar style={appBarStyle}>
      <Toolbar>
        <img className="nav__logo" src="/images/netflix-logo.png" alt="" />
        <Link to="/">
          <Typography style={margin10} variant="h6">
            Acceuil
          </Typography>
        </Link>
        <Link to="/series">
          <Typography style={margin10} variant="h6">
            Serie
          </Typography>
        </Link>
        <Link to="/movies">
          <Typography style={margin10} variant="h6">
            Films
          </Typography>
        </Link>
        <Link to="/news">
          <Typography style={margin10} variant="h6">
            Nouveautés les plus regardées
          </Typography>
        </Link>
        <Link to="/list">
          <Typography style={margin10} variant="h6">
            Ma liste
          </Typography>
        </Link>
        {/* 🐶 Utilise le composant de recherche */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            onKeyDown={handleKeyPress}
            onChange={e => setQuery(e.target.value)}
            value={query}
            placeholder="Rechercher"
            inputProps={{'aria-label': 'search'}}
          />
        </Search>
        <img
          style={{marginLeft: 'auto', cursor: 'pointer'}}
          className="nav__avatar"
          src="/images/netflix-avatar.png"
          alt=""
          onClick={logout}
        />
      </Toolbar>
    </AppBar>
  )
}

export {NetflixAppBar}
