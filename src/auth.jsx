import { React , createContext , useState, useContext} from 'react'

const AuthContext = createContext(null) 

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null)
    const [token , setToken] = useState(null)

    const login = (user)=>{
        setUser(user)
    }
    const logout = ()=>{
        setUser(null)
    }

  return (
        <AuthContext.Provider value={{user , login , logout,token,setToken}}>
            {children}
        </AuthContext.Provider>
  )
}
export {AuthProvider,AuthContext}