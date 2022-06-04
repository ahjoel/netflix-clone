import React from 'react'
// 🐶 Dans cet exercice tu vas devoir créer une Barre de Menu avec MUI (MaterialUi).
// commnce par importer les 3 composants MUI suivants :
//
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import './Netflix.css'

const NetflixApp = () => {
  const [appBarStyle, setAppBarStyle] = React.useState({
    background: 'transparent',
    boxShadow: 'none',
  })

  React.useEffect(() => {
    const onScroll = e => {
      //console.log(e.target.documentElement.scrollTop)
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
  return (
    <div>
      <AppBar style={appBarStyle}>
        <Toolbar>
          <img className="nav__logo" src="images/netflix-logo.png" alt="" />
          <a href="/">
            <Typography variant="h6" style={margin10}>
              Acceuil
            </Typography>
          </a>
          <a href="/series">
            <Typography variant="h6" style={margin10}>
              Series
            </Typography>
          </a>
          <a href="/movies">
            <Typography variant="h6" style={margin10}>
              Films
            </Typography>
          </a>
          <a href="/news">
            <Typography variant="h6" style={margin10}>
              Nouveautés
            </Typography>
          </a>
          <a href="/list">
            <Typography variant="h6" style={margin10}>
              Ma liste
            </Typography>
          </a>
          <img
            src="images/netflix-avatar.png"
            alt=""
            height="20"
            style={{marginLeft: 'auto'}}
          ></img>
        </Toolbar>
      </AppBar>

      <header className="banner">
        <div className="banner__contents">
          <h1 className="banner__title">La casa de papel</h1>

          <div className="banner__buttons">
            <button className="banner__button banner__buttonplay">
              Lecture
            </button>

            <button className="banner__button banner__buttonInfo">
              Ajouter à ma liste
            </button>
          </div>

          <h1 className="synopsis">
            Le Professeur recrute une jeune braqueuse et sept autres criminels
            en vue d'un cambriolage grandiose ciblant la Maison royale de la
            Monnaie d'Espagne.
          </h1>
        </div>
      </header>

      <div className="row">
        <h2>Films Netflix</h2>

        <div className="row__posters">
          <img
            className="row__poster row__posterLarge"
            src="images/sample.jpg"
            alt=""
          />
          <img
            className="row__poster row__posterLarge"
            src="images/sample1.jpg"
            alt=""
          />
          <img
            className="row__poster row__posterLarge"
            src="images/sample.jpg"
            alt=""
          />
          <img
            className="row__poster row__posterLarge"
            src="images/sample1.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="row">
        <h2>Série Netflix</h2>

        <div className="row__posters">
          <img
            className="row__poster row__posterLarge"
            src="images/sample-poster.jpg"
            alt=""
          />
          <img
            className="row__poster row__posterLarge"
            src="images/sample-poster1.jpg"
            alt=""
          />
          <img
            className="row__poster row__posterLarge"
            src="images/sample-poster.jpg"
            alt=""
          />
          <img
            className="row__poster row__posterLarge"
            src="images/sample-poster1.jpg"
            alt=""
          />
        </div>
      </div>

      {/* 🐶 applique la classe 'footer' */}
      <footer className="footer">2021 - Netflix Clone</footer>
    </div>
  )
}
export {NetflixApp}