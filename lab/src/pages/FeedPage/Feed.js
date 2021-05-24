import React from "react";
import useRequestData from "../../hooks/useRequestData";
import useUnProtectedPage from "../../hooks/useUnProtectedPage";
import {BASE_URL} from '../../constants/urls';
import PostCard from "../../components/PostCard/PostCard";
import {Button} from '@material-ui/core';
import {useHistory} from "react-router-dom";
import { goToPost } from "../../routes/coordinator";
import { InputsContainer } from "../LoginPage/styled";
import TextField from '@material-ui/core/TextField';
import useForm from '../../hooks/useForm';
import axios from 'axios'

const Feed = () => {
    useUnProtectedPage()
    const history = useHistory()
    const [form , onChange , clear] = useForm({text : "", title : ""})
    
    const createPost = () => {
        axios.post(`${BASE_URL}/posts`, form, {
            headres: {
                Authorization : localStorage.getItem("token")
            }
        })
        .then((res) => console.log(res))
        .catch((err)=> console.log(err))
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost()
    }

    const getPosts = useRequestData([], `${BASE_URL}/posts`)
    console.log(getPosts)


    const cardsPost = getPosts.map((post)=> {
        return(
            <PostCard
                uservoteDirection={post.uservoteDirection}
                key={post.id}
                username={post.username}
                text={post.text}
                createAt={post.createAt}
                />
        )
    })

    return(
        <form onSubmit={onSubmitForm}>
            <InputsContainer>
                <TextField 
                name={"post"}
                value={form.text}
                onChange={onChange}
                label={"Escreva seu post"}
                variant={"outlined"}
                fullWidth
                margin={"dense"}
                required
                type={"text"}
                />
                
                <Button 
               onClick={() => goToPost(history)}
               type={"submit"}
               variant={"contained"} 
               color={"primary"}
               margin={"dense"}>
                  Postar
             </Button>
             {cardsPost}
            </InputsContainer>
            </form>
            
         
    )
}


export default Feed
