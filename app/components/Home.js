import React from 'react';

export default class Home extends React.Component {
  render() {
    return(
      <div className='container'>
        <header>
          <h1>Facebook Auto-Liker</h1>
        </header>
        <section id='main'>
          <div>
            <form className='column user-form'>
              <label
                className='form-label'
                htmlFor='tracked-user'>
                User being tracked
              </label>
              <input
                id='tracked-user'
                name='tracked-user'
                placeholder='Their Facebook username'
                type='text'
                autoComplete='off'
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
              />
              <button
                className='button'
                type='submit'>
                Submit
              </button>
            </form>
          </div>
        </section>
        <footer>Built by <a href='http://www.itscassidy.com' target='_blank'>Cassidy Pignatello</a></footer>
      </div>
    );
  }
}
