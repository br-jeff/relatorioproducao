import React,{useContext} from 'react'
import AuthRoutes from './auth.routes'
import AuthContext from '../contexts/auth'
import AppRoutes from './app.routes'


const Routes: React.FC = () => {
    const { logado } = useContext(AuthContext)
    return logado ? <AppRoutes/> : <AuthRoutes/>
}

export default Routes