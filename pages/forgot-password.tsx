import type { NextPage } from 'next'
import Link from "next/link";

const ForgotPassword: NextPage = () => {
  return (
    <div className='bg-cyan-500 h-screen'>

      {/* form login */}
      <div className='p-8'>
        <div className='bg-white flex flex-col w-96 mx-auto p-7 mt-10 drop-shadow-md rounded'>
          <p className='text-center mb-4 font-bold text-2xl text-slate-600 tracking-wider'>Lupa Password</p>
          <p className='text-slate-400 text-center mb-2'>Masukan alamat email untuk melakukan permintaan reset password.</p>
          <div className="mb-3">
            <input className='border p-3 w-full' type="email" name='email' placeholder='Email' />
          </div>
          <Link href='/login' className='bg-sky-600 hover:bg-sky-700 p-3 font-bold text-white text-center rounded mt-3'>
            Kirim Permintaan
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword