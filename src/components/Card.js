import React from 'react';
import Voting from './Voting';
import Thumbs from './Thumbs';
import Image from './Image';
import Name from './Name';
import Title from './Title';
import Bio from './Bio';
import './Style.css';

class Card extends React.Component {
    render(){
        return(
            <div class="rowC">
                <div class="leftChild"> 
                    <Image image={this.props.image}></Image>
                </div>
                <div class="rightChild">
                    <Name name={this.props.name}></Name>
                    <Title title={this.props.title}></Title>
                    <Bio bio={this.props.bio}></Bio>
                    <Thumbs></Thumbs>
                </div>
            </div>            
        )
    }
}
export default Card;