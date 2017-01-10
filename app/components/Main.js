var React = require('react');

class Main extends React.Component {
    render(){
        return (
            <div> 
            
            {this.props.children}
            </div>
        )
    }

}

module.exports = Main;
