import { Dialog, Transition } from "@headlessui/react"
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white p-6 rounded">
                <Dialog.Title>Lacak Kalibrasi</Dialog.Title>
                <Dialog.Description>Lacak Kalibarsi</Dialog.Description>
                <div>
                  {/* chart */}
                  {/* end of chart */}
                  <button>Download Sertifikat</button>
                </div>
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