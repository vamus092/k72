import React from 'react'
import Video from '../components/home/Video'
import herot from '../components/home/herot'
import herob from '../components/home/herob'

const Home = () => {
  return (
    <div>
    <div className='h-screen w-screen fixed'>
      <Video />
    </div>

    <div className='relative w-screen h-screen'>
      <herot />
      <herob />
    </div>
    
    </div>
  )
}

export default Home
