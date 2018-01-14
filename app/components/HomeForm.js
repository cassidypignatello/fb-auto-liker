import React from 'react';
import PropTypes from 'prop-types';

export default class HomeForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      trackedUser: '',
      username: '',
      userphone: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(
      this.state.trackedUser,
      this.state.username,
      this.state.userphone
    );
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return(
      <div>
        <form className='column user-form' onSubmit={this.handleSubmit}>
          <label
            className='form-label'
            htmlFor='trackedUser'>
            User being tracked
          </label>
          <input
            id='trackedUser'
            name='trackedUser'
            placeholder='Their Facebook username'
            type='text'
            autoComplete='off'
            value={this.state.trackedUser}
            onChange={this.handleChange}
          />
          <label
            className='form-label'
            htmlFor='username'>
            Your username
          </label>
          <input
            id='username'
            name='username'
            placeholder='Your Facebook username'
            type='text'
            autoComplete='off'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label
            className='form-label'
            htmlFor='userphone'>
            Your phone number
          </label>
          <input
            id='userphone'
            name='userphone'
            placeholder='(555) 555-1212'
            type='tel'
            autoComplete='off'
            value={this.state.userphone}
            onChange={this.handleChange}
          />
          <button
            className='button'
            type='submit'
            disabled={!this.state.trackedUser ||
                      !this.state.username ||
                      !this.state.userphone}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

HomeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
