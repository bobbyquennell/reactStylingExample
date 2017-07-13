import React from 'react'
import styleable from 'react-styleable'
import css from './styles/nav.css'
const { func, bool } = React.PropTypes


function getPrevClassName(props){
    return props.hasPrevious ? props.css.prev : props.css.prevHidden;
}

function getNextClassName(props){
    return props.hasNext ? props.css.next : props.css.nextHidden;
}

function Nav(props) {
  return (
    <div className={props.css.root}>
      <button onClick={props.onPrevious} className={getPrevClassName(props)}>&#10094;</button>
      <button onClick={props.onNext} className={getNextClassName(props)}>&#10095;</button>
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
