import { getData } from '@/context/userContext'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const {user} = getData()
  const navigate = useNavigate()
  return (
    <div className='p-4'>
      <h1 className='text-center font-bold text-2xl'>Welcome {user.username}</h1>
      Home
    </div>
  )
}

export default Hero
