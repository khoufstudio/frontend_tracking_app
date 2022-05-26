import type { NextPage } from 'next'

const Login: NextPage = () => {
  return (
    <div className='bg-cyan-500 h-screen'>

      {/* form login */}
      <div className='p-8'>
        <div className='bg-white flex flex-col w-96 mx-auto p-7 mt-10 drop-shadow-md rounded'>
          <p className='text-center mb-4 font-bold text-2xl text-slate-600 tracking-wider'>Login</p>
          <div className="mb-3">
            <input className='border p-3 w-full' type="text" name='username' placeholder='Username' />
          </div>
          <div className="mb-3">
            <input className='border p-3 w-full' type="text" name='password' placeholder='Password' />
          </div>
          <a href='/dashboard' className='bg-sky-600 hover:bg-sky-700 p-3 font-bold text-white text-center rounded'>
            Login
          </a>

          <div className='flex justify-between  my-2'>
            <div>
              <input type="checkbox" name="ingat_saya" id="ingat_saya" /> Ingat saya
            </div>
            <a href='#' className='text-center font-bold text-blue-900'>Lupa Password?</a>
          </div>
          <hr className='my-4' />
          <p>Belum punya akun? Daftar <a className='font-bold text-blue-800' href="/daftar">disini</a></p>
        </div>
      </div>
    </div>
  )
}

export default Login