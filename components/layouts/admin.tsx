import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, MenuIcon, XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type DashboardLayoutProps = {
  children: React.ReactNode
}

const AdminLayout = ({ children } : DashboardLayoutProps ) => {
  const [menuMobileOpen, setMenuMobileOpen] = useState(false)

  return (
    <>
      <div className='bg-blue-50'>
        {/* sidebar */}
        <div className={'bg-slate-900 md:w-56 text-white h-screen md:fixed md:z-10 md:block ' + `${menuMobileOpen ? 'w-3/4' : 'hidden'}`}>
          <div className='flex justify-between pl-5 pr-10 py-3'>
            <Image src='/images/global_quality_logo.jpg' height={40} width={40} alt='Logo' />

            <XIcon className='w-6 block md:hidden' onClick={() => setMenuMobileOpen(false)} />
          </div> 
          <h3 className='pl-5 text-slate-500 text-sm'>
            Halaman
          </h3>
          <nav>
            <ul>
              {[
                ['Beranda', '/dashboard'],
                ['Pesanan', '/orders'],
                ['Keuangan', '/finances'],
              ].map(([title, url]) => (
                <Link href={url} key={title}>
                  <li className='pl-5 pr-10 py-3 hover:cursor-pointer hover:bg-slate-600' onClick={() => setMenuMobileOpen(false)}>{title}</li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
        {/* end of sidebar */}

        {/* header */}
        <nav className='bg-white border-b-slate-300 p-3 fixed w-screen shadow-md shadow-slate-100'>
          <ul className='ml-0 md:ml-[230px]'>
            <li className='flex w-100 justify-between'>
              <div>
                <MenuIcon onClick={() => setMenuMobileOpen(true)} className='text-slate-400 w-6 md:hidden block' />
              </div>
              <Menu>
                <div className='relative text-sm'>
                  <Menu.Button className='items-center flex text-sm justify-end text-slate-500 w-56 hover:cursor-pointer'>
                    <span>Operator</span>
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
                    <Menu.Items className='absolute left-0 w-full text-slate-500 shadow mt-3'>
                      <Menu.Item>
                        {({active}) => (
                          <Link href='/pengaturan'>
                            <p className={`${active ? 'bg-slate-100' : 'bg-white'}` + ' block p-3 border-b-2 border-b-slate-100 hover:cursor-pointer'}>
                            Pengaturan
                            </p>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({active}) => (
                          <Link href='/login'>
                            <p className={`${active ? 'bg-slate-100' : 'bg-white'}` + ' block p-3 border-b-2 border-b-slate-100 hover:cursor-pointer'}>
                            Keluar
                            </p>
                          </Link>
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
        <main  className='px-5 pt-20 md:ml-[230px] ml-0  min-h-screen'>{children}</main>
      </div>
    </>
  )
}

export default AdminLayout