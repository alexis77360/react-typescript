import { MessageInt } from "../model";

//? Pour vérifier que le props est bien un objet de type MessageInt
type Props = {
    mess: MessageInt;
    messData: MessageInt[];
    setMessData: React.Dispatch<React.SetStateAction<MessageInt[]>>
  };

const Message = ({mess,messData,setMessData}:Props) => {

    const dateFormater = (date:number) => {
        const newDate = new Date(date);
        return newDate.toLocaleDateString("fr-FR", {day: "numeric", month: "long", year: "numeric",  });
    }


    const handleDelete = () => {
        //? On récupère les données précédentes et on supprime le message
        setMessData(messData.filter((el) => el.id !== mess.id));
    }

    return (
        <div className="message-container">
            <p>{mess.message}</p>
            <h5>{dateFormater(mess.date)}</h5>
            <span id="delete" onClick={() => handleDelete()}> &#10008;</span>
        </div>
    );
};

export default Message;