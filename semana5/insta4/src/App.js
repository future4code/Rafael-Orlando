import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'joana'}
          fotoUsuario={'https://osegredo.com.br/wp-content/uploads/2017/09/O-que-as-pessoas-felizes-t%C3%AAm-em-comum-site-830x450.jpg'}
          fotoPost={'https://awebic.com/wp-content/uploads/2014/05/awebic-pessoas-felizes-8.jpg'}
        />
        <Post
          nomeUsuario={'mariana'}
          fotoUsuario={'https://www.familia.com.br/wp-content/uploads/2019/12/Pessoas-felizes-n%C3%A3o-t%C3%AAm-tempo-para-criticar-a-vida-dos-outros.jpg'}
          fotoPost={'https://jornaldoempreendedor.com.br/wp-content/uploads/2013/05/feliz.jpg'}
        />
      </div>
    );
  }
}


export default App;
