import React from 'react';

const Title = React.createClass({
  render: function() {
  console.log(this.props);
    return (<h1 className="text-primary">hello {this.props.test}</h1>);
  }
});

export default Title;
