import { CalculatorIcon, CurrencyDollarIcon, CheckCircleIcon } from "@heroicons/react/solid";
import { ReactElement } from 'react';
import AdminLayout from "../components/layouts/admin";


const DashboardCustomer = () => {
  return (
    <>
      <h2 className='mb-2 text-2xl text-slate-600 font-bold'>Beranda</h2>
      <div className="grid grid-cols-3 gap-4">
        {/* card permintaan kalibrasi */}
        <div className='h-36 bg-white shadow-sm rounded-lg p-7 flex justify-between hover:cursor-pointer'>
          <CalculatorIcon className='h-20 text-blue-500 pt-1'/> 
          <div className='text-right'>
            <p className='font-light text-slate-500'>Permintaan Kalibrasi</p>
            <p className='text-4xl text-slate-600'>1</p>
          </div>
        </div>
        {/* end card permintaan kalibrasi */}
        
        {/* card permintaan pembayaran */}
        <div className='h-36 bg-white shadow-sm rounded-lg p-7 flex justify-between'>
          <CurrencyDollarIcon className='h-20 text-green-500 pt-1'/> 
          <div className='text-right'>
            <p className='font-light text-slate-500'>Pembayaran</p>
            <p className='text-4xl text-slate-600'>1</p>
          </div>
        </div>
        {/* end card permintaan pembayaran */}

        {/* card kalibrasi selesai */}
        <div className='h-36 bg-white shadow-sm rounded-lg p-7 flex justify-between'>
          <CheckCircleIcon className='h-20 text-red-500 pt-1'/> 
          <div className='text-right'>
            <p className='font-light text-slate-500'>Kalibrasi Tuntas</p>
            <p className='text-4xl text-slate-600'>1</p>
          </div>
        </div>
        {/* end card kalibrasi selesai */}
        </div>
      {/* end of main page */}
      </>
  )
}

DashboardCustomer.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export default DashboardCustomer