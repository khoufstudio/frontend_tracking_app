import Link from "next/link";
import { ReactElement } from 'react';
import AdminLayout from "../../components/layouts/admin";

interface Finance {
  id: number,
  noOrder: string,
  dateOrder: Date,
  paidOff: boolean
}

const dataFinances: Array<Finance> = [
  {id: 1, noOrder: '202206010017XA99', dateOrder: new Date('2022-01-01'), paidOff: false },
  {id: 2, noOrder: '202206010017XA8D', dateOrder: new Date('2022-01-01'), paidOff: true }
]

const buttonAction = (paidOff: boolean) => {
  if (paidOff) {
    return <button className="bg-blue-500 text-white p-2 px-4 rounded text-xs font-bold">Download</button>
  }

  return <button className="bg-red-500 text-white p-2 px-4 rounded text-xs font-bold">Upload</button>
}

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
            {dataFinances.map((finance, index) => (
              <tr key={index}>
                <td className="p-3 pl-5 text-slate-600">{index + 1}</td>
                <td className="p-3 pl-5 text-slate-600">{finance.noOrder}</td>
                <td className="p-3 pl-5 text-slate-600">{finance.dateOrder.toLocaleDateString()}</td>
                <td className="p-3 pl-5 text-slate-600">{finance.paidOff ? 'Lunas' : 'Belum Lunas'}</td>
                <td className="p-3 pl-5 text-slate-600">{buttonAction(finance.paidOff)}</td>
              </tr>
            ))}
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