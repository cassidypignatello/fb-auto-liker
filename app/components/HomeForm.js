import React from 'react';

const HomeForm = (props) => (
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
);

export default HomeForm;
