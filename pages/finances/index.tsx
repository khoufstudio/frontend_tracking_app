import { PlusIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { ReactElement } from 'react';
import AdminLayout from "../../components/layouts/admin";


const Finances = () => {
  return (
    <>
      <div className="flex justify-between mb-4">
        <h2 className='mb-2 text-2xl text-slate-600 font-bold'>Keuangan</h2>
      </div>
      <div className="bg-white">
        <table className="table-fixed w-full">
          <thead className="bg-slate-200">
            <tr className="border-b-gray-300 border-b-2">
              <td className="text-slate-500 font-semibold w-16 text-center">No</td>
              <td className="p-3 pl-5 text-slate-500 font-semibold">No Order</td>
              <td className="p-3 pl-5 text-slate-500 font-semibold">Tanggal Masuk</td>
              <td className="p-3 pl-5 text-slate-500 font-semibold">Keterangan</td>
              <td className="p-3 pl-5 text-slate-500 font-semibold">Bukti Pembayaran</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 pl-5 text-slate-600">1</td>
              <td className="p-3 pl-5 text-slate-600">34343434535434534</td>
              <td className="p-3 pl-5 text-slate-600">23-04-2023</td>
              <td className="p-3 pl-5 text-slate-600">Lunas</td>
              <td className="p-3 pl-5 text-slate-600">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

Finances.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export default Finances