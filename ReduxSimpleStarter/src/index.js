import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = "AIzaSyCjOr5G7ASBX7kMi5jFlEYaGBow3KoGklo";



//Create a now component that generates html
class App extends Component  {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('Neural Networks')
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos:videos,
                selectedVideo: videos[0]
            });
        })
    }


    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term), 300})

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} 
                />
            </div>
        )
    }
}

//Take this components generated html and put it in the dom
ReactDOM.render(<App />, document.querySelector('.container'));