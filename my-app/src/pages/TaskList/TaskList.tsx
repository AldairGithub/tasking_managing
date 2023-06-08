import React from 'react'
import Title from '../../components/Title/Title'
import TitleFormat from '../../components/Title/TitleFormat'
import { Tasks } from '../../constant'

export default function TaskList() {

  return (
    <>
      <TitleFormat>
        <Title title={Tasks} tasksDue={"3 tasks due"}/>
      </TitleFormat>
    </>
  )
}
