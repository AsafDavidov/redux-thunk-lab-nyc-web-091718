import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {connect} from 'react-redux'

class App extends Component {
  
  componentDidMount(){
    console.log(this.props);
  }
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {catPics:state.cats}
}

const mapDispatchToProps = (dispatch)=>{
  console.dir(dispatch)
  return {
    fetchCats: dispatch.fetchCats
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
