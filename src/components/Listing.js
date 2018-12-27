import React from 'react';
import Card from './Card'
import './Style.css';

class Listing extends React.Component {
    constructor(props){
        super(props);
        this.state= {
        workers: [],
        }
    }
    componentDidMount(){
        fetch('https://api.myjson.com/bins/16roa3')
        .then(response => response.json())
        .then(data => this.setState({ workers: data}))
    }
    render() {
        const {workers} = this.state;
        return ([
        <p className="roster">G2 Crowd Team Roster</p>,
        <ul class='unordered-list'>
            {workers.map(worker => 
            <li className='lists' key={worker.name}>
                <Card image={worker.image_url} title={worker.title} bio={worker.bio} name={worker.name}></Card>, 
            </li>
            )}
        </ul>
        ]);
    }
}

export default Listing;