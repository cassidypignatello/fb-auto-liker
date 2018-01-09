import React from 'react';

export default class Home extends React.Component {
  render() {
    return(
      <div className='container'>
        <header>Facebook Auto-Liker</header>
        <section id='main'>
          <div>
            <form className='column'>
              <label></label>
              <input
                placeholder={`Facebook user being auto-liked`}
                type='text'
                autoComplete='off'
              />
              <input
                placeholder={`Your Facebook username`}
                type='text'
                autoComplete='off'
              />
              <button type='submit'>Submit</button>
            </form>
          </div>
        </section>
        <footer>Built by <a href='http://www.itscassidy.com' target='_blank'>Cassidy Pignatello</a></footer>
      </div>
    );
  }
}
