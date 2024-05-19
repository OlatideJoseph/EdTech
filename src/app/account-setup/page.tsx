'use client';
import AdminNavbar from '@/components/AdminNavbar';
import AccountSetup from '@/components/SetupFlow/AccountSetup';
import EducationSetup from '@/components/SetupFlow/EducationSetup';
import ParentSetup from '@/components/SetupFlow/ParentSetup';
import { useState } from 'react';

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

const AccountSetupPage: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [pdata, setPdata] = useState<PageData>({
    fullName: '',
    admissionNumber: '',
    dateOfBirth: '',
    stateOfOrigin: '',
    address: '',
    gender: '',
    birthCertificate: null,
    sssce: null,
    medicalCertificate: null,
    guardianId: null,
    otherCertificates: null,
    fatherName: '',
    fatherNo: '',
    fatherOccupation: '',
    fatherBizAddress: '',
    motherName: '',
    motherNo: '',
    motherOccupation: '',
    motherBizAddress: '',
    photo: null
  });

  const handleNext = () => {
    setPage(currPage => currPage + 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can access all the uploaded files from the `pdata` state object
    console.log('Uploaded Files:', pdata);
  };

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <AccountSetup
          handleNext={handleNext}
          pdata={pdata}
          setPdata={setPdata}
        />
      );
    } else if (page === 1) {
      return (
        <EducationSetup
          handleNext={handleNext}
          pdata={pdata}
          setPdata={setPdata}
        />
      );
    } else {
      return (
        <ParentSetup
          handleSubmit={handleSubmit}
          pdata={pdata}
          setPdata={setPdata}
        />
      );
    }
  };

  return (
    <div className="w-full">
      <AdminNavbar />
      <div className="w-11/12 mx-auto pt-24">
        <div className="w-full md:w-10/12 mx-auto">{PageDisplay()}</div>
      </div>
    </div>
  );
};

export default AccountSetupPage;
