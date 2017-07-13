import React from 'react'
import styleable from 'react-styleable'
import css from './styles/nav.css'
const { func, bool } = React.PropTypes

function Nav(props) {
  return (
    <div className={props.css.root}>
      <button onClick={props.onPrevious} className={props.css.prev}>&#10094;</button>
      <button onClick={props.onNext} className={props.css.next}>&#10095;</button>
    </div>
  )
}

Nav.propTypes = {
  onPrevious: func.isRequired,
  onNext: func.isRequired,
  hasPrevious: bool,
  hasNext: bool
}

export default styleable(css)(Nav)
