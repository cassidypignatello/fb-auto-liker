import React from 'react';
import HomeForm from './HomeForm';

const Home = (props) => (
  <div className='container'>
    <header>
      <h1>Facebook Auto-Liker</h1>
    </header>
    <section id='main'>
      <HomeForm />
    </section>
    <footer>Built by <a href='http://www.itscassidy.com' target='_blank'>Cassidy Pignatello</a></footer>
  </div>
);

export default Home;
