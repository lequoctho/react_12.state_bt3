import React, {Component} from 'react';
import classNames from 'classnames';
import './SearchBox.css'

class SearchBox extends Component {
    constructor() {
      super();
      this.state = {
        isFocused: false
      }
    }
  
    onFocus(){
      this.setState({
        isFocused: true
      });
    }
    onBlur(){
      this.setState({
        isFocused: false
      });
    }
    onChange(val){
      if (document.getElementById("input-text").value.length > 10 || document.getElementById("input-text").value.slice(0,3) !== "090") document.getElementById("input-text").style.borderColor = "#F00";
      else document.getElementById("input-text").style.borderColor = "#F00";
    }
  
    render() {
        const {isFocused} = this.state;
        return <div className='SearchBox'>
                <input onFocus={()=>this.onFocus()} onBlur={()=>this.onBlur()} onChange={()=>this.onChange()} type="text" id="input-text"/>
                <img className={classNames({'hide': isFocused === true})} src="https://cdn.glitch.com/3916b47e-07d9-47aa-b61c-db84c74ee7bb%2FEllipse%203.png?v=1590421667794"/>
                <img className={classNames({'hide': isFocused === true})} src="https://cdn.glitch.com/3916b47e-07d9-47aa-b61c-db84c74ee7bb%2Fsearch%201.png?v=1590422058964"/>    
            </div>;
    }
}

export default SearchBox;