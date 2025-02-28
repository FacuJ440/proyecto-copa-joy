import BorderRose from "@/assets/border_rose.svg"
import NetBall from "@/assets/net_ball.png"

const AboutUs: React.FC = () => {
  return (
    <div className='relative'>
      <img
        className='absolute -top-20 -z-10 w-full -rotate-90 md:-top-96 lg:-top-[800px] lg:h-[2000px]'
        src={BorderRose}
      ></img>
      <img className='' src={NetBall}></img>
      <h1 className='font-edo text-xl md:text-4xl lg:text-5xl'>Sobre Nosotros</h1>
    </div>
  )
}
export default AboutUs
