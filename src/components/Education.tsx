import React, { useState } from 'react';

interface EducationDetails {
  title: string;
  institution: string;
  period: string;
  concentration: string;
  details: string;
}

const Education: React.FC = () => {
  const [selectedDegree, setSelectedDegree] = useState<string | null>(null);

  const degrees: Record<string, EducationDetails> = {
    MSc: {
      title: "Master of Science in Information Technology",
      institution: "Carnegie Mellon University, Africa",
      period: "August 2025 – May 2027",
      concentration: "Cybersecurity, Cyber Threat Intelligence, and DFIR",
      details: "Currently pursuing advanced studies in cybersecurity with a focus on emerging threats and defensive techniques."
    },
    BSc: {
      title: "Bachelor of Information Technology Security",
      institution: "University of Abomey-Calavi, Abomey-Calavi, Benin",
      period: "2020 - 2024",
      concentration: "Information Technology, Cybersecurity, and Information Security",
      details: "Graduated with distinction (GPA: 3.7/4), focusing on core security principles and practical applications."
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold dark:text-white mb-4">Education</h3>
      <div className="flex gap-4 mb-4">
        {Object.keys(degrees).map((degree) => (
          <button
            key={degree}
            onClick={() => setSelectedDegree(degree)}
            className={`px-6 py-4 text-lg font-semibold transition-all duration-300 border-4 ${
              selectedDegree === degree
                ? 'bg-green-700 border-green-700 text-white dark:bg-green-600 dark:border-green-600'
                : 'bg-green-500 border-green-500 text-white hover:bg-green-600 hover:border-green-600 dark:bg-green-500 dark:border-green-500 dark:hover:bg-green-600 dark:hover:border-green-600'
            }`}
          >
            {degree}
          </button>
        ))}
      </div>

      {selectedDegree && (
        <div className="p-6 border-4 border-green-500 dark:border-green-700 animate-fadeIn">
          <h4 className="text-xl font-bold mb-2 dark:text-white">
            {degrees[selectedDegree].title}
          </h4>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            {degrees[selectedDegree].institution}
          </p>
          <p className="text-gray-500 dark:text-gray-400 mb-2">
            {degrees[selectedDegree].period}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            <span className="font-semibold">Concentration:</span> {degrees[selectedDegree].concentration}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            {degrees[selectedDegree].details}
          </p>
        </div>
      )}
    </div>
  );
};

export default Education;