import React, {useEffect, useState} from 'react'
import { useLocation, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import AppWrapper from '../../components/AppWrapper/AppWrapper'
import Input from  '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {withAuth} from '../../components/Authentication/Authentication'
import styles from './Login.module.css'
import Logo from '../../assets/images/logo.png';


const Login = ({authenticate} ) => {
  
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const { register, handleSubmit, errors } = useForm();
    const [username, setUsername] = useState('');
    const [authData, setAuthData] = useState({
        isLoggingIn: true,
        redirectToReferrer: false,
        hasAuthenticationFailed: false
      });

  
      const onSubmit = (data) => {
        
        authenticate(data.username, data.password)
        .then(result=>{
     
          setAuthData({
            isLoggingIn: false,
            redirectToReferrer: true,
            hasAuthenticationFailed: false
          });

        }).catch( (error)=> {
    
          setAuthData({
            isLoggingIn: false,
            redirectToReferrer: false,
            hasAuthenticationFailed: true
          });
        }  )    

     
      
      }; 

    if(authData.redirectToReferrer) return  <Redirect to={from} />;

    if(authData.isLoggingIn || authData.hasAuthenticationFailed) {
        return (
          <AppWrapper size={'lg'}>
            <div className={styles.container}>
              <div className={styles.box}><img src={Logo}  alt=""/></div>
              <h1>Log in</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                {authData.hasAuthenticationFailed && <h1>authenticate failed</h1>}
                <Input
                  id="username"
                  value={username}
                  label={'User name'}
                  name={"username"}
                  ref={register({ required: true })}
                  onChange={(e) => setUsername(e.target.value)}
                  error={errors['username']}
                />

                <Button type="submit" theme={'primaryRed'} className={styles.loginButton} size={'large'} >
                  <div className={styles.parent}>
                     <div className={styles.left}>Log in</div>
                     <div className={styles.right}>&gt;</div>


                  </div>
                </Button>
              </form>
            </div>
          </AppWrapper>
        )
    }
    return <div>Loading...</div>
}

export default withAuth(Login)
