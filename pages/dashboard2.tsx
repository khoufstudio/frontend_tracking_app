import { NextPage } from 'next'

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
      <nav className='bg-white border-solid border-b-2 border-b-slate-300 p-3 fixed w-screen'>
        <ul className='flex justify-end pr-4'>
          <li className='text-slate-500 font-semibold'>John Doe</li>
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