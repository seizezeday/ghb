import React from 'react';
var ConfirmBattle = require('../components/ConfirmBattle')

var ConfirmBattleContainer =  React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      isLoading: false,
      playerInfo: []
    }
  },
  componentDidMount: function () {
  //var query = this.props.location.query;
  //console.log(query);
  },


  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playerInfo}
      />
    );
  }

});

module.exports = ConfirmBattleContainer;
