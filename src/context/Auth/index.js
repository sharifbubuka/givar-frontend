import { createContext } from 'react'

export const UserContext = createContext(null)

// const AuthProvider = (props) => {
//   const [state, setState] = react.useState({ isAuth: false })

//   const login = () => {
//     setTimeout(() => setState({ isAuth: true }), 1000)
//   }

//   const logout = () => {
//     setState({ isAuth: false })
//   }

//   return (
//     <userContext.Provider
//       value={{
//         isAuth: state,
//         login: login,
//         logout: logout
//       }}
//     >
//       { props.children }
//     </userContext.Provider>
//   )
// }

// const AuthConsumer = userContext.Consumer

// export { AuthProvider, AuthConsumer }