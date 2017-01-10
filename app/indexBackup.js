var React = require('react');
var ReactDOM = require('react-dom');

var USER_DATA = {
  name: 'Vasyl',
  username: 'unbeldi',
  image: 'https://avatars3.githubusercontent.com/u/8271523?v=3&u=6f19b97724979696e8031abac287839d9ce6b3a8&s=400'
} 

var ProfilePic = React.createClass({
    render: function() {
      
        return ( 
            <img src={this.props.imageUrl} style={{heigh: 100, width: 100}} />
        
            )
            
    }
});


class Link extends React.Component{

  changeUrl() {
    window.location.replace(this.props.href);

  }

  render() {
    return (
    <span
    style = {{color:'red', cursor: 'pointer'}}
    onClick = {() => {this.changeUrl()}}>
          {this.props.children}
    </span>
    )
    }
  
}

class ProfileLink extends React.Component{
  render() {
    return (
      <div>
      <Link href={'https://www.github.com/' + this.props.username}>
      {this.props.username}
      </Link>
      </div>

      )

  }
}

class ProfileName extends React.Component{
  render() {
    return(
      <div>{this.props.name}</div>
      )
  }
}

class Avatar extends React.Component{
  render() {
    return (
    <div>
    <ProfilePic  imageUrl={this.props.user.image}/>
    <ProfileName name={this.props.user.name}/>
    <ProfileLink username={this.props.user.username}/>
    </div>
    )
  }
}


ReactDOM.render(
    <Avatar user={USER_DATA}/>,
    document.getElementById('app')
    
);
