import React from 'react'
import Navbar from '../Component/Navbar'
// import judul_lineup from '../Assets/judul_lineup.png'
// import judul_lineup_mobile from '../Assets/judul_lineup_mobile.png'
// import ButtonSecondary from '../Component/ButtonSecondary'
// import buttongueststars from '../Assets/buttongueststars.png'
// import buttonspeaker from '../Assets/buttonspeaker.png'
import ShowLineUp from '../Component/ShowLineUp'

export default function LineUp() {
  return (
    <div className='overflow-auto lineup'>
      <Navbar />
      <div className='flex items-center justify-center h-screen'>
        <ShowLineUp />
      </div>
    </div>
  )
}
