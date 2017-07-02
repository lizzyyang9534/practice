import React from 'react';

const PersonItem = React.createClass({
  render: function(){
    return (<tr>
      <td>{this.props.name}</td>
      <td>{this.props.title}</td>
      <td><img src={this.props.img}/></td>
    </tr>)
  }
});

export default PersonItem;
