import React, {Component} from 'react';
//Component = React.Component

//Below is same as extends React.Component
class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {term: 'Starting Value'};
    }


    render() {
        //We always manipulate state with setState this.state is only used in constructor.
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={ event => this.setState({term: event.target.value }) } 
                />
            </div>
        );
    }
}

export default SearchBar;