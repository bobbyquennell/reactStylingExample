import React from 'react'
//make our css modules export object available in our component via
//react-styleable
import styleable from 'react-styleable'
import css from './styles/frame.css'

// export default function Frame({ children }) {
//   return <div>{children}</div>
// }


//wrapp our component in react-styleable higher order component that receives
//our CSS module and passes it on as props.css to our component
//thus the root class is available as props.css.root.
function Frame(props) {
  return <div className={props.css.root}>{props.children}</div>
}
export default styleable(css)(Frame)
