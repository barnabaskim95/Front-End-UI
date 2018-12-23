import React from 'react';
import './Style.css';
import Thumbs from './Thumbs';

class Voting extends React.Component{
    render(){
        return(
            <div>
                <div className='rowC'>
                    <h5 class='bio-paragraph'>Want to work with First Last?</h5>
                    <Thumbs />
                    <h5 class='bio-paragraph'>Yes!</h5>
                </div>
            </div>
        )
    }
}

export default Voting;