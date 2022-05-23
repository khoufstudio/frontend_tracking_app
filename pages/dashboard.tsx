import { NextPage } from 'next'

const Dashboard: NextPage = () => {
    return (
        <div className='bg-gray-50 h-screen'>
          <nav className='bg-white border-solid border-b-2 border-b-slate-200 p-3'>
            <div className="flex justify-between">
            <a className='font-bold' href="#">Logo</a>
            <div>
              <ul>
                <li></li>
              </ul>
            </div>
            </div>
          </nav>
          <div className='flex'>
            {/* sidebar */}
            <div>
              <nav className='bg-slate-700 w-56 text-white'>
                <ul>
                  <li className='pl-5 pr-10 py-3 hover:cursor-pointer hover:bg-slate-600'>Dashboard</li>
                  <li className='pl-5 pr-10 py-3 hover:cursor-pointer hover:bg-slate-600'>Profile</li>
                  <li className='pl-5 pr-10 py-3 hover:cursor-pointer hover:bg-slate-600'>Settings</li>
                  <li className='pl-5 pr-10 py-3 hover:cursor-pointer hover:bg-slate-600'>Logout</li>
                </ul>
              </nav>
            </div>
            {/* end of sidebar */}
          </div>
          {/* main page */}
          <div></div>
          {/* end of main page */}
        </div>
    )
}

export default Dashboard