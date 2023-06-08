import React, { PropsWithChildren } from 'react'
import './style.css'

export default function TitleFormat(props: PropsWithChildren) {

  return (
    <div className='title-row'>
      {props.children}
    </div>
  )
}