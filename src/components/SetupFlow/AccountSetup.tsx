'use client';
//
import Image from 'next/image';
import { useRef, useState, ChangeEvent } from 'react';

interface Props {
  handleNext: () => void;
  setPdata: React.Dispatch<React.SetStateAction<PageData>>;
  pdata: PageData;
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

const AccountSetup: React.FC<Props> = ({ handleNext, setPdata, pdata }) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    hiddenFileInput.current?.click();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = e.target.files?.[0];
    if (fileUploaded) {
      const img = URL.createObjectURL(fileUploaded);
      setImage(img);
      setPdata({ ...pdata, photo: fileUploaded });
    }
  };

  return (
    <form className="w-full">
      <div className="w-full border-b border-gray-300 flex flex-col gap-4">
        <h1 className="font-bold text-lg">Account Setup</h1>
        <div className="w-full">
          <div className="w-full flex justify-between items-center mb-5">
            <div>
              {image ? (
                <Image
                  src={image}
                  width={100}
                  height={100}
                  className="rounded-full"
                  alt=""
                />
              ) : (
                <Image
                  src="/user.png"
                  className=""
                  width={100}
                  height={100}
                  alt=""
                />
              )}
            </div>
            <div className="hidden md:block">
              <p>The photo will appear on all documents (Bio-date etc)</p>
              <p>Preferred image size 240px X 240px. Maximum 2mb</p>
            </div>
            <div>
              <input
                name="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                type="file"
                className="hidden"
              />
              <button
                onClick={handleClick}
                className="bg-[#351A8D] text-white md:bg-white md:text-[#351A8D] font-semibold py-2 px-4 md:py-0 md:px-0 rounded-md"
              >
                Upload Photo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-4">
        <div className="w-full flex flex-col md:flex-row justify-between gap-6">
          <div className="w-full md:w-5/12 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[#351A8D]">Full Name</label>
              <input
                value={pdata.fullName}
                onChange={e => setPdata({ ...pdata, fullName: e.target.value })}
                type="text"
                placeholder="Johnny Sins"
                className="p-3 rounded-md text-sm border border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[#351A8D]">
                Admission Number
              </label>
              <input
                value={pdata.admissionNumber}
                onChange={e =>
                  setPdata({ ...pdata, admissionNumber: e.target.value })
                }
                type="text"
                placeholder="EUCSs20712"
                className="p-3 rounded-md text-sm border border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[#351A8D]">
                Date of Birth
              </label>
              <input
                value={pdata.dateOfBirth}
                onChange={e =>
                  setPdata({ ...pdata, dateOfBirth: e.target.value })
                }
                type="date"
                placeholder="01-08-1899"
                className="p-3 rounded-md text-sm border border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[#351A8D]">
                State of Origin
              </label>
              <select
                value={pdata.stateOfOrigin}
                onChange={e =>
                  setPdata({ ...pdata, stateOfOrigin: e.target.value })
                }
                className="p-3 rounded-md text-sm border border-gray-300"
              >
                <option>Select State</option>
                <option id="anambra">Anambra</option>
                <option id="abuja">Abuja</option>
              </select>
            </div>
          </div>
          <div className="w-full md:w-5/12 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[#351A8D]">Address</label>
              <textarea
                name="address"
                value={pdata.address}
                onChange={e => setPdata({ ...pdata, address: e.target.value })}
                rows={3}
                placeholder="DItm201924"
                className="p-3 resize-none rounded-md border border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-[#351A8D]">Gender</label>
              <select
                value={pdata.gender}
                onChange={e => setPdata({ ...pdata, gender: e.target.value })}
                className="p-3 rounded-md text-sm border border-gray-300"
              >
                <option>Select Gender</option>
                <option id="female">Female</option>
                <option id="male">Male</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-full flex items-end justify-end mt-6 mb-12">
          <button
            className="bg-[#4221B0] text-white rounded-md py-2 px-4"
            onClick={() => handleNext()}
          >
            Save and Continue
          </button>
        </div>
      </div>
    </form>
  );
};

export default AccountSetup;
