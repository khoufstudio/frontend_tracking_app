import { NextPage } from 'next'
import { CalculatorIcon, CurrencyDollarIcon, CheckCircleIcon } from "@heroicons/react/solid";

const DashboardCustomer: NextPage = () => {
  return (
    <>
      {/* main page */}
      <main>
        <h2 className='mb-2 text-2xl text-slate-700'>Beranda</h2>
        <div className="flex space-x-4">
          {/* card permintaan kalibrasi */}
          <div className='w-80 h-36 bg-white shadow-sm rounded-lg p-7 flex justify-between hover:cursor-pointer'>
            <CalculatorIcon className='h-20 text-blue-500 pt-1'/> 
            <div className='text-right'>
              <p className='font-light text-slate-500'>Permintaan Kalibrasi</p>
              <p className='text-4xl text-slate-600'>1</p>
            </div>
          </div>
          {/* end card permintaan kalibrasi */}
          
          {/* card permintaan pembayaran */}
          <div className='w-80 h-36 bg-white shadow-sm rounded-lg p-7 flex justify-between'>
            <CurrencyDollarIcon className='h-20 text-green-500 pt-1'/> 
            <div className='text-right'>
              <p className='font-light text-slate-500'>Pembayaran</p>
              <p className='text-4xl text-slate-600'>1</p>
            </div>
          </div>
          {/* end card permintaan pembayaran */}

          {/* card kalibrasi selesai */}
          <div className='w-80 h-36 bg-white shadow-sm rounded-lg p-7 flex justify-between'>
            <CheckCircleIcon className='h-20 text-red-500 pt-1'/> 
            <div className='text-right'>
              <p className='font-light text-slate-500'>Kalibrasi Tuntas</p>
              <p className='text-4xl text-slate-600'>1</p>
            </div>
          </div>
          {/* end card kalibrasi selesai */}
          </div>
      </main>
      {/* end of main page */}
      </>
  )
}

export default DashboardCustomer