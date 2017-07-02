import React from 'react';
import Title from './Title.js';
import PersonItem from './PersonItem.js';

const App = React.createClass({
  getInitialState: function(){
    return {
      data: this.props.data,
      title: '你報名WEIC了嗎?'
    };
  },
  _click: function(){
    let data = this.state.data;
    data.unshift({
      name: '123',
      title: '456'
    });
    this.setState({
      data: data
    });
  },
  render: function() {
    var personList = this.state.data.map(function(item){
      return <PersonItem key={item.name} name={item.name} title={item.title} img={item.img}/>
    })
    return (
    <div>
      <Title test={ this.state.title }></Title>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>姓名</th>
            <th>職稱</th>
            <th>照片</th>
          </tr>
        </thead>
        <tbody>
          {personList}
        </tbody>
      </table>
      <button onClick={ this._click }>click me</button>
    </div>);
  }
});

export default App;
