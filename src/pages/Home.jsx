import React from 'react'
import Video from '../components/home/Video'
import herot from '../components/home/herot'
import herob from '../components/home/herob'

const Home = () => {
  return (
    <div >
    <div className='h-screen w-screen fixed'>
      <Video />
    </div>
    <div className='w-screen h-screen relative'>
      <herot />
        <herob />

    </div>

    <div className='w-screen h-screen relative flex flex-col '>
      <herot />
      <herob />
    </div>

    </div>
  )
}

export default Home
