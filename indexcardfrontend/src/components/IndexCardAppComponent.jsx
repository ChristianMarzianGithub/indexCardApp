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
        if(startingIndex < (filteredIndexCardList.length-1) && showAnswer)
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
    
    function successfullResponseIndexCards(data, setIndexCardList,setFilteredIndexCardList){
        setIndexCardList(data)
        setFilteredIndexCardList(data)
    }

    function successfullResponseCategories(data, setCategoryList){
        setCategoryList(data)
    }

    function retrieveAllIndexCards(){
        axios.get('http://localhost:8080/indexcard/getAllIndexCard')
            .then( (response) => successfullResponseIndexCards(response.data, setIndexCardList,setFilteredIndexCardList) )
    }

    function retrieveAllCategories(){
        axios.get('http://localhost:8080/category/getAllCategories')
            .then( (response) => successfullResponseCategories(response.data, setCategoryList) )
    }


    function getLanguageTwo(){
        if(showAnswer){
            return (
                <div>
                    <p>{filteredIndexCardList.length > 0 && filteredIndexCardList[startingIndex].answer}</p>
                </div>
            )
        }
    }

    const filterIndexCardList = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        setFilteredIndexCardList(indexCardList.filter(item => item.category.id == event.target.value))        
    }

    return(
        <div>
            <h1>Karteikarten</h1>
            <br/>
            <br/>
            <select onChange={filterIndexCardList} value={selectedCategory}>
            {categoryList.map(item => (
                <option key={item.id} value={item.id}>{item.description}</option>
            ))}
            </select>
            <br/>
            <button onClick={backToStart}>zum Anfang</button><button onClick={decreaseStartingIndex}>zurück</button><button onClick={increaseStartingIndex}>weiter</button>
            <p>{filteredIndexCardList.length > 0 && filteredIndexCardList[startingIndex].question}</p>
                <p>---------------</p>
                {getLanguageTwo()}
        </div>
    )
}

export default IndexCardAppComponent;