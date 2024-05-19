import { Dispatch, SetStateAction, FormEvent } from 'react';

interface Props {
  pdata: PageData;
  setPdata: Dispatch<SetStateAction<PageData>>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

interface PageData {
  fullName: string;
  admissionNumber: string;
  dateOfBirth: string;
  stateOfOrigin: string;
  address: string;
  gender: string;
  birthCertificate: File | null;
  sssce: File | null;
  medicalCertificate: File | null;
  guardianId: File | null;
  otherCertificates: File | null;
  fatherName: string;
  fatherNo: string;
  fatherOccupation: string;
  fatherBizAddress: string;
  motherName: string;
  motherNo: string;
  motherOccupation: string;
  motherBizAddress: string;
  photo: File | null;
}

const ParentSetup: React.FC<Props> = ({ pdata, setPdata, handleSubmit }) => {
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="w-full border-b border-gray-300 pb-4 md:pb-8">
        <h1 className="font-bold text-lg">Parents / Guardians</h1>
        <p className="text-gray-400 text-sm md:text-base">
          Parent/ Guardian contacts
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between gap-6 mt-4 md:mt-8">
        <div className="w-full md:w-5/12 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-[#1A0D46]">Fathers Name</label>
            <input
              value={pdata.fatherName}
              onChange={e => setPdata({ ...pdata, fatherName: e.target.value })}
              type="text"
              className="border outline-none rounded-md p-3 text-sm"
              placeholder="Johnny Sins"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-[#1A0D46]">
              Fathers Phone contact
            </label>
            <input
              value={pdata.fatherNo}
              onChange={e => setPdata({ ...pdata, fatherNo: e.target.value })}
              type="text"
              className="border outline-none rounded-md p-3 text-sm"
              placeholder="DItm201924"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-[#1A0D46]">Occupation</label>
            <input
              value={pdata.fatherOccupation}
              onChange={e =>
                setPdata({ ...pdata, fatherOccupation: e.target.value })
              }
              type="text"
              className="border outline-none rounded-md p-3 text-sm"
              placeholder="Civil Engineer"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-[#1A0D46]">
              Work / Business Address
            </label>
            <textarea
              value={pdata.fatherBizAddress}
              onChange={e =>
                setPdata({ ...pdata, fatherBizAddress: e.target.value })
              }
              rows={3}
              className="resize-none border outline-none rounded-md p-3 text-sm"
              placeholder="DItm201924"
            />
          </div>
        </div>
        <div className="w-full md:w-5/12 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-[#1A0D46]">
              Mothers Maiden Name
            </label>
            <input
              value={pdata.motherName}
              onChange={e => setPdata({ ...pdata, motherName: e.target.value })}
              type="text"
              className="border outline-none rounded-md p-3 text-sm"
              placeholder="Mia khalifa"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-[#1A0D46]">
              Phone Contact
            </label>
            <input
              value={pdata.motherNo}
              onChange={e => setPdata({ ...pdata, motherNo: e.target.value })}
              type="text"
              className="border outline-none rounded-md p-3 text-sm"
              placeholder="DItm201924"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-[#1A0D46]">Occupation</label>
            <input
              value={pdata.motherOccupation}
              onChange={e =>
                setPdata({ ...pdata, motherOccupation: e.target.value })
              }
              type="text"
              className="border outline-none rounded-md p-3 text-sm"
              placeholder="Nurse"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-[#1A0D46]">
              Work/ Biusiness Address
            </label>
            <textarea
              value={pdata.motherBizAddress}
              onChange={e =>
                setPdata({ ...pdata, motherBizAddress: e.target.value })
              }
              rows={3}
              className="resize-none border outline-none rounded-md p-3 text-sm"
              placeholder="DItm201924"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex items-end justify-end mt-6 mb-12">
        <button
          type="submit"
          className="bg-[#4221B0] text-white rounded-md py-2 px-4"
        >
          Save and Continue
        </button>
      </div>
    </form>
  );
};

export default ParentSetup;
