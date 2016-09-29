import React from 'react';
import $ from 'jquery';

export default React.createClass({
  getInitialState() {
    return {
      showP: false,
      nothing: true,
    }
  },
  toggleP() {
    this.setState({showP: !this.state.showP});
  },
  showValue() {
    // console.log(this.refs.butts.value);
  },
  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/dashboard',
      success: (response) => {
        console.log(response);
      }
    })
  },
  render() {
    let p;
    if (this.state.showP) {
      p = (<input type="text" ref="butts" onClick={this.showValue}/>);
    }
    return (
      <div className="first-div" onClick={this.toggleP}>
        {p}
      </div>
    );
  }
});
