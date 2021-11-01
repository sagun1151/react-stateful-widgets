import React from 'react';
import { render } from 'react-dom';

import Counter from './components/Counter';
import Input from './components/Input';
import Moods from './components/Moods';
import Spinner from './components/Spinner';
import Squares from './components/Squares';
import Programmers from './components/Programmers';

render(
  <>
    <Counter />
    <Moods />
    <Spinner />
    <Input />
    <Squares />
    <Programmers />
  </>
  ,
  document.querySelector('#root')
);

// how many this cal i return from a function
// ANSWER: ONE, [1,2,3,4,5], {name:'casey', password: 'rocks'}