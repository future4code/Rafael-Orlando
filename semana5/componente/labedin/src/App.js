import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://ca.slack-edge.com/TLAVDH7C2-U01KS7CAYJG-47a624cec9e2-512"
          nome="Rafael Orlando" 
          descricao="Meu nome é Rafael Orlando, trabalhei em uma instituição financeira no periodo de 12 anos, e atualmente sou estudante de programação da Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.aprovaconcursos.com.br/noticias/wp-content/uploads/2020/12/certificacao-cea.jpeg" 
          nome="Anbima CEA" 
          descricao="Especialista em investimento." 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQGXX-pQE9ZghQ/company-logo_200_200/0/1588617268603?e=2159024400&v=beta&t=a88brKeePgoXCa0PpjouqjPLfp25RQso7CCWfbvQ9qg" 
          nome="Labenu" 
          descricao="Cursando Programação" 
        />
      </div>


      <div className="page-section-container">
         <h2>Endereço</h2>
         <CardPequeno
           imagem="https://images.tcdn.com.br/img/editor/up/724806/2.jpg"
           nome="Endereço Residencial"
           descricao="Rua Fulano de tal 007, Jardim Ciclano - SP São Paulo"
           email="beltrano.beltrano@nuncanemvi.com.br"
       />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>

  );

}


export default App;
