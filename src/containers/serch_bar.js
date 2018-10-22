import React, { Component } from 'react';

export default class SearchBar extends Component{

  constructor(props){
    super(props);
  
    this.state = { term : '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term : event.target.value
    })
    console.log(event.target.value);
  }

  render() {
    return (
      <form className="input-group">
        <input 
          placeholder="검색하는 도시의 5일간의 기상정보를 가져옵니다."
          className="form-control"
          value={this.state.term}
          onChange={ this.onInputChange } 
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">전송</button>
        </span>
      </form>
    )
  }
}