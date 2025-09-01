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

    <div className='w-1/2 h-screen bg-amber-300 relative flex flex-col '>
      <herot />
      <herob />
    </div>

    </div>
  )
}

export default Home
