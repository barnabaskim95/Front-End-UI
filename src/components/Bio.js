import React from 'react';
import './Style.css';

class Bio extends React.Component {
    render(){
        return(
            <div class='bio-paragraph'>
                <p font size='1'>{this.props.bio}</p>
            </div>

        )
    }
}
export default Bio;