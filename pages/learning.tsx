import { NextPage } from 'next'
import { ChevronDownIcon, CalculatorIcon, CurrencyDollarIcon, CheckCircleIcon } from "@heroicons/react/solid";
import Image from 'next/image';
import Link from 'next/link'

const Learning: NextPage = () => {
  return (
    <div className='bg-blue-50'>
      {/* sidebar */}
      <div className='bg-slate-800 w-56 text-white h-screen fixed z-10'>
        <div className="pl-5 pr10 py-3">
          <Image src='/images/global_quality_logo.jpg' height={10} width={10} className='h-10' alt="Logo" />
        </div> 
        <nav>
          <ul>
            {[
              ['Learning', '/learning'],
              ['Profile', '/profile'],
              ['Setting', '/setting']
            ].map(([title, url]) => (
              <li className='pl-5 pr-10 py-3 hover:cursor-pointer hover:bg-slate-600'><Link href={url}>{title}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
      {/* end of sidebar */}

      {/* header */}
      <nav className='bg-white border-b-slate-300 p-3 fixed w-screen shadow-md shadow-slate-100'>
        <ul className='flex justify-end pr-8'>
          <li className='items-center flex font-semibold justify-end text-slate-500 w-56 hover:cursor-pointer'>
            <span className='font-semibold'>Admin</span>
            <ChevronDownIcon className='h-5 w-5 text-slate-300 pt-1'/> 
          </li>
        </ul>
      </nav>
      {/* end of header */}

      {/* main page */}
      <main className='px-5 pt-20 ml-[230px] min-h-screen'>
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
    </div>
  )
}

export default Learning