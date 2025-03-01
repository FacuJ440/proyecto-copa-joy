import React from "react"
import Navbar from "@/components/layout/Navbar"
import BorderBlue from "@/assets/border_blue.svg"
import SplashPurple from "@/assets/splash_purple.svg"
import SplashGreen from "@/assets/splash_green.svg"
import SplashRose from "@/assets/splash_rose.svg"
import PlayerImg from "@/assets/player_black.svg"
import { AboutUs } from "@/components/AboutUs"
import { Timeline } from "@/components/Timeline"

const HomePage: React.FC = () => {
  return (
    <>
      <div className='relative'>
        <Navbar />
        <img
          src={BorderBlue}
          className='absolute -right-32 -top-28 -z-10 md:-right-52 md:-top-56 lg:-right-32 lg:-top-72'
        />
        <img src={SplashPurple} className='absolute -top-52 left-72 hidden w-52 lg:block 2xl:left-[600px]' />
        <img src={SplashGreen} className='absolute -right-64 top-[400px] h-52 md:-right-32 lg:block' />
        <img src={SplashRose} className='absolute -left-64 top-[300px] h-52 md:-left-32 lg:block' />
        <div className='z-10 flex flex-row justify-center'>
          <div className='z-10 flex flex-col items-center justify-center text-center'>
            <h1 className='font-edo text-3xl md:text-5xl lg:text-7xl'>COPA UNIVERSITARIA</h1>
            <div className='w-48 rounded bg-black md:w-72 lg:w-96'>
              <h2 className='text-center text-sm text-white md:text-xl lg:text-3xl'>PROPUESTA PUBLICITARIA</h2>
            </div>
          </div>
          <img src={PlayerImg} className='z-10 h-64 md:h-96 lg:h-[700px]' />
        </div>
        <AboutUs />
        <Timeline />
        <Navbar></Navbar>
        <Navbar></Navbar>
        <Navbar></Navbar>
        <Navbar></Navbar>
      </div>
    </>
  )
}

export default HomePage
