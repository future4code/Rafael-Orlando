import { TextField } from "@material-ui/core";
import React from "react";
import {ScreenContainer , InputsContainer, LogoImage } from "./styled";
import {Button} from '@material-ui/core';
import useForm from '../../hooks/useForm';
import {useHistory} from "react-router-dom";
import { goToFeed, goToLogin, goToRegister } from "../../routes/coordinator";
import axios from 'axios'
import {BASE_URL} from '../../constants/urls';

const RegisterForm = () => {
    const [form, onChange, clear] = useForm({email: "", passoword : "", username : ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form , clear , history)
    }

    const history = useHistory()

    const signUp = () => {
        axios
        .post(`${BASE_URL}/signup`, form , history )
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeed(history)
        })
        .catch((err) => alert("Erro no Login"))
    }

    return(
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                <TextField 
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"Email"}
                    variant={"outlined"}
                    fullWidth
                    margin={"dense"}
                    required
                    type={"email"}
                />
                <TextField 
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Password"}
                    variant={"outlined"}
                    fullWidth
                    margin={"dense"}
                    required
                    type={"password"}
                />
                <TextField 
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    label={"Name"}
                    variant={"outlined"}
                    fullWidth
                    margin={"dense"}
                    required
                    type={"name"}
                />
                <Button 
                    onClick={() => goToFeed(history)}
                    type={"submit"}
                    fullWidth 
                    variant={"contained"} 
                    color={"primary"}
                    margin={"dense"}>
                    To enter
                </Button>
                </form>
            </InputsContainer>
    )
}


export default RegisterForm



