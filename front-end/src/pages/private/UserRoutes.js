import { Route,Redirect } from 'react-router-dom'
import { AuthService } from '../../utils/service/authservice'

export default function UserRoute({ children, ...rest }) {
  const user=AuthService.getCurrentUser();

     return (
       <Route {...rest} render={() => {
         if(user){
          return(
          children
          )
        }else{
         return  <Redirect to='/auth/login' />
        }
        }} 
        />
         
     )
}