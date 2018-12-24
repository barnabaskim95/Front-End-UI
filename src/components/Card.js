import React from 'react';
import Thumbs from './Thumbs';
import Image from './Image';
import Name from './Name';
import Title from './Title';
import Bio from './Bio';
import './Style.css';

class Card extends React.Component {
    render(){
        return(
            <div class="row">
                <div class="left-child"> 
                    <Image image={this.props.image}></Image>
                </div>
                <div class="right-child">
                    <Name name={this.props.name}></Name>
                    <Title title={this.props.title}></Title>
                    <Bio bio={this.props.bio}></Bio>
                    <Thumbs name={this.props.name}></Thumbs>
                </div>
            </div>            
        )
    }
}
export default Card;