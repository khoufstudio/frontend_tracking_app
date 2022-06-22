import { CalculatorIcon, CurrencyDollarIcon, CheckCircleIcon } from "@heroicons/react/solid";
import { ReactElement } from 'react';
import AdminLayout from "../../components/layouts/admin";


const AddOrder = () => {
  return (
    <>
      <h2 className='mb-2 text-2xl text-slate-700'>Pesanan</h2>
      <table>
        <tbody>
          <tr>
            <td>No</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

AddOrder.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export default AddOrder