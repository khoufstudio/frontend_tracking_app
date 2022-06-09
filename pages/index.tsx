import { Dialog, Transition } from "@headlessui/react"
import { CheckIcon } from "@heroicons/react/solid"
import { NextPage } from "next"
import { Fragment, useState } from "react"


const Home: NextPage = () => {
  let [isOpen, setIsOpen] = useState(false)
  
  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* form check kalibrasi */}
      <div className="fixed inset-0 flex items-center justify-center bg-cyan-600 h-screen">
        <div className="md:w-[600px] w-100">
          <h2 className="text-white font-semibold text-2xl mb-8">Lacak Kalibrasi!</h2>
          <div className="flex md:flex-row flex-col mb-56">
            <input type="text" className="p-5 rounded mr-4 w-full" placeholder="Masukan No RESI Kalibrasi" />
            <button className="bg-slate-700 text-white rounded px-14 p-5 md:mt-0 mt-4 h-full" onClick={openModal}>Lacak</button>
          </div>
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
                  No RESI: <span className="font-bold text-blue-600">202206010017XAFD</span>
                </Dialog.Title>
                <Dialog.Description>
                  {/* progress bar */}
                  <div className="flex justify-between mb-8">
                    {['Konfirmasi Payment', 'Proses Dokumen', 'Konfirmasi Bayar', 'Sertifikat Selesai'].map((value, index) => (
                      <div key={index} className="flex-grow">
                        <p className="text-center mb-5">{value}</p>
                        <div className="flex items-center">
                          {index == 0 
                            ? <div className="h-2 w-full"></div>
                            : <div className="h-2 w-full bg-blue-600"></div>
                          }
                          <div className="rounded-full w-10 h-10 bg-blue-600">
                            <CheckIcon className='h-8 m-1 text-white'/> 
                          </div>
                          {index == 3 
                            ? <div className="h-2 w-full "></div>
                            : <div className="h-2 w-full bg-blue-600"></div>
                          }
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* end of progress bar */}
                  <button className="bg-red-600 text-white rounded p-3">Download Sertifikat</button>
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