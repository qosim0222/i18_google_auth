// import React from 'react'
// import { GoogleLogin } from '@react-oauth/google';


// const Login = () => {
//     return (
//         <div>
//             <h2>Login</h2>
//             <GoogleLogin
//                 onSuccess={(credentialResponse:any) => {
//                     localStorage.setItem("credential", credentialResponse.credential)
//                     console.log(credentialResponse);
//                 }}
//                 onError={() => {
//                     console.log('Login Failed');
//                 }}
//             />
//         </div>
//     )
// }

// export default React.memo(Login)


import React from 'react'
import { GoogleLogin } from '@react-oauth/google'

interface Props {
  onClose: () => void
}

const Login: React.FC<Props> = ({ onClose }) => {
  return (
    <div>
      <h2>Login</h2>
      <GoogleLogin
        onSuccess={(credentialResponse: any) => {
          localStorage.setItem("credential", credentialResponse.credential)
          onClose()
        }}
        onError={() => {
          console.log('Login Failed')
          onClose()
        }}
      />
    </div>
  )
}

export default React.memo(Login)

