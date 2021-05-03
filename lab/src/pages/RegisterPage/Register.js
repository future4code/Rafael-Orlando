import { TextField } from "@material-ui/core";
import React from "react";
import {ScreenContainer , InputsContainer } from "./styled";
import {Button} from '@material-ui/core';
import useForm from '../../hooks/useForm';
import {useHistory} from "react-router-dom";
import { goToFeed } from "../../routes/coordinator";
import RegisterForm from "./RegisterForm";
import useProtectedPage from "../../hooks/useProtectedPage";

const Register = () => {
    return(
        <ScreenContainer>
            <h1>Insert the information</h1>
            <RegisterForm />
        </ScreenContainer>
    )
}


export default Register

