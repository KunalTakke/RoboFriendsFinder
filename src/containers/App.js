import React,{Component} from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import './App.css';



class App extends Component{
    constructor(){
        super();
        this.state={
            robots: [],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots:users}));
    }


    onsearchChange=(event)=>{
        this.setState({searchfield: event.target.value});
    }
    render() {
        const {robots,searchfield}=this.state;
        const filteredRobots=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        if(this.state.robots.length === 0){
            return <h1>Loading..........................</h1>
        }else{
        return(
            <div className="tc">
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onsearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
            </div>
        );
        }
    }
}

export default App;