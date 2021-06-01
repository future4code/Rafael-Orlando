import React from "react";
import { goToRegister } from "../../routes/coordinator";
import {Button} from '@material-ui/core';
import {useHistory} from "react-router-dom";
import {ScreenContainer , InputsContainer, LogoImage } from "./styled";
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import logo from '../../services/logo.png';
import Form from './LoginForm'
import useProtectedPage from "../../hooks/useProtectedPage";


const Login = () => {
    useProtectedPage()
    const history = useHistory()
    return(
        <ScreenContainer>
            <LogoImage src={logo}/>
            <Form />
            <Button 
                onClick={() => goToRegister(history)}
                type={"submit"}
                variant={"text"} 
                color={"primary"}
                margin={"dense"}>
                 Register
             </Button>
         </ScreenContainer>
            
    )
}


export default Login
