import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Name from './Name'
import Title from './Title'
import Image from './Image'
import Bio from './Bio'
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
        <h1>G2 Crowd Team Roster</h1>,
        <ul class='unOrderedList'>
            {workers.map(hit => 
            <li className='lists' key={hit.name}>
                <Card image={hit.image_url} title={hit.title} bio={hit.bio} name={hit.name}></Card>,
            
            </li>
            )}
        </ul>
        ]);

    }
}
/*
<Name name={hit.name}></Name>
                <Title title={hit.title}/>
                <Image image={hit.image_url} />
                <Bio biography={hit.bio}/>
                */
export default Listing;