import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className='bg-cyan-600 h-screen'>
      {/* Navbar */}
      <nav className='bg-white border-solid shadow-sm absolute w-full z-10'>
        <div className="p-5 flex justify-between">
          <Image src='/images/global_quality_logo.jpg' height={40} width={40} alt="Logo" />
          <div>
            <ul>
              <li>
                <Link href="/login">
                  <button className='bg-sky-600 hover:bg-sky-700 text-white px-7 py-2 rounded font-bold'>Login / Daftar</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End of Navbar */}

      <h1 className='text-center text-5xl font-bold pt-60 text-white drop-shadow-xl'>Sistem Kalibrasi Online</h1>
      <p className='text-slate-300 text-center text-xl font-medium mt-2'>By Global Quality</p>
      <Image className='w-screen opacity-5 absolute top-0 h-screen' src="/images/background.jpg" alt="" layout='fill' />
    </div>
  )
}

export default Home