import React from "react";
import { goToFeed, goToRegister } from "../../routes/coordinator";
import {Button} from '@material-ui/core';
import {useHistory} from "react-router-dom";
import {InputsContainer} from "./styled";
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import axios from 'axios';
import {BASE_URL} from '../../constants/urls';

const Form = () => {
    const [form , onChange , clear] = useForm({email : "", password : ""})
    
    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form , clear , history )
    }

    const history = useHistory()

    const login = () => {
        axios
        .post(`${BASE_URL}/login`, form , history )
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
                        label={"E-mail"}
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
                    <Button 
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


export default Form
