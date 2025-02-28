import React from "react"
import Navbar from "@/components/layout/Navbar"
import BorderBlue from "@/assets/border_blue.svg"
import SplashPurple from "@/assets/splash_purple.svg"
import SplashGreen from "@/assets/splash_green.svg"
import SplashRose from "@/assets/splash_rose.svg"
import PlayerImg from "@/assets/player_black.svg"

const HomePage: React.FC = () => {
  return (
    <>
      <div className='relative'>
        <Navbar></Navbar>
        <img
          src={BorderBlue}
          className='absolute -right-32 -top-28 -z-10 md:-right-52 md:-top-56 lg:-right-32 lg:-top-72'
        />
        <img src={SplashPurple} className='absolute -top-52 left-72 hidden w-52 lg:block 2xl:left-[600px]' />
        <img src={SplashGreen} className='absolute -right-64 top-[400px] h-52 md:-right-32 lg:block' />
        <img src={SplashRose} className='absolute -left-64 top-[300px] h-52 md:-left-32 lg:block' />
        <div className='flex flex-row'>
          <div>
            <h1 className='text-3xl md:text-5xl lg:text-7xl'>COPA UNIVERSITARIA</h1>
            <h2 className='text-sm md:text-xl lg:text-3xl'>PROPUESTA PUBLICITARIA</h2>
          </div>
          <img src={PlayerImg} className='h-64 md:h-96 lg:h-[700px]' />
        </div>
        <Navbar></Navbar>
        <Navbar></Navbar>
        <Navbar></Navbar>
        <Navbar></Navbar>
        <Navbar></Navbar>
        <Navbar></Navbar>
      </div>
    </>
  )
}

export default HomePage
