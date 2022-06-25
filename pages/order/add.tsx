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
          <div>
            <label className="block" htmlFor="kepada">Kepada</label>
            <input className="border-2 p-2 text-sm" id="kepada" type="text" value="" />
          </div>
          <div>
            <label className="block" htmlFor="kontak_person">Kontak Person</label>
            <input className="border-2 p-2 text-sm" id="kontak_person" type="text" value="" />
          </div>
          <div>
            <label className="block" htmlFor="alamat">Alamat</label>
            <input className="border-2 p-2 text-sm" id="alamat" type="text" value="" />
          </div>
          <div>
            <label className="block" htmlFor="telepon">Telepon/Hp</label>
            <input className="border-2 p-2 text-sm" id="telepon" type="text" value="" />
          </div>
          <div>
            <label className="block" htmlFor="email">Email</label>
            <input className="border-2 p-2 text-sm" id="email" type="text" value="" />
          </div>
          <div>
            <label className="block" htmlFor="alamat_sertifkat">Alamat Sertifikat</label>
            <input className="border-2 p-2 text-sm" id="alamat_sertifkat" type="text" value="" />
          </div>
          <div>
            <label className="block" htmlFor="alamat_pengiringan_sertifkat">Alamat Pengiringan Sertifikat</label>
            <input className="border-2 p-2 text-sm" id="alamat_pengiringan_sertifkat" type="text" value="" />
          </div>
          <div>
            <label className="block" htmlFor="no_npwp">No. NPWP</label>
            <input className="border-2 p-2 text-sm" id="no_npwp" type="text" value="" />
          </div>
          <div>
            <label className="block" htmlFor="alamat_npwp">Alamat NPWP</label>
            <input className="border-2 p-2 text-sm" id="alamat_npwp" type="text" value="" />
          </div>
          <div>
            <label className="block" htmlFor="alamat_tagihan">Alamat Tagihan</label>
            <input className="border-2 p-2 text-sm" id="alamat_tagihan" type="text" value="" />
          </div>
          <div>
            <label className="block" htmlFor="kontak_person_keuangan">Kontak Person Bag. Keuangan</label>
            <input className="border-2 p-2 text-sm" id="kontak_person_keuangan" type="text" value="" />
          </div>
          <div>
            <label className="block" htmlFor="status">Status PO/Non PO</label>
            <input className="border-2 p-2 text-sm" id="status" type="text" value="" />
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-gray-400 p-2 px-4 text-white rounded">Batal</button>
          <button className="bg-blue-600 p-2 px-4 text-white rounded" type="submit">Simpan</button>
        </div>
      </form>
    </>
  )
}

AddOrder.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export default AddOrder