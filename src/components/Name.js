import React from 'react';

class Name extends React.Component {
    render(){
        return (
           <h4 class='name'>{this.props.name}</h4>
        )
    }
}
export default Name;