import React, {Component} from 'react';
//Component = React.Component

//Below is same as extends React.Component
class SearchBar extends Component {
    render() {
        return <input onChange={ event => console.log(event.target.value) } />;
    }
}

export default SearchBar;