import React from 'react'

const TodoList = () => {
  return (
    <div className='h-screen w-full bg-sky-700 flex flex-col items-center justify-center'>
        <div>
            <h1 className='text-3xl p-2  font-bold text-sky-950'>MY TODOLIST </h1>
        </div>
        <div className='h-[500px] w-[500px] rounded-xl bg-sky-400'>
            <input className='h-[60px] w-[460px] rounded-xl bg-sky-300 border-2 border-sky-950 p-2 m-4' type="text" placeholder='SEARCH...' />

        </div>
      
    </div>
  )
}

export default TodoList
