import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import TotalEmissionSavings from '@/components/Metrics/TotalEmissionSavings'
import TotalRevenueSaved from '@/components/Metrics/TotalRevenueSaved'
import DonutMetric from '@/components/Metrics/DonutMetric'
import MoreBars from '@/components/Metrics/MoreBars'
import MoreLines from '@/components/Metrics/MoreLines'

function Metrics() {
  return (
    <div className='w-full h-full pb-4'>
      <div className='pt-4'>
      <div className='flex justify-between items-center bg-white rounded-md border p-4'>
        <h2>Inventory Status</h2>
        <div className='flex justify-between w-[500px] items-center gap-x-2'>
          <div className='flex flex-col items-center border-l pl-4 border-gray-400'>
            <p className='text-xl font-semibold'>1055</p>
            <p className='text-sm text-slate-600'>Used Inventory</p>
          </div>
          <div className='flex flex-col items-center border-l pl-4 border-gray-400'>
            <p className='text-xl font-semibold'>1055</p>
            <p className='text-sm text-slate-600'>Used Inventory</p>
          </div>
          <div className='flex flex-col items-center border-l pl-4 border-gray-400'>
            <p className='text-xl font-semibold'>1055</p>
            <p className='text-sm text-slate-600'>Used Inventory</p>
          </div>
        </div>
        <Link to='/inventory'>
            <Button variant='secondary'>
              View All Inventory
            </Button>
        </Link>
      </div>
      </div>
      <div className='mt-4 grid md:grid-cols-[2fr_1fr_1fr] gap-x-2'>
          <div className='bg-white rounded-md border p-4'>
            <h2 className='text-lg font-semibold'>Total Carbon Emission Savings</h2>
            <TotalEmissionSavings />
          </div>
          <div className='bg-white rounded-md border p-4'>
            <h2 className='text-lg font-semibold'>Total Revenue Saved</h2>
            <TotalRevenueSaved />
          </div>
          <div className='bg-white rounded-md border p-4'>
            <h2 className='text-lg font-semibold'>Some other metric</h2>
            <DonutMetric />
          </div>
      </div>
      <div className='mt-4 grid md:grid-cols-[2fr_2fr] gap-x-2'>
        <div className='bg-white rounded-md border p-4'>
          <h2 className='text-lg font-semibold'>Volume vs Service Level</h2>
          <MoreBars />
        </div>
        <div className='bg-white rounded-md border p-4'>
          <h2 className='text-lg font-semibold'>Volume vs Service Level</h2>
          <MoreLines />
        </div>
      </div>
      
    </div>
  )
}

export default Metrics