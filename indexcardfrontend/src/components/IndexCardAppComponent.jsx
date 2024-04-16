import { useState,useEffect  } from "react";
import axios from "axios";

function IndexCardAppComponent(){

    const[startingIndex, setStartingIndex] = useState(0)
    const[showAnswer, setShowAnswer] = useState(false)
    const[selectedCategory, setSelectedCategory] = useState(0)
    const[categoryList, setCategoryList] = useState([])
    const[indexCardList, setIndexCardList] = useState([]);
    const[filteredIndexCardList, setFilteredIndexCardList] = useState([]);

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

    


    useEffect(() => {
        retrieveAllIndexCards();
    }, []);

    useEffect(() => {
        retrieveAllCategories();
    }, []);
    
    function successfullResponseIndexCards(data, setIndexCardList){
        setIndexCardList(data);
    
        console.log(indexCardList);
    }

    function successfullResponseCategories(data, setCategoryList){
        setCategoryList(data);
    
        console.log(categoryList);
    }

    function retrieveAllIndexCards(){
        axios.get('http://localhost:8080/indexcard/getAllIndexCard')
            .then( (response) => successfullResponseIndexCards(response.data, setIndexCardList) )
    }

    function retrieveAllCategories(){
        axios.get('http://localhost:8080/category/getAllCategories')
            .then( (response) => successfullResponseCategories(response.data, setCategoryList) )
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

    const filterIndexCardList = (event) => {

        setFilteredIndexCardList(indexCardList.filter(item => item.category.id ===  parseInt(event.target.value) ))
        console.log(filterIndexCardList)
    }

    return(
        <div>
            <h1>Karteikarten</h1>
            <br/>
            <button onClick={retrieveAllCategories}>retrieveCategories</button>
            <br/>
            <select onChange={filterIndexCardList} value={selectedCategory}>
            {categoryList.map(item => (
                <option key={item.id} value={item.id}>{item.description}</option>
            ))}
            </select>
            <br/>
            <button onClick={backToStart}>zum Anfang</button><button onClick={decreaseStartingIndex}>zurück</button><button onClick={increaseStartingIndex}>weiter</button>
            <p>{indexCardList.length > 0 && indexCardList[startingIndex].question}</p>
                <p>---------------</p>
                {getLanguageTwo()}
        </div>
    )
}

export default IndexCardAppComponent;