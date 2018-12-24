import React from 'react';

class Image extends React.Component {
    render(){
        return(
            <div>
                <img className='image-ratio' src={this.props.image}/>
            </div>
        )
    }
}

export default Image;