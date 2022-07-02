import { PlusIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { ReactElement } from 'react';
import AdminLayout from "../../components/layouts/admin";


const Order = () => {
  return (
    <>
      <div className="flex justify-between mb-4">
        <h2 className='mb-2 text-2xl text-slate-600 font-bold'>Pesanan</h2>
        <Link href="orders/add">
          <button className="bg-blue-600 text-white px-6 rounded flex gap-2 items-center">
            <PlusIcon className="w-6 text-slate-200"/> <div>Tambah</div>
          </button>
        </Link>
      </div>
      <div className="bg-white">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-200">
              <tr className="border-b-gray-300 border-b-2">
                <td className="text-slate-500 font-semibold w-16 text-center">No</td>
                <td className="p-3 pl-5 text-slate-500 font-semibold">No Order</td>
                <td className="p-3 pl-5 text-slate-500 font-semibold">Tanggal Masuk</td>
                <td className="p-3 pl-5 text-slate-500 font-semibold">SPM</td>
                <td className="p-3 pl-5 text-slate-500 font-semibold"></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 pl-5 text-slate-600">1</td>
                <td className="p-3 pl-5 text-slate-600">34343434535434534</td>
                <td className="p-3 pl-5 text-slate-600">23-04-2023</td>
                <td className="p-3 pl-5 text-slate-600">5 Hari</td>
                <td className="p-3 pl-5 text-slate-600"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

Order.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export default Order