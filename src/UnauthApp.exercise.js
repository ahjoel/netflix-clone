import * as React from 'react'
// 🐶 importe le composant 'LoginRegister' qui est dans ./components/LoginRegister
import LoginRegister from './components/LoginRegister'

// 🐶 passe les props 'login' et 'register' qui sont utilise à <Login>
function UnauthApp({login, register, error}) {
  // 👨‍✈️ hugo souhaite une image de fond avec des films Netflix pour page <LoginRegister />
  // utilise celle ci :

  const imageUrl = '/images/posters.jpg'
  return (
    // 🐶 applique ce style pour avoir l'image de fond
    // backgroundImage: `url('${imageUrl}')`,
    // backgroundSize: 'cover',
    <div
      style={{
        color: 'white',
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: 'cover',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        overflow: 'auto',
      }}
    >
      <img
        src="/images/netflix-logo.png"
        style={{margin: '30px'}}
        height={50}
        alt=""
      />

      <div>
        <LoginRegister
          open={true}
          login={login}
          register={register}
          error={error}
        />
      </div>
    </div>
  )
}

export {UnauthApp}
