import { FaFileCirclePlus } from 'react-icons/fa6';
import { Dispatch, SetStateAction, ChangeEvent, useRef, useState } from 'react';

interface Props {
  handleNext: () => void;
  pdata: PageData;
  setPdata: Dispatch<SetStateAction<PageData>>;
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

const EducationSetup: React.FC<Props> = ({ handleNext, pdata, setPdata }) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [fileNames, setFileNames] = useState<Record<string, string | null>>({
    birthCertificate: null,
    sssce: null,
    medicalCertificate: null,
    guardianId: null,
    otherCertificates: null
  });

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    key: keyof PageData
  ) => {
    e.preventDefault();
    hiddenFileInput.current?.click();
    // Pass the key to identify which state variable to update
    hiddenFileInput.current?.setAttribute('data-key', key);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.target.getAttribute('data-key') as keyof PageData; // Get the key from the input element
    if (key) {
      const fileUploaded = e.target.files?.[0];
      if (fileUploaded) {
        setPdata({ ...pdata, [key]: fileUploaded }); // Update the corresponding state variable with the file data
        const fileName = fileUploaded.name;
        setFileNames({ ...fileNames, [key]: fileName });
      }
    }
  };

  return (
    <form className="w-full">
      <div className="w-full flex justify-between items-center">
        <div>
          <h1 className="font-bold text-lg">Education</h1>
          <p className="text-gray-400 text-sm md:text-base">
            Upload your Documents
          </p>
        </div>
        <div>
          <button className="bg-[#4221B0] text-white rounded-md py-2 px-4 flex items-center gap-2">
            <FaFileCirclePlus />
            <span>Add Document</span>
          </button>
        </div>
      </div>
      <div className="w-full mt-16 flex flex-col md:flex-row justify-between gap-8">
        <input
          name="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          type="file"
          className="hidden"
        />
        <div className="w-full md:w-5/12 flex flex-col gap-8">
          <div>
            <div className="mb-4">
              <div className="flex">
                <h1 className="font-semibold">Birth Certificate</h1>
                <span className="text-red-500 font-semibold">*</span>
              </div>
            </div>
            <button
              onClick={e => handleClick(e, 'birthCertificate')}
              className="bg-[#F1EDFB] flex justify-between items-center rounded-md p-1 w-full group"
            >
              <div className="border p-4 border-gray-300 text-gray-300 rounded-md group-hover:border group-hover:border-gray-400 duration-500">
                <FaFileCirclePlus className="text-3xl text-[#D9D3EF]" />
              </div>
              {fileNames.birthCertificate && (
                <span className="w-5/12 truncate">
                  {fileNames.birthCertificate}
                </span>
              )}
              <span className="px-2 text-[#1A0D46]">Min. 20mb</span>
            </button>
          </div>
          <div>
            <div className="mb-4">
              <div className="flex">
                <h1 className="font-semibold">
                  First leaving school certificate (SSSCE)
                </h1>
              </div>
            </div>
            <button
              onClick={e => handleClick(e, 'sssce')}
              className="bg-[#F1EDFB] flex justify-between items-center rounded-md p-1 w-full group"
            >
              <div className="border p-4 border-gray-300 text-gray-300 rounded-md group-hover:border group-hover:border-gray-400 duration-500">
                <FaFileCirclePlus className="text-3xl text-[#D9D3EF]" />
              </div>
              {fileNames.sssce && (
                <span className="w-5/12 truncate">{fileNames.sssce}</span>
              )}
              <span className="px-2 text-[#1A0D46]">Min. 20mb</span>
            </button>
          </div>
          <div>
            <div className="mb-4">
              <div className="flex">
                <h1 className="font-semibold">Medical Certificate (if any)</h1>
              </div>
            </div>
            <button
              onClick={e => handleClick(e, 'medicalCertificate')}
              className="bg-[#F1EDFB] flex justify-between items-center rounded-md p-1 w-full group"
            >
              <div className="border p-4 border-gray-300 text-gray-300 rounded-md group-hover:border group-hover:border-gray-400 duration-500">
                <FaFileCirclePlus className="text-3xl text-[#D9D3EF]" />
              </div>
              {fileNames.medicalCertificate && (
                <span className="w-5/12 truncate">
                  {fileNames.medicalCertificate}
                </span>
              )}
              <span className="px-2 text-[#1A0D46]">Min. 20mb</span>
            </button>
          </div>
        </div>
        <div className="w-full md:w-5/12 flex flex-col gap-8">
          <div>
            <div className="mb-4">
              <div className="flex">
                <h1 className="font-semibold">
                  Parents/Guardians Identification
                  <br />
                  (Drivers licence, NiMC etc.)
                </h1>
              </div>
            </div>
            <button
              onClick={e => handleClick(e, 'guardianId')}
              className="bg-[#F1EDFB] flex justify-between items-center rounded-md p-1 w-full group"
            >
              <div className="border p-4 border-gray-300 text-gray-300 rounded-md group-hover:border group-hover:border-gray-400 duration-500">
                <FaFileCirclePlus className="text-3xl text-[#D9D3EF]" />
              </div>
              {fileNames.guardianId && (
                <span className="w-5/12 truncate">{fileNames.guardianId}</span>
              )}
              <span className="px-2 text-[#1A0D46]">Min. 20mb</span>
            </button>
          </div>
          <div>
            <div className="mb-4">
              <div className="flex">
                <h1 className="font-semibold">Others</h1>
              </div>
            </div>
            <button
              onClick={e => handleClick(e, 'otherCertificates')}
              className="bg-[#F1EDFB] flex justify-between items-center rounded-md p-1 w-full group"
            >
              <div className="border p-4 border-gray-300 text-gray-300 rounded-md group-hover:border group-hover:border-gray-400 duration-500">
                <FaFileCirclePlus className="text-3xl text-[#D9D3EF]" />
              </div>
              {fileNames.otherCertificates && (
                <span className="w-5/12 truncate">
                  {fileNames.otherCertificates}
                </span>
              )}
              <span className="px-2 text-[#1A0D46]">Min. 20mb</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex items-end justify-end my-12">
        <button
          onClick={() => handleNext()}
          className="bg-[#4221B0] text-white rounded-md py-2 px-4"
        >
          Save and Continue
        </button>
      </div>
    </form>
  );
};

export default EducationSetup;
