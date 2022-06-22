import { CalculatorIcon, CurrencyDollarIcon, CheckCircleIcon } from "@heroicons/react/solid";
import { ReactElement } from 'react';
import AdminLayout from "../../components/layouts/admin";


const Order = () => {
  return (
    <>
      <h2 className='mb-2 text-2xl text-slate-700'>Pesanan</h2>
      <div className="bg-white">
        <table className="table-fixed w-full">
          <thead className="bg-slate-200">
            <tr>
              <td className="p-3 pl-5 text-slate-600">No</td>
              <td className="p-3 pl-5 text-slate-600">No Order</td>
              <td className="p-3 pl-5 text-slate-600">Tanggal Masuk</td>
              <td className="p-3 pl-5 text-slate-600">SPM</td>
              <td className="p-3 pl-5 text-slate-600"></td>
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
    </>
  )
}

Order.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export default Order