import { ExclamationIcon } from '@heroicons/react/solid'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'

const Login: NextPage = () => {
  const [formError, setFormError] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [messageFormError, setMessageFormError] = useState("Username / Password salah")

  const submitForm = () => {
    setFormError(true)

    // check if username / password are empty
    if (username == '' || password == '') {
      setMessageFormError("Username dan Password wajib diisi")
    } else {
      setMessageFormError("Username / Password salah")
    }
  }

  return (
    <div className='bg-cyan-500 h-screen'>
      {/* form login */}
      <div className='p-8'>
        <div className={`flex bg-red-100 rounded p-4 ${formError ? "block" : "hidden"} w-96 mx-auto`}>
          <ExclamationIcon className="h-6 text-red-600 mr-2" />
          <p className="text-red-600 font-bold">{messageFormError}</p>
        </div>
        <div className='bg-white flex flex-col w-96 mx-auto p-7 mt-3 drop-shadow-md rounded'>
          <p className='text-center mb-4 font-bold text-2xl text-slate-600 tracking-wider'>Masuk Akun</p>
          <div className="mb-3">
            <input className='border p-3 w-full' type="text" name='username' placeholder='Username' onChange={e => setUsername(e.target.value)} />
          </div>
          <div className="mb-3">
            <input className='border p-3 w-full' type="text" name='password' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
          </div>
          <button className='bg-sky-600 hover:bg-sky-700 p-3 font-bold text-white text-center rounded' onClick={submitForm}>Login</button>
          <div className='flex justify-between  my-2'>
            <div>
              <input type="checkbox" name="ingat_saya" id="ingat_saya" /> Ingat saya
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login