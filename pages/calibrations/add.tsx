import Link from 'next/link';
import { ReactElement } from 'react';
import AdminLayout from "../../components/layouts/admin";

const AddCalibration = () => {
  return (
    <>
      <h2 className='mb-2 text-2xl text-slate-600 font-bold'>Tambah Kalibrasi</h2>
      <form action="">
        <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block" htmlFor="no_order">No Order</label>
            <input className="border-2 p-2 text-sm w-full" id="no_order" type="text" value="202203020AAXXD" disabled />
          </div>
          <div>
            <label className="block" htmlFor="order_date">Tanggal Masuk</label>
            <input className="border-2 p-2 text-sm w-full" id="order_date" type="date" />
          </div>
          <div>
            <label className="block" htmlFor="owner">Owner</label>
            <input className="border-2 p-2 text-sm w-full" id="owner" type="text" value="" />
          </div>
          <div>
            <label className="block" htmlFor="kontak_person">Kontak Person</label>
            <input className="border-2 p-2 text-sm w-full" id="kontak_person" type="text" value="" />
          </div>
          <div>
            <label className="block" htmlFor="alamat">Alamat</label>
            <input className="border-2 p-2 text-sm w-full" id="alamat" type="text" value="" />
          </div>
        </div>
        <div className='flex pb-4'>
          <Link href="/calibrations"><button className="bg-gray-400 p-2 px-4 text-white rounded mr-3">Batal</button></Link>
          <button className="bg-blue-600 p-2 px-4 text-white rounded" type="submit">Simpan</button>
        </div>
      </form>
    </>
  )
}

AddCalibration.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export default AddCalibration