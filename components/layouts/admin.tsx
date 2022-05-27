import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

type DashboardLayoutProps = {
  children: React.ReactNode
}

const AdminLayout = ({ children } : DashboardLayoutProps ) => {
  return (
    <>
      <div className='bg-blue-50'>
        {/* sidebar */}
        <div className='bg-slate-900 w-56 text-white h-screen fixed z-10'>
          <div className='pl-5 pr-10 py-3'>
            <img src='/images/global_quality_logo.jpg' className='h-10' alt='Logo' />
          </div> 
          <h3 className='pl-5 text-slate-500 text-sm'>
            Halaman
          </h3>
          <nav>
            <ul>
              <li className='pl-5 pr-10 py-3 hover:cursor-pointer hover:bg-slate-600'><a href='/dashboard-customer'>Beranda</a></li>
              <li className='pl-5 pr-10 py-3 hover:cursor-pointer hover:bg-slate-600'><a href='/kalibrasi'>Kalibrasi</a></li>
              <li className='pl-5 pr-10 py-3 hover:cursor-pointer hover:bg-slate-600'><a href='/pembayaran'>Pembayaran</a></li>
            </ul>
          </nav>
        </div>
        {/* end of sidebar */}

        {/* header */}
        <nav className='bg-white border-b-slate-300 p-3 fixed w-screen shadow-md shadow-slate-100'>
          <ul className='flex justify-end'>
            <li>
              <Menu>
                <div className='relative'>
                  <Menu.Button className='items-center flex font-semibold justify-end text-slate-500 w-56 hover:cursor-pointer'>
                    <span>Pelanggan</span>
                    <ChevronDownIcon className='h-5 w-5 text-slate-500 pt-1'/> 
                  </Menu.Button>
                  
                  {/* Use the Transition component. */}
                  <Transition
                    enter='transition duration-100 ease-out'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-75 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform scale-95 opacity-0'
                  >
                    <Menu.Items className='absolute left-0 w-full text-slate-500 shadow'>
                      <Menu.Item>
                        {({active}) => (
                          <a 
                            className={`${active ? 'bg-slate-100' : 'bg-white'}` + ' block p-3 border-b-2 border-b-slate-100'}
                            href='/pengaturan'
                          >
                            Pengaturan
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({active}) => (
                          <a 
                            className={`${active ? 'bg-slate-100' : 'bg-white'}` + ' block p-3'}
                            href='/login'
                          >
                            Keluar
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </div>
              </Menu>
            </li>
          </ul>
        </nav>
        {/* end of header */}
        <main  className='px-5 pt-20 ml-[230px] min-h-screen'>{children}</main>
      </div>
    </>
  )
}

export default AdminLayout