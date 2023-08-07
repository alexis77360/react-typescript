import React, { useRef } from 'react';
import { useState } from 'react';
import { MessageInt } from './model';
import Message from './components/Message';

const App = () => {
  //? Grace a useRef on peut récupérer la valeur d'un input et HTMLInputElement est le type de l'input
  const inputMessage = useRef<HTMLInputElement>(null);
  const [messData, setMessData] = useState<MessageInt[]>([]);



  const handleSubmit = (e:any) => {
    e.preventDefault();

    if(inputMessage){
      const mess:MessageInt = {
        id : Math.round(Math.random() * Date.now()),
        message : inputMessage?.current?.value,
        date : Date.now()
      }
      //! On récupère les données précédentes et on ajoute le nouveau message
      setMessData((prevDate) => [...prevDate, mess]);
    }
  


    //? Logique d'envoie de données
    //? Reset de l'input avec TypeScript
  (document.getElementById('inputMessage') as HTMLInputElement).value = '';
  };



  return (
    <div>
      <h1>React TypeScript</h1>
      <h2> Poster un message</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Votre message" id="inputMessage" ref={inputMessage} />
        <input type="submit" value="Envoyer" />
      </form>
      <h2>Messages</h2>
      <div> {messData?.map((mess) => (
        <Message mess={mess} key={mess.id} messData={messData} setMessData={setMessData} /> 
      ))}
             
        </div>
      
    </div>
  );
};

export default App;