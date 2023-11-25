//Task 1.6.

import { useState } from 'react'


const StatisticLine = (props) =>
<tr>
<td>{props.text}</td>
<td>{props.value}</td>
</tr>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  if (props.isAnswerGiven === true) {
  return (
  <div>
  <table>
  <tbody>
  <StatisticLine text={props.textGood} value={props.good} />
  <StatisticLine text={props.textNeutral} value={props.neutral} />
  <StatisticLine text={props.textBad} value={props.bad} />
  <StatisticLine text={props.textAll} value={props.all} />
  <StatisticLine text={props.textAverage} value={props.average} />
  <StatisticLine text={props.textPositive} value={props.positive + ' %'} />
  </tbody>
  </table>
  </div>
)
}
return (
  <div>
    <p>No feedback given</p>
  </div>
)
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [isAnswerGiven, setIsAnswerGiven] = useState(0)


  const setToGood = newValue_g => {
    console.log('value now', newValue_g)
    setGood(newValue_g)
    setIsAnswerGiven(true)
  }
  const setToNeutral = newValue_n => {
      console.log('value now', newValue_n)
      setNeutral(newValue_n)
      setIsAnswerGiven(true)
    }
  const setToBad = newValue_b => {
        console.log('value now', newValue_b)
        setBad(newValue_b)
        setIsAnswerGiven(true)
}


  return (
    <div>
    <h3>Give feedback</h3>
    <Button handleClick={() => setToGood(good + 1)} text="good" />
    <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
    <Button handleClick={() => setToBad(bad + 1)} text="bad" />
    <h3>Statistics:</h3>
    <Statistics textAll='All:' textAverage='Average:' textPositive='Positive:'
    textBad='Bad:' textNeutral='Neutral:' textGood='Good:'
    all={good+bad+neutral} average={(good-bad)/(good+bad+neutral)} positive={good/(good+bad+neutral)*100} isAnswerGiven={isAnswerGiven}
    good={good} bad={bad} neutral={neutral}
    />
    </div>
  )
}


export default App
