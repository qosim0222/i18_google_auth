import React, { use } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'
import { jwtDecode } from 'jwt-decode'

const Header = () => {
    const {t} = useTranslation()
    const credential = localStorage.getItem("credential")
    const user: any = credential ? jwtDecode(credential):null
  return (
    <div>
      {
        user ?
        <div>
          <img src={user.picture} alt="" />
          <span>{user.name}</span>
        </div>
        :<div>Login</div>
      }
        <h2>{t("greeting")}</h2>
        {/* <button onClick={()=> i18n.changeLanguage("uz")}>uz</button>
        <button onClick={()=> i18n.changeLanguage("en")}>en</button>
        <button onClick={()=> i18n.changeLanguage("ru")}>ru</button> */}
        <input type="text" placeholder={t("search")} />

        <select
         onChange={(e)=>i18n.changeLanguage(e.target.value)} value={i18n.language} name="" id="">
            <option value="uz">uz</option>
            <option value="en">en</option>
            <option value="ru">ru</option>
        </select>
    </div>
  )
}   

export default  React.memo(Header)