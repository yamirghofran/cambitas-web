import React from 'react'
import DashboardProjectItem from './DashboardProjectItem';
import { Link } from 'react-router-dom';

function DashboardProjects() {
  return (
        <div class="w-[70%] bg-white p-4 rounded-lg border">
          <div className='flex justify-between'>
          <h4 className='text-2xl mb-2'>Your Projects</h4>
            <Link to="/inventory" className=" text-green-800 text-sm">
                See All
              </Link>
          </div>
            
            <div className='w-full flex justify-start gap-x-3'>
                <DashboardProjectItem />
                <DashboardProjectItem />
                <DashboardProjectItem />
            </div>
        </div>
  )
}

export default DashboardProjects;