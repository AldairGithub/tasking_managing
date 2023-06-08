import React from 'react'
import './style.css'
import { TitleProps } from '../../types'

export default function Title(props: TitleProps) {

  const { title, tasksDue } = props

  const deadline = () => {
    return tasksDue ? <p>{tasksDue}</p> : null;
  }

  return (
    <>
      <div className='title-column'>
        <h1>{title}</h1>
        {deadline()}
      </div>
    </>
  )
}