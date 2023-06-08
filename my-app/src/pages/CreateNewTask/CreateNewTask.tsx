import React from 'react'
import Title from '../../components/Title/Title'
import TitleFormat from '../../components/Title/TitleFormat'
import { Create } from '../../constant'

export default function CreateNewTask() {
  return (
    <>
      <TitleFormat>
        <Title title={Create}/>
      </TitleFormat>
    </>
  )
}