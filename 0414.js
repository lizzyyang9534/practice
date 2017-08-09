//大小寫一定要符合
ReactDOM.render(<h1>Hello</h1>,
document.getElementById('root'));
//OR
//只能回傳一個DOM
//class命名規則為雙駝峰
var App = React.createClass({
  render: function(){
    return (<div>
    <h1>Hello</h1>
    <h2>已報名WEIC</h2>
    </div>
    )
  }
})
//tag名稱要等於class名稱
ReactDOM.render(<App/>,
document.getElementById('root'));


//建立第二層元件並傳入參數
var Title = React.createClass({
  render: function(){
    return (<h1>{this.props.text}</h1>);//this.props抓屬性
  }
});
var App = React.createClass({
  render: function(){
    return (<div>
    <Title text="WEIC"/>
    <h2>已報名WEIC</h2>
    </div>
    );
  }
})
ReactDOM.render(<App/>,
document.getElementById('root'));


//範例
<!DOCTYPE html>
<html>
<head>
<script src="https://code.jquery.com/jquery.min.js"></script>
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script src="https://fb.me/react-0.14.7.min.js"></script>
<script src="https://fb.me/react-dom-0.14.7.min.js"></script>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <div class="container" id="root"></div>
</body>
</html>
//js
var data = [{
  name: "洪名辰",
  title: "打雜的",
  img: "https://scontent-tpe1-1.xx.fbcdn.net/hprofile-xfp1/v/t1.0-1/p320x320/12938324_1304624899554192_2781397432586487103_n.jpg?oh=c9dc2c04844a4f1c0113d0880b75d62d&oe=5783A396"
}, {
  name: "Anna Su",
  title: "路過",
  img: "https://scontent-tpe1-1.xx.fbcdn.net/hprofile-xpa1/v/t1.0-1/p320x320/12936690_10204634969314400_2114258775092788914_n.jpg?oh=a6c8e3126ca5ced9452e510b8d8cb459&oe=577DA024"
}];

var Title = React.createClass({
  render: function() {
  console.log(this.props);
    return (<h1 className="text-primary">hello {this.props.test}</h1>);
  }
});

var App = React.createClass({
  render: function() {
  console.log(this.props.data);
    var personList = this.props.data.map(function(item){
    return (<tr>
      <td>{item.name}</td>
      <td>{item.title}</td>
      <td><img src={item.img}/></td>
    </tr>
    )
    })
    return (
    <div>
      <Title test="你報名WEIC了嗎?"></Title>
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
    </div>);
  }
});

var root = document.getElementById('root');

ReactDOM.render(<App data={data}/>, root);
