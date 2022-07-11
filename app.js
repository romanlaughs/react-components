var GroceryListItems = (props) => (
  <ul>
  {props.items.map(items =>
      <GroceryListItem items={items} />
  )}
</ul>
)

class GroceryListItem extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      done: false
    };
  };
   onMouseOver() {
     this.setState({
      done: !this.state.done
     });
   }
   onMouseExit() {
    this.setState({
     done: !this.state.done
    });
  }
  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal',
    };
    return (
    <li style={style} onMouseEnter={this.onMouseOver.bind(this)} onMouseLeave={this.onMouseExit.bind(this)}>{this.props.items}</li>
    );
  }
}
var GroceryList = () => (
  <div>
    <h2> Grocery List </h2>
    <GroceryListItems items={['Diet Coke', 'Vanilla Ice Cream']}/>
  </div>
)


ReactDOM.render(<GroceryList />, document.getElementById("app"));
