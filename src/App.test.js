import React from 'react';
import ReactDOM from 'react-dom';
import RandomUser from './RandomUser';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RandomUser />, div);
});
