import { NextPage } from 'next'
import { ChevronDownIcon, CalculatorIcon, CurrencyDollarIcon, CheckCircleIcon } from "@heroicons/react/solid";
import { Menu } from '@headlessui/react';

const DashboardCustomer: NextPage = () => {
  return (
    <div className='bg-blue-50'>
      {/* sidebar */}
      <div className='bg-slate-900 w-56 text-white h-screen fixed z-10 pl-5'>
        <div className="pr10 py-3">
          <img src='/images/global_quality_logo.jpg' className='h-10' alt="Logo" />
        </div> 
        <h3 className='text-slate-500'>
          Halaman
        </h3>
        <nav>
          <ul>
            <li className='pr-10 py-3 hover:cursor-pointer hover:bg-slate-600'>Beranda</li>
            <li className='pr-10 py-3 hover:cursor-pointer hover:bg-slate-600'>Kalibrasi</li>
            <li className='pr-10 py-3 hover:cursor-pointer hover:bg-slate-600'>Pembayaran</li>
          </ul>
        </nav>
      </div>
      {/* end of sidebar */}

      {/* header */}
      <nav className='bg-white border-b-slate-300 p-3 fixed w-screen shadow-md shadow-slate-100'>
        <ul className='flex justify-end'>
          <li className='items-center flex font-semibold justify-end text-slate-500 w-56 hover:cursor-pointer'>
            <Menu>
              <Menu.Button>
                <span>Pelanggan</span>
                <ChevronDownIcon className='h-5 w-5 text-slate-500 pt-1'/> 
              </Menu.Button>
              <Menu.Items>
                <Menu.Item>
                  {({active}) => (
                    <a 
                      className={`${active && 'bg-blue-500'}`}
                      href='/logout'
                    >
                      Logout
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
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

export default DashboardCustomer