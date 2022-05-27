import { ReactElement } from 'react'
import AdminLayout from '../components/layouts/admin'

const Pembayaran = () => {
  return (
    <>
      <div className="flex justify-between mb-5 ">
        <h2 className='text-2xl text-slate-700'>Pembayaran</h2>
        <button className="bg-blue-600 text-white rounded px-4">Bayar Tagihan</button>
      </div>
      <div className='bg-white by rounded-sm border border-slate-200'>
        <table className="border-1 border-cyan-100 w-full text-left">
          <thead className='bg-slate-100'>
            <tr>
              <th className='px-4 py-2'>No</th>
              <th className='px-4 py-2'>Nama Alat</th>
              <th className='px-4 py-2'>No Resi</th>
              <th className='px-4 py-2'>Tanggal Kalibrasi</th>
              <th className='px-4 py-2'>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='px-4 pb-2'>1</td>
              <td className='px-4 pb-2'>Alat Timbangan Beton</td>
              <td className='px-4 pb-2'>12313221898989</td>
              <td className='px-4 pb-2'>10-12-2022</td>
              <td className='px-4 pb-2'>Belum Bayar</td>
            </tr>
            <tr>
              <td className='px-4 pb-2'>2</td>
              <td className='px-4 pb-2'>Alat Timbangan Baja</td>
              <td className='px-4 pb-2'>12313221898779</td>
              <td className='px-4 pb-2'>20-12-2022</td>
              <td className='px-4 pb-2'>Lunas</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

Pembayaran.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export default Pembayaran