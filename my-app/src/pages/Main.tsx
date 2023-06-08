import React, { useState } from 'react'
import { MainPageFormat } from '../types';
import CreateNewTask from './CreateNewTask/CreateNewTask';
import TaskList from './TaskList/TaskList';

export default function Main(props: MainPageFormat) {
  
  const { listing, setListing } = props;

  const isUserOnListPage = () => {
    return listing ? <TaskList /> : <CreateNewTask />
  }

  return (
    <>
      <div>
        {isUserOnListPage()}
      </div>
    </>
  )
}