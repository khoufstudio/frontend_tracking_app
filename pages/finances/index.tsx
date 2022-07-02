import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactElement, useState } from 'react';
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


const Finances = () => {
  const [isOpenUploadModal, setIsOpenUploadModal] = useState(false)

  const handleClickUpload = () => {
    setIsOpenUploadModal(true)
  }

  const closeModal = () => {
    setIsOpenUploadModal(false)
  }

  const buttonAction = (paidOff: boolean) => {
    if (paidOff) {
      return <button className="bg-blue-500 text-white p-2 px-4 rounded text-xs font-bold">Unduh</button>
    }

    return <button className="bg-red-500 text-white p-2 px-4 rounded text-xs font-bold" onClick={handleClickUpload}>Unggah</button>
  }
  
  return (
    <>
      <div className="flex justify-between mb-4">
        <h2 className='mb-2 text-2xl text-slate-600 font-bold'>Keuangan</h2>
      </div>
      <div className="bg-white">
        <div className="overflow-x-auto">
          <table className="w-full">
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
      </div>

      {/* modal upload */}
      <Transition appear show={isOpenUploadModal} as={Fragment}>
        <Dialog as='div' className="relative z-10" onClose={closeModal}>
          <div className="fixed inset-0 overflow-y-auto bg-black/30">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Dialog.Panel className="w-screen md:w-[800px] transform overflow-hidden bg-white p-6 rounded">
                <Dialog.Title className="mb-4 font-bold text-xl">Unggah Kuitansi</Dialog.Title>
                <Dialog.Description>
                  <input type="file" name="upload_kuitansi" id="upload_kuitansi" />
                </Dialog.Description>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* end of modal upload */}
    </>
  )
}

Finances.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export default Finances