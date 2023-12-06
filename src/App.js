import { useState } from 'react';
import './App.css';
import DisplayTitle from './Components/Comment';
import Input from './Components/Input';

let comments = [
  {
    "content": "Could have been better.",
    "date": "6/27/2023",
    "like": 17
  }, {
    "content": "Highly recommended!",
    "date": "7/19/2023",
    "like": 25
  }, {
    "content": "Amazing performances.",
    "date": "4/16/2023",
    "like": 26
  }, {
    "content": "Could have been better.",
    "date": "12/11/2022",
    "like": 70
  }, {
    "content": "I loved it!",
    "date": "4/11/2023",
    "like": 8
  }, {
    "content": "Great movie!",
    "date": "6/12/2023",
    "like": null
  }, {
    "content": "Disappointing ending.",
    "date": "4/10/2023",
    "like": 59
  }, {
    "content": "Highly recommended!",
    "date": "10/27/2023",
    "like": 17
  }, {
    "content": "I loved it!",
    "date": "5/20/2023",
    "like": 27
  }, {
    "content": "Not my cup of tea.",
    "date": "1/19/2023",
    "like": 49
  }, {
    "content": "Idiot!.",
    "date": null,
    "like": 49
  }
]

function App() {

  let [text, setText] = useState('')

  return (
    <div className='content'>
      <div className='search'>
        <Input type="text" placeholder="Enter something" onChange={(e) => setText(e.target.value)}></Input>
      </div>
      <div className='list-card'>
        {
          comments.filter((item) => {
            return item.content.toLowerCase().includes(text.toLowerCase())
          }).map((item) => {
            return (<DisplayTitle content={item.content} date={item.date} like={item.like}></DisplayTitle>)
          })
        }
      </div>
    </div>
  );
}

export default App;
