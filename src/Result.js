import React from 'react'

const Result = () => {
  return (
    <div className='result'>
      <p className='result-header light-lavender-text'>Your Result</p>
      <div className='circle'>
        <div className='circle-container'>
          <p className='number'>76</p>
          <p className='numberDesc light-lavender-text'>of 100</p>
        </div>
        
      </div>
      <div className='message'>
        <h2 className='message-header'>Great</h2>
        <p className='light-lavender-text message-desc'>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
    </div>
  )
}

export default Result