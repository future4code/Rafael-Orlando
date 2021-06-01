import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { PostCardContainer, PostCardContent } from './styled'

const PostCard = (props) => {

  return (
    <PostCardContainer onClick={props.onClick}>
      {props.username}
      <CardActionArea>
        {props.text}
        <CardMedia
          component={'text'}
          alt={props.title}
          height={'0px'}
          text={props.text}
          title={props.title}
        />
        <PostCardContent>
          <Typography align={'center'}>
            {props.username.toUpperCase()}
          </Typography>
        </PostCardContent>
      </CardActionArea>
    </PostCardContainer>
  )
}

export default PostCard