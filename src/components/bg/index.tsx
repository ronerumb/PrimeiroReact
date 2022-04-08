import './style.css';
import React,{useState} from 'react';

export const Bg = () =>{

  const [nome,setNome] = useState('');
  const [email,setEmail] = useState('');

  const salvanome = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setNome(event.target.value);
  };

  const salvaEmail = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setEmail(event.target.value);
  }



  const clicou = () =>{
    return alert('Olá '+nome+'Voce acaba de cadastrar seu email '+email);
   
  }

    return (
        <>    
          <div className="Bg">
          <div className="Rgba">
          <div className="Formulario">
           <h1>Ainda não é cadastrado?<br /> Faça seu cadastro agora mesmo</h1>
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" onChange={salvanome} /><br/>
              <label htmlFor="email">Email</label>
              <input type="email" id="nome" onChange={salvaEmail}/>

              <button type="submit" onClick={clicou}>Cadastrar</button>
           
          </div>
            

      </div>
      </div>
      </>

     

    );
}