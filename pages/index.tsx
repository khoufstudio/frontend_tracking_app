import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-cyan-600 h-screen">
      <div className="pt-44 flex justify-center">
        <div>
          <h2 className="text-white font-semibold text-2xl mb-8">Lacak Kalibrasi!</h2>
          <div className="flex">
            <input type="text" className="p-5 rounded w-[600px] mr-4" placeholder="Masukan No RESI Kalibrasi" />
            <button className="bg-slate-800 text-white rounded px-14">Lacak</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;