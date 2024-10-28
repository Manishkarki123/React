import React from 'react'
import { contentData } from '../../assets/data/home'
import { FaUserSecret } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { BiRectangle } from "react-icons/bi";
import { Box } from '../../assets/data/home';
import { Box2 } from '../../assets/data/home';
import content from '../../images/Home/Content/content.png'
import { useState } from 'react';
const Content = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
    console.log(hover);
  }

  

  return (
    <div className='m-[auto] w-[80%] bg-[#FFFFFF]'>
      <div className='m-[2rem] flex flex-row gap-[1rem]'>
        {contentData.map((elem,index) => {
          return <div  key={elem.id}  className='hover:bg-[#442F90] hover:text-white p-[15px] pb-[20px] shadow-[0_4px_8px_0_rgba(0,0,0,0.2),_0_6px_20px_0_rgba(0,0,0,0.19)] bg-[#FFFFFF] flex flex-row rounded-lg gap-[1rem]' >
          
            <div className='  flex justify-center items-center'>

              {(elem.id) === 1 && <span className='border-dotted border-2 border-[#442F90] rounded-full p-[10px] '><FaUserSecret className='text-lg' /></span>}
              {(elem.id) === 2 && <span className='border-dotted border-2 border-[#442F90] rounded-full p-[10px]'><GiGraduateCap className='text-[1.5rem]' /></span>}
              {(elem.id) === 3 && <span className='border-dotted border-2 border-[#442F90] rounded-full p-[10px]'><FaUserSecret className='text-lg' /></span>}

            </div>
            <div className=' flex flex-col text-left'>
              <span className={` text-2xl font-[500]  leading-10 `}>{elem.title}</span>
              <span className={`text-left text-[0.9rem] leading-6`}>{elem.detail}</span>
            </div>
          </div>
        })}

      </div>
      <div className='mt-[4rem]'>
        <span className=' flex justify-center items-center font-[750] text-[3rem] '>
          Why choose Sipalaya?
        </span>

        <span className='text-[#6F6C90] text-[left] text-[1.2rem] leading-[4rem] flex justify-center'>
          Seize the future: Secure your career with Sipalaya's cutting-edge
          resources and transformative learning experiences.
        </span>
        <div className='flex flex-row gap-[10rem]'>
          <img className='object-contain max-w-[25%]' src={content} alt="Content" />
          <div className='flex flex-col gap-3'>

            {Box.map((elem, index) => {
              return <div className='gap-[0.5rem] flex flex-row' key={index}>
                <span className='flex items-center text-[2.5rem] '>
                  <BiRectangle className=' rounded-md text-[#F7F7FB] bg-[#F7F7FB]' />
                </span>
                <div className='flex flex-col'>
                  <span className='text-[#442F90] text-[2rem] font-[700]'>
                    {elem.range1}
                  </span>
                  <span className='text-[1.2rem] font-[400]'>
                    {elem.quali}
                  </span>
                </div>

              </div>

            })}
          </div>
          <div className='flex flex-col gap-3'>

            {Box2.map((elem, index) => {
              return <div className='gap-[0.5rem] flex flex-row' key={index}>
                <span className='flex items-center text-[2.5rem] '>
                  <BiRectangle className=' rounded-md text-[#F7F7FB] bg-[#F7F7FB]' />
                </span>
                <div className='flex flex-col'>
                  <span className='text-[#442F90] text-[2rem] font-[700]'>
                    {elem.range2}
                  </span>
                  <span className='text-[1.2rem] font-[400]'>
                    {elem.cond}
                  </span>
                </div>

              </div>

            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Content
