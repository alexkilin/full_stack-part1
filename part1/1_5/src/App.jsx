const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }




  const Header = (props) => {
    return (
      <div>
        Course name: {props.course.name}
      </div>
    )
}

const Part = (props) => {
  return (
        <p>
          {props.part} {props.exercises}
        </p>
  )
}


const Content = (props) => {
console.log(course.parts);
  return (
    <div>
        <Part part = {props.course.parts[0].name} exercises = {props.course.parts[0].exercises}/>
        <Part part = {props.course.parts[1].name} exercises = {props.course.parts[1].exercises}/>
        <Part part = {props.course.parts[2].name} exercises = {props.course.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
 var returnvalue=Number(props.course.parts[0].exercises)+Number(props.course.parts[1].exercises)+Number(props.course.parts[2].exercises)
 console.log(returnvalue)
  return (
    <p>
      Number of exercises {returnvalue}
  </p>
  )
}


console.log(course.parts)
  return (
      <div>
        <Header course={course} />
        <Content course={course}/>
        <Total course={course}/>
      </div>
    )

}

export default App
