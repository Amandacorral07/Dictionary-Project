import React, {useState} from "react";
import "./Dictionary.css";
import Results from "./Results.js"
import Photos from "./Photos";
import axios from "axios";

export default function Dictionary (props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded]= useState(false);
    let [photos, setPhotos]= useState(null);

function handleResponse(response){
    setResults(response.data[0]);
}

function handlePexelsResponse(response){
    setPhotos(response.data.photos);
}

function search(){
   //documentation: https://dictionaryapi.dev/
   let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
   axios.get(apiUrl).then(handleResponse);

   let pexelsApiKey =  `563492ad6f91700001000001cb4c68f8ab7d4251beca166740ddd883`;
   let pexelsApiUrl =`https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
   let headers ={"Authorization" : `Bearer ${pexelsApiKey}`};

axios.get(pexelsApiUrl, {headers: headers} ).then(handlePexelsResponse);
}


    function handleSubmit (event){
       event.preventDefault();
       search();
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
    function load(){
        setLoaded(true);
        search();
    }

if (loaded){
    return (
    <div className="Dictionary">
        <section>
        <h1>
            What word are you looking for?
        </h1>
<form onSubmit={handleSubmit}>
    <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
</form>
<div className="hint">
    Suggested words: book, volleyball, beach...
</div>
</section>
<Results results={results}/>
<Photos photos={photos}/>
        </div>
    );
    } else {
    load();
    return "Loading..."
}}