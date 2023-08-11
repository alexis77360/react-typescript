import React from 'react';
import { useRef } from 'react';
import { MessageInt } from './model';
import Message from './components/Message';

const App = () => {

  //! Le HTMLInputElement est un type générique qui permet de typer les éléments HTML
  const inputMessage = useRef<HTMLInputElement>(null);
  const [messData, setMessData] = React.useState<MessageInt[]>([]);

  const handleSubmit = (e:any) => {
    e.preventDefault();

    if(inputMessage){
      const mess:MessageInt = {
        id: Math.round(Math.random() * Date.now()),
        message: inputMessage?.current?.value,
        date: Date.now()
    }
    //! Pour ajouter un message à la liste des messages
    setMessData((prevMessData) => [...prevMessData, mess]);
  }

    //! Pour repasser l'input en vide
    (document.getElementById("inputMessage") as HTMLInputElement).value = "";
  };

  return (
    <div>
      <h2> Poster un message</h2>  
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Entrer un message" id="inputMessage" ref={inputMessage}/>
        <input type="submit" value="Envoyer" />
      </form>
      <h2> Messages</h2>
      <div> {messData?.map((mess) => (
      <Message mess={mess} messData={messData} setMessData={setMessData} key={mess.id} />
      ))} </div>
    </div>
  );
};

export default App;