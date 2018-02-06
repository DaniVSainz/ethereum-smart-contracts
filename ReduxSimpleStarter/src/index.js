import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search-bar'

const API_KEY = "AIzaSyCjOr5G7ASBX7kMi5jFlEYaGBow3KoGklo";

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
    console.log(data);
})

//Create a now component that generates html
class App extends Component  {
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        )
    }
}

//Take this components generated html and put it in the dom
ReactDOM.render(<App />, document.querySelector('.container'));