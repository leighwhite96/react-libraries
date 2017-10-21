import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class LikeButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }

  this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  };

  render(){
    return  (
            <div>
              <Button
                color='red'
                content='Like'
                icon='heart'
                label={{ basic: true, color: 'red', pointing: 'left', content: `${this.state.count}` }}
                onClick={this.handleClick}
              />
            </div>
          )
  }
}
export default LikeButton
