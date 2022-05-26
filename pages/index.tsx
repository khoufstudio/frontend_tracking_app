import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='bg-gradient-to-b from-white via-blue-50 to-cyan-100 t h-screen'>
      {/* Navbar */}
      <nav className='bg-white border-solid shadow-sm'>
        <div className="p-5 flex justify-between">
          <img src='/images/global_quality_logo.jpg' className='h-10' alt="Logo" />
          <div>
            <ul>
              <li>
                <a href="/login">
                  <button className="bg-sky-600 hover:bg-sky-700 text-white px-7 py-2 rounded font-bold">Login / Daftar</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End of Navbar */}

      {/* Card Tracking */}
      {/* End Card Tracking */}

      <h1 className='text-center text-5xl font-bold mt-36 text-sky-700'>Sistem Kalibrasi Online</h1>
      <p className='text-slate-400 text-center text-xl font-medium mt-2'>By Global Quality</p>
    </div>
  )
}

export default Home