import React from 'react';
import HomeForm from './HomeForm';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trackedUser: '',
      username: '',
      userphone: ''
    }
  }

  handleSubmit = (trackedUser, username, userphone) => {
    this.setState({
      trackedUser,
      username,
      userphone
    });
    console.log(trackedUser, username, userphone);
  }

  render() {
    return(
      <div className='container'>
        <header>
          <h1>Facebook Auto-Liker</h1>
        </header>
        <section id='main'>
          <HomeForm
            onSubmit={this.handleSubmit}
          />
        </section>
        <footer>Built by <a href='http://www.itscassidy.com' target='_blank'>Cassidy Pignatello</a></footer>
      </div>
    );
  }
}
