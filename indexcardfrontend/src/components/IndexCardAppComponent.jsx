import { useState,useEffect  } from "react";
import axios from "axios";

function IndexCardAppComponent(){

    const[startingIndex, setStartingIndex] = useState(0)
    const[showAnswer, setShowAnswer] = useState(false)

    function switchShowAnswer(){
        if(showAnswer){
            setShowAnswer(false)
        }else{
            setShowAnswer(true)
        }
    }

    function increaseStartingIndex(){
        if(startingIndex < (indexCardList.length-1) && showAnswer)
        setStartingIndex(prevStartingIndex => prevStartingIndex + 1);

        switchShowAnswer()
    }

    function decreaseStartingIndex(){
        if(startingIndex > 0){
            setStartingIndex(prevStartingIndex => prevStartingIndex - 1);
        }
    }

    function backToStart(){
        if(startingIndex > 0){
            setStartingIndex(0);
        }        
        setShowAnswer(false)
    }

    const [indexCardList, setIndexCardList] = useState([]);


    useEffect(() => {
        retrieveAllIndexCards();
    }, []);
    
    function successfullResponse(data, setIndexCardList){
        setIndexCardList(data);
    
        console.log(indexCardList);
    }

    function retrieveAllIndexCards(){
        
        axios.get('http://localhost:8080/indexcard/getAllIndexCard')
            .then( (response) => successfullResponse(response.data, setIndexCardList) )
        
    }

    function getLanguageTwo(){
        if(showAnswer){
            return (
                <div>
                    <p>{indexCardList.length > 0 && indexCardList[startingIndex].answer}</p>
                </div>
            )
        }
    }

    return(
        <div>
            <h1>Karteikarten</h1>
            <br/>
            <br/>
            <br/>
            <button onClick={backToStart}>zum Anfang</button><button onClick={decreaseStartingIndex}>zurück</button><button onClick={increaseStartingIndex}>weiter</button>
            <p>{indexCardList.length > 0 && indexCardList[startingIndex].question}</p>
                <p>---------------</p>
                {getLanguageTwo()}
                
            
            
            
        </div>
    )
}

export default IndexCardAppComponent;