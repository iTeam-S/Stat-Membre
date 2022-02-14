import { Route,Redirect } from 'react-router-dom'
import { AuthService } from '../../utils/service/authservice'

export default function AdminRoute({ children, ...rest }) {
    const user=AuthService.getCurrentUser();
     return (
       <Route {...rest} render={() => {
         return user && user.role ==='admin'
           ? children
           :<Redirect to='/auth/login' />
       }} />
     )
}