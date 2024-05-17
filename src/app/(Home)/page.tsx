'use client';
import Cta from '@/components/Home/Cta';
import Hero from '@/components/Home/Hero';
import Reviews from '@/components/Home/Reviews';
import WhySection from '@/components/Home/WhySection';
import Login from '@/components/SetupFlow/Login';
import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
  };

  return (
    <div className="w-full relative">
      {isModalOpen && <Login toggleModal={toggleModal} />}
      <Hero toggleModal={toggleModal} />
      <WhySection />
      <Cta />
      <Reviews />
    </div>
  );
}
