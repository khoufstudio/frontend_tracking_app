import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='bg-gray-50 h-screen'>
      {/* Navbar */}
      <nav className='bg-white border-solid border-b-2 border-b-slate-200'>
        <div className="p-6 flex justify-between">
          <a className='font-bold' href="#">Logo</a>
          <div>
            <ul>
              <li>
                <a href="/login">
                  <button className="bg-sky-600 hover:bg-sky-700 text-white px-7 py-2 rounded font-bold">Login</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End of Navbar */}

      {/* Card Tracking */}
      {/* End Card Tracking */}

      <h1>Home</h1>
    </div>
  )
}

export default Home