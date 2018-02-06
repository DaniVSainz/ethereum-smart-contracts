import React from 'react';
import ReactDOM from 'react-dom'

const API_KEY = "AIzaSyCjOr5G7ASBX7kMi5jFlEYaGBow3KoGklo";

//Create a now component that generates html
const App =  () => {
    return <div>Hi</div>
}

//Take this components generated html and put it in the dom
ReactDOM.render(<App />, document.querySelector('.container'));