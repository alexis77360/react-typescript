import React from 'react';
import { MessageInt } from '../model';

//? On va typer les props de Message
type Props = {
    mess: MessageInt;
    messData: MessageInt[];
    setMessData: React.Dispatch<React.SetStateAction<MessageInt[]>>;
}

const Message = ({mess, messData, setMessData} : Props) => {

    const dateFormater = (date:number) => {
        return new Date(date).toLocaleString("fr-FR", {day: "numeric", month: "long", year: "numeric"});
    }

    //? Pour supprimer un message on va filtrer le tableau des messages en excluant le message à supprimer
    const handleDelete = () => {
        setMessData(messData.filter((el) => el.id !== mess.id));
    }

    return (
        <div className="message-container">
            <p> {mess.message} </p>
            <h5> {dateFormater(mess.date)} </h5>
            <span id="delete" onClick={() => handleDelete()}>&#10008; </span>
        </div>   
    );
};

export default Message;