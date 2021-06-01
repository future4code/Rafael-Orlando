import React from "react";
import { useHistory } from "react-router";
import useUnProtectedPage from "../../hooks/useUnProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import {BASE_URL} from '../../constants/urls';
import PostCard from "../../components/PostCard/PostCard";
import { InputsContainer } from "../LoginPage/styled";
import TextField from '@material-ui/core/TextField';
import {cardsPost} from '../../pages/FeedPage/Feed'




const Post = () => {
    useUnProtectedPage()
    const history = useHistory()

    const getPostsFeed = useRequestData([], `${BASE_URL}/posts/:postId`)
    console.log(getPostsFeed)

    
    const cardsPost = getPostsFeed.map((post)=> {
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
        <div>
            {cardsPost}
        </div>
       
    
    
    )
}


export default Post
