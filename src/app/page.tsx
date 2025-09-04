import HomePageClient from './HomePageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CodeQuest: Vault Edition - A UCSC IEEE CTF Hackathon',
  description: 'Join CodeQuest: Vault Edition, a Capture the Flag (CTF) hackathon by UCSC IEEE Student Branch. Enhance your cybersecurity skills, compete for prizes, and network with professionals.',
  keywords: ['CodeQuest', 'Vault Edition', 'CTF', 'Capture the Flag', 'hackathon', 'cybersecurity', 'UCSC', 'IEEE', 'undergraduate', 'prizes', 'competition'],
};

export default function Home() {
  const words = [
    'UCSC',
    'IEEE',
    'CODEQUEST',
    'CTF',
    'HACKATHON',
    'FINAL',
    'HACK',
    'CODE',
    'VAULT',
    'WORD',
  ];

  let flag = '';
  for (let i = 0; i < 3; i++) {
    flag += words[Math.floor(Math.random() * words.length)];
  }

  if (flag.length % 3 === 0) {
    flag += 'a';
  }

  const encodedFlag = Buffer.from(flag).toString('base64');

  return <HomePageClient flag={encodedFlag} />;}