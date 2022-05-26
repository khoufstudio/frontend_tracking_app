import type { NextPage } from 'next'

const Login: NextPage = () => {
  return (
    <div className='bg-gray-200 h-screen'>

      {/* form login */}
      <div className='p-8'>
        <div className='bg-white flex flex-col w-96 mx-auto p-7 mt-10'>
          <p className='text-center mb-4 font-bold text-2xl'>Login</p>
          <div className="mb-3">
            <input className='border p-3 w-full' type="text" name='username' placeholder='Username' />
          </div>
          <div className="mb-3">
            <input className='border p-3 w-full' type="text" name='password' placeholder='Password' />
          </div>
          <a href='/dashboard' className='bg-blue-800 p-3 font-bold hover:bg-gray-500 text-white text-center'>
            Login
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login