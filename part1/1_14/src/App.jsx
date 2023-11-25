//Task 1.6.

import { useState } from 'react'


// const StatisticLine = (props) =>
// <tr>
// <td>{props.text}</td>
// <td>{props.value}</td>
// </tr>
//
// const Button = (props) => (
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// )
//
// const Statistics = (props) => {
//   if (props.isAnswerGiven === true) {
//   return (
//   <div>
//   <table>
//   <tbody>
//   <StatisticLine text={props.textGood} value={props.good} />
//   <StatisticLine text={props.textNeutral} value={props.neutral} />
//   <StatisticLine text={props.textBad} value={props.bad} />
//   <StatisticLine text={props.textAll} value={props.all} />
//   <StatisticLine text={props.textAverage} value={props.average} />
//   <StatisticLine text={props.textPositive} value={props.positive + ' %'} />
//   </tbody>
//   </table>
//   </div>
// )
// }
// return (
//   <div>
//     <p>No feedback given</p>
//   </div>
// )
// }
//
// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   const [isAnswerGiven, setIsAnswerGiven] = useState(0)
//
//
//   const setToGood = newValue_g => {
//     console.log('value now', newValue_g)
//     setGood(newValue_g)
//     setIsAnswerGiven(true)
//   }
//   const setToNeutral = newValue_n => {
//       console.log('value now', newValue_n)
//       setNeutral(newValue_n)
//       setIsAnswerGiven(true)
//     }
//   const setToBad = newValue_b => {
//         console.log('value now', newValue_b)
//         setBad(newValue_b)
//         setIsAnswerGiven(true)
// }
//
//
//   return (
//     <div>
//     <h3>Give feedback</h3>
//     <Button handleClick={() => setToGood(good + 1)} text="good" />
//     <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
//     <Button handleClick={() => setToBad(bad + 1)} text="bad" />
//     <h3>Statistics:</h3>
//     <Statistics textAll='All:' textAverage='Average:' textPositive='Positive:'
//     textBad='Bad:' textNeutral='Neutral:' textGood='Good:'
//     all={good+bad+neutral} average={(good-bad)/(good+bad+neutral)} positive={good/(good+bad+neutral)*100} isAnswerGiven={isAnswerGiven}
//     good={good} bad={bad} neutral={neutral}
//     />
//     </div>
//   )
// }


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState(new Array(8).fill(0))

  const setSelectedAnecdot = newAnecdot => {
        console.log('value now', newAnecdot)
        setSelected(newAnecdot)
      }
  const voteSelectedAnecdot = currentAnecdot => {
            console.log('voute for ', currentAnecdot)
            const copy = [...points]
            copy[currentAnecdot] += 1
            setPoints(copy)
            console.log('voute now', points)
          }
  const findMaxVotedAnecdot= array => {
    let max=0;
    array.forEach(function(item, i){
      if (item>=Math.max(...array)) {
console.log("номер: " + i)
        max=i
      }
    })
    return max;
  }


  return (
    <div>
      <p>
      {anecdotes[selected]}
      </p>
      <p>
      Has {points[selected]} votes
      </p>
      <Button handleClick={() => voteSelectedAnecdot(selected)} text="vote" />
      <Button handleClick={() => setSelectedAnecdot(Math.floor(Math.random() * 8))} text="New anecdote" />
      <h3>
      Anecdote with most votes
      </h3>
      <p>
      {anecdotes[findMaxVotedAnecdot(points)]}
      </p>
    </div>
  )
}


export default App
