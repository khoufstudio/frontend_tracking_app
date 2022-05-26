import { NextPage } from 'next'
import { ChevronDownIcon } from "@heroicons/react/solid";

const Dashboard: NextPage = () => {
  return (
    <div className='bg-blue-50'>
      {/* sidebar */}
      <div className='bg-slate-800 w-56 text-white h-screen fixed z-10'>
        <div className="pl-5 pr10 py-3">
          <a className='font-bold text-lg' href="#">Logo</a>
        </div> 
        <nav>
          <ul>
            <li className='pl-5 pr-10 py-3 hover:cursor-pointer hover:bg-slate-600'>Dashboard</li>
            <li className='pl-5 pr-10 py-3 hover:cursor-pointer hover:bg-slate-600'>Profile</li>
            <li className='pl-5 pr-10 py-3 hover:cursor-pointer hover:bg-slate-600'>Settings</li>
            <li className='pl-5 pr-10 py-3 hover:cursor-pointer hover:bg-slate-600'>Logout</li>
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
      <main className='p-5 ml-[230px]'>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
        <p>test</p>
      </main>
      {/* end of main page */}
    </div>
  )
}

export default Dashboard