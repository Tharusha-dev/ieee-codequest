import HomePageClient from './HomePageClient';

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

  return <HomePageClient flag={encodedFlag} />;
}