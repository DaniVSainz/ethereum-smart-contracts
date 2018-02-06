import React, {Component} from 'react';
//Component = React.Component

//Below is same as extends React.Component
class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {term: 'Starting Value'};
    }


    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term), 300})
        //We always manipulate state with setState this.state is only used in constructor.
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={ event => this.onInputChange(event.target.value) } 
                />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;