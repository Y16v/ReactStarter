import React , { Component } from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = { term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange={ event => this.onVideoSerch(event.target.value) }
          />
      </div>
    );
  }
  onVideoSerch(term){
    this.setState({term});
    this.props.onVideoSearchTerm(term);
  }
}

export default SearchBar;
