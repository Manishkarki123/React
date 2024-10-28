import React from 'react'
import { Link } from 'react-router-dom';
import cap from '../../images/Home/Header/cap.png'
import globe from '../../images/Home/Header/globe.png'
import header from '../../images/Home/Header/header.png'
import { FaArrowRightLong } from "react-icons/fa6";
const Header = () => {
    console.log('true');
    return (
        <div className='  min-h-[100vh] bg-bg '>
            <div className='tablet:flex tablet:flex-col  w-[90%] m-auto grid grid-cols-2'>
                <div className=' mt-[6rem] flex flex-col h-[auto]' >
                    <h1 className='text-white capitalize font-[800] text-[3.75rem]'>Career-Ready IT </h1>
                    <h1 className='text-white capitalize font-[700] text-[3.75rem] mb-[0.9rem]'>Training in nepal</h1>
                    <p className=' w-[85%] text-[#FFFFFF] text-left text-[1rem]'>Gain job-ready skills with our IT courses in Nepal. Elevate your career prospects today!</p>
                    <div className='mt-[3rem] flex justify-between'>
                        <span className=' text-white mt-[1rem] max-h-[4rem]'>
                            <button className='border-none hover:bg-[#3e2f81] bg-[#422D8E] p-[25px] max-h-[100%] flex flex-row justify-center items-center  gap-[1.5rem]'><span className='hover:-z-[-1] flex justify-center items-center '>Find the Course</span><span className='pt-[5px] text-white flex justify-center items-center '><FaArrowRightLong /></span>  </button>
                        </span>
                        <img className=' laptop:hidden -translate-x-[25%] -translate-y-[5%] object-contain justify-center items-center' src={globe} alt="globe of the world" />
                    </div>
                </div>

                <div className='relative flex flex-row'>
                    <img className='object-contain max-w-[80%] mobile:flex mobile:max-w-[90%]' src={header} alt="Student studying" />
                    <img className='laptop:hidden absolute right-0 top-[5%] object-contain min-w-[15%]' src={cap} alt="Cap" />

                </div>

            </div>

        </div>
    )
}

export default Header
