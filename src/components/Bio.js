import React from 'react';
import './Style.css';

class Bio extends React.Component {
    render(){
        return(
            <div class='bio-paragraph'>
                <p>{this.props.bio}</p>
            </div>

        )
    }
}
export default Bio;