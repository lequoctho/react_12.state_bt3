import React, {Component} from 'react';
import classNames from 'classnames';
import './SearchBox.css'

class SearchBox extends Component {
    
    render() {
        //const { currentColor } = this.props;
        return <div className='SearchBox'>
                <input type="text" />
                <img src="https://cdn.glitch.com/3916b47e-07d9-47aa-b61c-db84c74ee7bb%2FEllipse%203.png?v=1590421667794"/>
                <img src="https://cdn.glitch.com/3916b47e-07d9-47aa-b61c-db84c74ee7bb%2Fsearch%201.png?v=1590422058964"/>    
            </div>;
    }
}

export default SearchBox;