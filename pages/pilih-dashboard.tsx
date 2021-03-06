import type { NextPage } from 'next'
import Link from 'next/link'

const PilihDashboard: NextPage = () => {
  return (
    <div className='bg-cyan-50 h-screen'>
      <div className='flex justify-center space-x-4 pt-36'>
        <Link href="/dashboard-customer"><button  className='bg-blue-600 text-white p-3 rounded font-bold'>Dashboard Pelanggan</button></Link>
        {/* <a className='bg-blue-600 text-white p-3 rounded font-bold' href="/dashboard-user">Dashboard Karyawan/Admin</a> */}
      </div>
    </div>
  )
}

export default PilihDashboard