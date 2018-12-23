import React from 'react';

class Image extends React.Component {
    render(){
        return(
            <div>
                <img className='Image-Ratio' src={this.props.image}/>
            </div>
        )
    }
}

export default Image;