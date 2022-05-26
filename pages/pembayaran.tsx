import { ReactElement } from 'react'
import AdminLayout from '../components/layouts/admin'

const Pembayaran = () => {
  return (
    <>
      {/* main page */}
      <div>pembayaran</div>
      {/* end of main page */}
      </>
  )
}

Pembayaran.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export default Pembayaran