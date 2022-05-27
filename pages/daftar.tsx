import type { NextPage } from 'next'
import Link from "next/link";

const Daftar: NextPage = () => {
  return (
    <div className='bg-cyan-500 h-screen'>

      {/* form login */}
      <div className='p-8'>
        <div className='bg-white flex flex-col w-96 mx-auto p-7 mt-10 drop-shadow-md rounded'>
          <p className='text-center mb-4 font-bold text-2xl text-slate-600 tracking-wider'>Daftar</p>
          <div className="mb-3">
            <input className='border p-3 w-full' type="text" name='nama_perusahaan' placeholder='Nama Perusahaan' />
          </div>
          <div className="mb-3">
            <input className='border p-3 w-full' type="text" name='username' placeholder='Username' />
          </div>
          <div className="mb-3">
            <input className='border p-3 w-full' type="email" name='username' placeholder='Email' />
          </div>
          <div className="mb-3">
            <input className='border p-3 w-full' type="password" name='password' placeholder='Password' />
          </div>
          <div className="mb-3">
            <input className='border p-3 w-full' type="password_confirmation" name='password' placeholder='Ulangi Password' />
          </div>
          <Link href='/login' className='bg-sky-600 hover:bg-sky-700 p-3 font-bold text-white text-center rounded'>
            Daftar
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Daftar