const Faq = () => {
  const faqs = [
    {
      question: "What is CodeQuest: Vault Edition?",
      answer: "It is a Capture the Flag (CTF) hackathon aimed at enhancing cybersecurity skills among undergraduates, organized by the IEEE Student Branch of the University of Colombo School of Computing."
    },
    {
      question: "Who can participate?",
      answer: "The hackathon is aimed at undergraduates. More specific eligibility criteria may be available on the registration page."
    },
    {
      question: "What is the format of the competition?",
      answer: "The competition includes online workshops, an initial online round, and a final on-site physical CTF hackathon."
    },
    {
      question: "What are the prizes?",
      answer: "The prize pool includes 60,000 LKR for 1st place, 40,000 LKR for 2nd place, and 20,000 LKR for 3rd place."
    },
    {
      question: "How can I register?",
      answer: "Registration details are typically announced on the official event website or social media channels. Stay tuned for updates!"
    }
  ];

  return (
    <section className="w-full max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className="bg-gray-800/50 p-4 rounded-lg cursor-pointer">
            <summary className="font-bold text-lg">{faq.question}</summary>
            <p className="mt-2 text-gray-300">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Faq;
