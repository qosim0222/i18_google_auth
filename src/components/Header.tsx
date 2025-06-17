// import React, { use } from 'react'
// import { useTranslation } from 'react-i18next'
// import i18n from '../i18n'
// import { jwtDecode } from 'jwt-decode'

// const Header = () => {
//     const {t} = useTranslation()
//     const credential = localStorage.getItem("credential")
//     const   user: any = credential ? jwtDecode(credential):null
//   return (
//     <div>
//       {/* {
//         user ?
//         <div>
//           <img src={user.picture} alt="" />
//           <span>{user.name}</span>
//         </div>
//         :<div>Login</div>
//       } */}
//         <h2>{t("greeting")}</h2>
//         {/* <button onClick={()=> i18n.changeLanguage("uz")}>uz</button>
//         <button onClick={()=> i18n.changeLanguage("en")}>en</button>
//         <button onClick={()=> i18n.changeLanguage("ru")}>ru</button> */}
//         <input type="text" placeholder={t("search")} />

//         <select
//          onChange={(e)=>i18n.changeLanguage(e.target.value)} value={i18n.language} name="" id="">
//             <option value="uz">uz</option>
//             <option value="en">en</option>
//             <option value="ru">ru</option>
//         </select>
//     </div>
//   )
// }   

// export default  React.memo(Header)


import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'
import { jwtDecode } from 'jwt-decode'
import Login from './Login'

const Header = () => {
  const { t } = useTranslation()
  const [credential, setCredential] = useState<string | null>(localStorage.getItem("credential"))
  const [showLogin, setShowLogin] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("credential")
    setCredential(stored)
  }, [])

  const user: any = credential ? jwtDecode(credential) : null

  const handleLogout = () => {
    localStorage.removeItem("credential")
    setCredential(null)
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>{t("greeting")}</h2>

        <select onChange={(e) => i18n.changeLanguage(e.target.value)} value={i18n.language}>
          <option value="uz">uz</option>
          <option value="en">en</option>
          <option value="ru">ru</option>
        </select>

        <input type="text" placeholder={t("search")} />

        {
          user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img src={user.picture} alt="User" style={{ width: 32, borderRadius: "50%" }} />
              <span>{user.name}</span>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <button onClick={() => setShowLogin(true)}>{t("login")}</button>
          )
        }
      </div>

      {showLogin && (
        <Login onClose={() => {
          setCredential(localStorage.getItem("credential"))
          setShowLogin(false)
        }} />
      )}
    </div>
  )
}

export default React.memo(Header)
