import React from 'react'
import Project1CoverImage from '../../assets/images/projects/cambitas-project-1.png'

function DashboardProjectItem({ coverImage, title, location, expectedEndDate, manager}) {
  return (
    <div className='bg-white border overflow-hidden rounded-lg flex flex-col w-72'>
        <img className='w-full h-36 object-cover object-center' src={Project1CoverImage} alt="Project 1" />
        <div className='w-full px-3 py-2'>
            <h4 className='text-lg font-semibold'>Rejuvenation Solutions</h4>
            <p className='text-sm'>Valencia, 1972 otra calle, 1854</p>
            <div className='w-full flex justify-between mt-2'>
                <div className='flex flex-col text-sm'>
                    <p className='text-slate-700'>Expected End Date</p>
                    <p className='text-slate-700 font-semibold'>25 Dec, 2023</p>
                </div>
                <div className='flex flex-col text-sm'>
                    <p className='text-slate-700'>Manager</p>
                    <p className='text-slate-700 font-semibold'>Juan Jose</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardProjectItem