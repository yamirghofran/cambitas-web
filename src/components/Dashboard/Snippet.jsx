import React from 'react';
import { ArrowUpRight } from 'lucide-react';

function Snippet({ icon, title, value}) {
  return (
    <div className=" w-64 bg-white rounded-lg px-4 py-2 mx-2 border items-center">
      <div className="flex items-center">
        <img className='w-16' src={icon} alt={title} />
        <div className=' w-48 flex flex-col justify-center ml-2'>
            <p className="ml-2 text-lg font-medium text-gray-900">{value}</p>
            <p className="text-sm text-slate-700">{title}</p>
        </div>
        <ArrowUpRight size={24} className="" />
      </div>
      
    </div>
  )
}

export default Snippet