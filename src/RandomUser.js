import React, {Component} from 'react';
import axios from 'axios';
import Loading from './Loading';

class RandomUser extends Component {
  constructor(props){
    super(props)
//state
    this.state = {
      users : [],
      loading: false
    }
 // Bind Method
    this.handleSubmit = this.handleSubmit.bind(this);
  }

getUser() {
  this.setState({
    loading:true
    }
   )
   //Get Random user from randomuser.me
 axios('https://api.randomuser.me/?nat=US&results=2')
    .then(response => this.setState({
      users:[...this.state.users, ...response.data.results],
      loading:false
    }));
}

  handleSubmit(e) {
   e.preventDefault();
   this.getUser();
  }


  componentWillMount(){
   this.getUser();
  }

  render() {
    const {loading, users} = this.state;
    return <div className="app">
     
    {
      !loading ? users.map(user =>
        <div><h3>{user.name.first }</h3>
        <p>{user.name.last}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <hr/>
        </div>
        ) : <Loading message="Wait Loading..."/>
    }

    <form onSubmit={this.handleSubmit} className="form">
        <input type="submit" value="Load More User" />
    </form>
    </div>;
  }

}

export default RandomUser;
