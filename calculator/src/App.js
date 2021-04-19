import logo from './logo.svg';
import './App.css';


class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      current: '',
      previous: []
    }
  }
  render() {


  return (
    <div className="App">
      <input className="result" type="text" value={this.state.curent} />
    </div>
  );
}
}

export default App;
