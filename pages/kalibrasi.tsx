import { ReactElement } from 'react'
import AdminLayout from '../components/layouts/admin'

const Kalibrasi = () => {
  return (
    <>
      {/* main page */}
      <div>test</div>
      {/* end of main page */}
      </>
  )
}

Kalibrasi.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}
export default Kalibrasi