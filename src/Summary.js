import React from 'react'
import { useState, useEffect } from 'react'

const ScoreElement = ({ category, score, icon, color }) => {
  return (
      <div className={`${color}-bg category`}>
          <div className='category-header'>
            <img src={icon} alt="category-icon"  className='icon'/>
            <p className={color}>&nbsp;&nbsp;{category}</p>
          </div>

          <div className='score'>
             <p className='navy-text'>{score} <span className='pale-blue-text score-basic'> / 100</span></p>
          </div>
          
         
      </div>
  )
}

const Summary = () => {

  const [data, setData] = useState([]);

  useEffect (() => {
    const fetchData = async () => {
      const query = await fetch('http://localhost:3500/data');
      const response = await query.json();
      setData(response);
    }
    fetchData();
  }, [])

  console.log(data);

  
  return (
    <div className='summary'>
      <h1 className='navy-text summary-header'>Summary</h1>
      <div className='category-list'>
        {data.map(item => (
          <ScoreElement key={item.category} category={item.category} score={item.score} icon={item.icon} color={item.color}/>
        ))}
      </div>
      <button type='button' focus   className='navy-bg white-text button'>
        Continue
      </button>
    </div>
  )
}

export default Summary