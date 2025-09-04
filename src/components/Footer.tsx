import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import LinkedinIcon from './LinkedinIcon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Image src="/cq_logo.png" alt="CodeQuest Logo" width={200} height={50} />
          </div>
          <div className="flex items-center">
            <Image src="/sb_logo.png" alt="IEEE SB Logo" width={200} height={50} />
          </div>
        </div>
        <div className="mt-8 text-center md:text-left">
          <p className="text-gray-400 text-xl">
            CodeQuest is a competition designed to challenge and inspire developers. Join us for a chance to win exciting prizes and showcase your coding skills!
          </p>
        </div>
        <div className="mt-8 flex justify-center md:justify-start space-x-6">
          <Link href="https://www.facebook.com/IEEE.UCSC" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </Link>
          <Link href="https://www.instagram.com/ucsc.ieee/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </Link>
          <Link href="https://www.linkedin.com/company/ieee-student-branch-ucsc/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon />
          </Link>
        </div>
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} IEEE Student Branch, University of Colombo School of Computing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;