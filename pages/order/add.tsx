import { CalculatorIcon, CurrencyDollarIcon, CheckCircleIcon } from "@heroicons/react/solid";
import { ReactElement } from 'react';
import AdminLayout from "../../components/layouts/admin";


const AddOrder = () => {
  return (
    <>
      <h2 className='mb-2 text-2xl text-slate-600 font-bold'>Tambah Pesanan</h2>
      <form action="">
        <div className="mb-4">
          <div>
            <label className="block" htmlFor="no_order">No Order</label>
            <input className="border-2 p-2 text-sm" id="no_order" type="text" value="202203020AAXXD" disabled />
          </div>
          <div>
            <label className="block" htmlFor="order_date">Tanggal Masuk</label>
            <input className="border-2 p-2 text-sm" id="order_date" type="date" />
          </div>
        </div>
        <button className="bg-blue-600 p-2 px-4 text-white rounded" type="submit">Simpan</button>
      </form>
    </>
  )
}

AddOrder.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export default AddOrder