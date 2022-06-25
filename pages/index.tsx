import { Dialog, Transition } from "@headlessui/react"
import { CheckIcon, ExclamationIcon } from "@heroicons/react/solid"
import { NextPage } from "next"
import { Fragment, useState } from "react"

interface Resi {
  no: string,
  step: number
}

const listOrderNumber: Array<Resi> = [
  {no: '202206010017XA8D', step: 2}, 
  {no: '202206010017XA99', step: 1}, 
  {no: '202206010017X8FD', step: 3}, 
  {no: '202206010017X8XX', step: 4}, 
]

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [orderNumber, setOrderNumber] = useState('')
  const [formError, setFormError] = useState(false)
  const [orderDetail, setOrderDetail] = useState<Resi>({no: "", step: 0})
  const [wordingError, setWordingError] = useState('Resi Tidak Ditemukan')
  
  const handleSubmit = (e: any) => {
    e.preventDefault()
    let result: Resi | undefined

    if (orderNumber == "") {
      result = undefined
      setWordingError("No Resi tidak boleh kosong!")
    } else {
      result = listOrderNumber.find(detailOrderNumber => detailOrderNumber.no == orderNumber)
      setWordingError("Resi Tidak Ditemukan")
    }

    if (result != undefined) {
      setOrderDetail(result)
      setIsOpen(true)
      setFormError(false)
    } else {
      setFormError(true)
    }
  }

  const closeModal = () => {
    setFormError(false)
    setIsOpen(false)
  }

  return (
    <>
      {/* form check kalibrasi */}
      <div className="fixed inset-0 flex items-center justify-center bg-cyan-600 h-screen">
        <div className="md:w-[600px] w-100">
          <h2 className="text-white font-semibold text-2xl mb-8">Lacak Kalibrasi!</h2>
          <div className={`flex mb-4 bg-red-100 rounded p-4 ${formError ? "block" : "hidden"}`}>
            <ExclamationIcon className="h-6 text-red-600 mr-2" />
            <p className="text-red-600 font-bold">{wordingError}</p>
          </div>
          <form onSubmit={handleSubmit} className="flex md:flex-row flex-col mb-56">
            <div className="mr-4 w-full">
              <input value={orderNumber} type="text" className="p-5 rounded w-full" placeholder="Masukan No RESI Kalibrasi" onChange={ e => setOrderNumber(e.target.value)} />
            </div>
            <button type="submit" className="bg-slate-700 text-white rounded px-14 p-5 md:mt-0 mt-4 h-full">Lacak</button>
          </form>
        </div>
      </div>
      {/* end of form check kalibrasi */}

      {/* modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <div className="fixed inset-0 overflow-y-auto bg-black/30">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Dialog.Panel className="w-screen md:w-[800px] transform overflow-hidden bg-white p-6 rounded">
                <Dialog.Title className="mb-10 text-xl text-left pl-6">
                  No RESI: <span className="font-bold text-blue-600">{orderNumber}</span>
                </Dialog.Title>
                <Dialog.Description>
                  {/* progress bar */}
                  <div className="flex justify-between mb-8">
                    {['Persetujuan Pemesanan', 'Proses Dokumen', 'Konfirmasi Bayar', 'Sertifikat Selesai'].map((value, index) => (
                      <div key={index} className="flex-grow">
                        <p className="text-center mb-5">{value}</p>
                        <div className="flex items-center">
                          <div className={`h-2 w-full ${(index != 0 && index >= orderDetail.step) ? 'bg-gray-400' : index > 0 && 'bg-blue-600'}`}></div>
                          <div className={`rounded-full w-10 h-10 ${(index < orderDetail.step) ? 'bg-blue-600' : 'bg-gray-400'}`}>
                            <CheckIcon className='h-8 m-1 text-white'/> 
                          </div>
                          <div className={`h-2 w-full ${((index + 1) != 0 && (index + 1) < orderDetail.step) ? 'bg-blue-600' : (index + 1) <= 3 && 'bg-gray-400'}`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* end of progress bar */}
                  {orderDetail.step == 4 &&
                    <button className="bg-red-600 text-white rounded p-3">Download Sertifikat</button>
                  }
                </Dialog.Description>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* end of modal */}
    </>
  )
}

export default Home