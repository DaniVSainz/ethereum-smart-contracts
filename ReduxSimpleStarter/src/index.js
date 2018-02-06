import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search-bar'
import VideoList from './components/video-list'

const API_KEY = "AIzaSyCjOr5G7ASBX7kMi5jFlEYaGBow3KoGklo";



//Create a now component that generates html
class App extends Component  {
    constructor(props){
        super(props);

        this.state = {videos: []};

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
        })
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

//Take this components generated html and put it in the dom
ReactDOM.render(<App />, document.querySelector('.container'));