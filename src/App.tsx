// src/App.tsx
import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "/public/assets/css/particles.css"; 

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <main id="home" className="w-full">
       {/* Floating light elements contained within the hero section */} 

        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>
      
      {/* #### HERO SECTION #### */}
      
      <section className="pt-20 md:pt-0 bg-white dark:bg-black">

      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12 relative z-10">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1
            id="dynamicHeadline"
            className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
          >
            CTF Player & {" "}
            <span id="dynamicWords" className="text-green-500 font-bold">
              Security Researcher
            </span>
          </h1>

          <p className="max-w-2xl mb-6 font-bold text-gray-500 lg:mb-8 text-3xl dark:text-gray-400">
          Exploring vulnerabilities, one challenge at a time
          </p>
          <a
            href="#ctfs"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text:3xl text-center text-white  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            View My CTFs Writeup
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-4 text-base font-medium text:3xl text-center text-gray-900 border-4 border-green-300  hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-gray-800"
          >
            Contact Me!
          </a>
        </div>
        <div 
          id="hacker-logo" 
          className="lg:mt-0 lg:col-span-5 lg:flex relative z-10"
        >
          <img
            src="./assets/images/w4lk3r.jpg"
            alt="w4lk3r"
          />
        </div>
      </div>
    </section>

    {/* #### WHOAMI SECTION #### */}
      <section id="whoami" className="bg-white dark:bg-black pt-12 pb-8">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6 relative z-20">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <div className="p-6 border-4 border-green-700 rounded-md bg-white dark:bg-black">
                <h2 className="text-4xl font-extrabold dark:text-white mb-4">Whoami</h2>
                <p className="text-xl font-light text-gray-700 dark:text-gray-300 mb-4">
                  A concise overview of my background — education, certifications, professional experience and skills. Download the full CV for details.
                </p>
                <a
                  href="/assets/Amos_Akogbe_Resume.pdf"
                  download
                  className="inline-flex items-center justify-center px-4 py-2 mt-3 text-base font-bold text-white bg-green-600 hover:bg-green-700"
                >
                  Download Full CV
                </a>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold dark:text-white">Education</h3>
                  <ul className="mt-3 text-lg text-gray-600 dark:text-gray-300 list-disc list-inside">
                    <li>Master of Science in Information Technology (August 2025 – May 2027)</li>
                    <li>Carnegie Mellon University, Africa</li>
                    <li>Concentration: Cybersecurity, Cyber Threat Intelligence, and DFIR</li>
                    <li>Bachelor of Information Technology Security (GPA: 3.7/4)</li>
                    <li>University of Abomey-Calavi, Abomey-Calavi, Benin</li>
                    <li>Concentration: Information Technology, Cybersecurity, and Information Security</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="p-6 border-4 border-green-700 rounded-md bg-white dark:bg-black">
                <h3 className="text-3xl font-extrabold dark:text-white">Professional Experience & Achievements</h3>
                <p className="mt-3 text-xl text-gray-600 dark:text-gray-300">
                  Highlights from my career — roles in SOC analysis, security operations, incident response, and proactive threat detection.
                </p>
                <div className="mt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-full bg-green-600 rounded" />
                      <div>
                        <div className="text-lg font-bold dark:text-white">Cybersecurity Compliance Apprenticeship — Cyber Research Link</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">March 2025 – June 2025</div>
                        <div className="mt-2 text-gray-700 dark:text-gray-300">
                          <ul className="list-disc list-inside">
                            <li>Produced a keynote presentation on Threat Intelligence and its importance</li>
                            <li>Completed vulnerability assessment using OpenVAS and Microsoft Sentinel</li>
                            <li>Produced study papers on cybersecurity & AI and cyberattack prevention</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-full bg-green-600 rounded" />
                      <div>
                        <div className="text-lg font-bold dark:text-white">Pentester Intern — Bodah Logistics</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">February 2025 – June 2025</div>
                        <div className="mt-2 text-gray-700 dark:text-gray-300">
                          <ul className="list-disc list-inside">
                            <li>Assessed website and internal API, correcting 4 critical vulnerabilities</li>
                            <li>Implemented incident response plan during cyberattack</li>
                            <li>Produced security policy and annual security strategy for 2025</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-full bg-green-600 rounded" />
                      <div>
                        <div className="text-lg font-bold dark:text-white">Blue Team Program Graduate — Blacks in Cybersecurity</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">January 2025 – April 2025</div>
                        <div className="mt-2 text-gray-700 dark:text-gray-300">
                          <ul className="list-disc list-inside">
                            <li>Investigated 12+ security incidents using KQL on KC7 Cyber platforms</li>
                            <li>Wrote detailed investigation reports and tracked management data</li>
                            <li>Utilized VirusTotal and blue team tools for file analysis</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-full bg-green-600 rounded" />
                      <div>
                        <div className="text-lg font-bold dark:text-white">Cybersecurity Analyst Intern — CodeAlpha</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">August 2024 – October 2024</div>
                        <div className="mt-2 text-gray-700 dark:text-gray-300">
                          <ul className="list-disc list-inside">
                            <li>Created phishing awareness campaign documentation</li>
                            <li>Developed Python network monitoring tool using Scapy and tcpdump</li>
                            <li>Designed secure file exchange app with RSA encryption</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-2xl font-bold dark:text-white mb-8">Technical Skills</h4>
                  <div className="skills-grid-new">
                    <div className="cybersecurity-skills">
                      <h3><i className="fas fa-shield-alt"></i>Security Skills</h3>
                      <div className="skill-item">
                        <span className="skill-name">Penetration Testing</span>
                        <div className="progress-bar">
                          <div className="progress-level" style={{ width: "90%" }}></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <span className="skill-name">DFIR</span>
                        <div className="progress-bar">
                          <div className="progress-level" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <span className="skill-name">SOC Analysis</span>
                        <div className="progress-bar">
                          <div className="progress-level" style={{ width: "88%" }}></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <span className="skill-name">Threat Intelligence</span>
                        <div className="progress-bar">
                          <div className="progress-level" style={{ width: "82%" }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="technical-stack">
                      <h3><i className="fas fa-code"></i>Technical Stack</h3>
                      <div className="stack-category">
                        <h4>Programming</h4>
                        <span>Python</span>
                        <span>KQL</span>
                        <span>Bash</span>
                        <span>PowerShell</span>
                        <span>JavaScript</span>
                      </div>
                      <div className="stack-category">
                        <h4>Security Tools</h4>
                        <span>Splunk</span>
                        <span>Microsoft Sentinel</span>
                        <span>OpenVAS</span>
                        <span>Metasploit</span>
                        <span>Nmap</span>
                        <span>Scapy</span>
                      </div>
                      <div className="stack-category">
                        <h4>Frameworks & Platforms</h4>
                        <span>MITRE ATT&CK</span>
                        <span>NIST</span>
                        <span>Docker</span>
                        <span>Azure</span>
                        <span>GCP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* #### CERTIFICATIONS SECTION #### */}
    <section className="bg-white dark:bg-black pt-8 pb-12">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6 relative z-20">
        <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
          <h2 className="mb-4 text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Certifications & Achievements
          </h2>
          <p className="text-gray-500 text-2xl dark:text-gray-400">
            Professional certifications and notable achievements in cybersecurity
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Professional Certifications */}
          <div className="p-6 border-4 border-green-700 rounded-md bg-white dark:bg-black">
            <h3 className="text-2xl font-bold dark:text-white mb-4">
              <i className="fas fa-certificate mr-2"></i>Professional Certifications
            </h3>
            <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Google Professional Certifications:</strong> IT Support, Cybersecurity, Cloud Cybersecurity</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Microsoft Azure:</strong> Fundamentals certification (AZ-900)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Networking:</strong> Mikrotik Certified Network Associate (MTCNA)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>ISC2:</strong> Certified in Cybersecurity Candidate</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Technical Skills:</strong> Ethical Hacking, Networking Fundamentals, Python Programming, Linux Fundamentals</span>
              </li>
            </ul>
          </div>

          {/* Achievements & Recognition */}
          <div className="p-6 border-4 border-green-700 rounded-md bg-white dark:bg-black">
            <h3 className="text-2xl font-bold dark:text-white mb-4">
              <i className="fas fa-trophy mr-2"></i>Achievements & Recognition
            </h3>
            <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>CTF Competitions:</strong>
                  <ul className="ml-6 mt-2 space-y-2">
                    <li>- 45th Place at PicoCTF 2023</li>
                    <li>- 48th/147 at Bjwhitehats CTF 2025</li>
                  </ul>
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Program Graduate:</strong> Blacks in Cybersecurity Blue Team Program</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Scholarships:</strong>
                  <ul className="ml-6 mt-2">
                    <li>- Umuzi Program Scholar</li>
                    <li>- Mentor Me Collective Google Career Launchpad Scholar</li>
                  </ul>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* #### ACCOLADES SECTION #### */}
        <section className="bg-white dark:bg-black ">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-28 lg:px-6 border-4 border-solid border-green-700 bg-white dark:bg-black relative z-20">
          <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
              <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                      CTF Player
                  </dt>
                  <dd className="font-light text-xl text-gray-500 dark:text-gray-400">+3 years of experience in CTF competitions and Cybersecurity</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                      Multiple recognitions 
                  </dt>
                  <dd className="font-light text-xl text-gray-500 dark:text-gray-400">45th Place in Africa at PicoCTF 2023 & 48th Place at Bjwhitehats CTF 2025</dd>
              </div>
               <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                     Certified Cybersecurity Professional
                  </dt>
                  <dd className="font-light text-xl text-gray-500 dark:text-gray-400">Azure Fundamentals (AZ-900) | Google Cybersecurity | Google Cloud Cybersecurity | MTCNA</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                    Blue Team Graduate and Mentorship Fellow
                  </dt>
                  <dd className="font-light text-xl text-gray-500 dark:text-gray-400">Blacks in Cybersecurity</dd>
              </div>

          </dl>
                    </div>
                    
        </section>

          {/* #### SERVICES SECTION #### */}
          <section id="services" className="pt-8 pb-12 bg-white dark:bg-black flex justify-center items-center">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">
              <div className="max-w-screen-md mb-8 lg:mb-12 mx-auto">
                <h2 className="mb-4 text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Security Services
                </h2>
                <p className="text-gray-500 text-2xl dark:text-gray-400">
                  Professional security assessment and advisory services focused on identifying and mitigating vulnerabilities in your systems.
                </p>
              </div>

              <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg 
                      className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125"
                      aria-hidden="true" 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      fill="none" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1" 
                        d="M9.5 11.5 11 13l4-3.5M12 20a16.405 16.405 0 0 1-5.092-5.804A16.694 16.694 0 0 1 5 6.666L12 4l7 2.667a16.695 16.695 0 0 1-1.908 7.529A16.406 16.406 0 0 1 12 20Z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">Penetration Testing</h3>
                  <p className="text-gray-500 text-xl dark:text-gray-400">
                    Thorough assessment of web applications, networks, and cloud infrastructure to identify security weaknesses before malicious actors do.
                  </p>
                </div>

                <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 15v3c0 .5523.44772 1 1 1h8v-8m-9 4v-4m0 4h9m-9-4V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v4M3 11h11m6.25 5c0 1.2426-1.0073 2.25-2.25 2.25M20.25 16c0-1.2426-1.0073-2.25-2.25-2.25M20.25 16H21m-3 2.25c-1.2426 0-2.25-1.0074-2.25-2.25M18 18.25V19m-2.25-3c0-1.2426 1.0074-2.25 2.25-2.25M15.75 16H15m3-2.25V13m-1.591 1.409-.5303-.5303m4.2426 4.2426-.5303-.5303m-3.182 0-.5303.5303m4.2426-4.2426-.5303.5303"/>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">Digital Forensics & IR</h3>
                  <p className="text-gray-500 text-xl dark:text-gray-400">
                    Expert incident response and forensic analysis services to help organizations investigate security breaches and recover from cyber attacks.
                  </p>
                </div>

                <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"/>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">SOC Analysis</h3>
                  <p className="text-gray-500 text-xl dark:text-gray-400">
                    Security monitoring and threat hunting services to detect and respond to malicious activities in your environment.
                  </p>
                </div>

                <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M14.7141 15h4.268c.4043 0 .732-.3838.732-.8571V3.85714c0-.47338-.3277-.85714-.732-.85714H6.71411c-.55228 0-1 .44772-1 1v4m10.99999 7v-3h3v3h-3Zm-3 6H6.71411c-.55228 0-1-.4477-1-1 0-1.6569 1.34315-3 3-3h2.99999c1.6569 0 3 1.3431 3 3 0 .5523-.4477 1-1 1Zm-1-9.5c0 1.3807-1.1193 2.5-2.5 2.5s-2.49999-1.1193-2.49999-2.5S8.8334 9 10.2141 9s2.5 1.1193 2.5 2.5Z"/>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">GRC Services</h3>
                  <p className="text-gray-500 text-xl dark:text-gray-400">
                    Governance, risk management and compliance services to help organizations align security with business objectives.
                  </p>
                </div>

                <div className="transform transition-all duration-300 hover:scale-105 group">
                  <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 5 9 4V3m5 2 1-1V3m-3 6v11m0-11a5 5 0 0 1 5 5m-5-5a5 5 0 0 0-5 5m5-5a4.959 4.959 0 0 1 2.973 1H15V8a3 3 0 0 0-6 0v2h.027A4.959 4.959 0 0 1 12 9Zm-5 5H5m2 0v2a5 5 0 0 0 10 0v-2m2.025 0H17m-9.975 4H6a1 1 0 0 0-1 1v2m12-3h1.025a1 1 0 0 1 1 1v2M16 11h1a1 1 0 0 0 1-1V8m-9.975 3H7a1 1 0 0 1-1-1V8"/>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-3xl font-bold dark:text-white">Security Training</h3>
                  <p className="text-gray-500 text-xl dark:text-gray-400">
                    Customized training programs to improve security awareness and build internal security capabilities.
                  </p>
                </div>
              </div>
            </div>
          </section>          {/* #### LOGOS SECTION #### */}

        

          {/* #### PROJECTS SECTION #### */}
<section id="projects" className="bg-white dark:bg-black py-12">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
      <h2 className="mb-4 text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Featured Projects
      </h2>
      <p className="text-gray-500 text-2xl dark:text-gray-400 mb-8">
        Showcasing my work in cybersecurity research, tool development, and security enhancement projects
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Python Network Monitor */}
      <div className="bg-white dark:bg-black border-4 border-green-700 rounded-lg p-8 transform transition-all duration-300 hover:scale-105">
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
          <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1" d="M17 6.6h1.8a2 2 0 0 1 2 2v10.8a2 2 0 0 1-2 2H5.2a2 2 0 0 1-2-2V8.6a2 2 0 0 1 2-2H7m5 0v1.8m0 11.4v-1.8m0-4.8v3m-5-1.5h10"/>
          </svg>
        </div>
        <h3 className="mb-4 text-2xl font-bold dark:text-white">Network Monitor</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-4 text-lg">
          Python-based network monitoring tool using Scapy and tcpdump. Features packet analysis, threat detection, and real-time alerts.
        </p>
        <ul className="text-gray-500 dark:text-gray-400 text-lg space-y-2">
          <li>• Real-time traffic analysis</li>
          <li>• Anomaly detection</li>
          <li>• Custom alert system</li>
          <li>• <a href="https://github.com/w4lk3r04/internship-projects/blob/main/network_sniffer.py" className="text-green-500 hover:text-green-600" target="_blank" rel="noopener noreferrer">View on GitHub →</a></li>
        </ul>
      </div>

      {/* Secure File Exchange */}
      <div className="bg-white dark:bg-black border-4 border-green-700 rounded-lg p-8 transform transition-all duration-300 hover:scale-105">
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
          <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.1 15.9H4.4c-.7 0-1.3-.6-1.3-1.3V4.4c0-.7.6-1.3 1.3-1.3h11.2c.7 0 1.3.6 1.3 1.3v4.7m-7.9 7.8 2.7-.4.4-2.7L18 7.9c.4-.4 1-.4 1.4 0l.7.7c.4.4.4 1 0 1.4l-8.9 8.9"/>
          </svg>
        </div>
        <h3 className="mb-4 text-2xl font-bold dark:text-white">SecureShare</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-4 text-lg">
          Secure file exchange application with RSA encryption. Built with a focus on data privacy and secure transmission.
        </p>
        <ul className="text-gray-500 dark:text-gray-400 text-lg space-y-2">
          <li>• End-to-end encryption</li>
          <li>• Secure key exchange</li>
          <li>• File integrity verification</li>
        </ul>
      </div>

      {/* Kathara Lab */}
      <div className="bg-white dark:bg-black border-4 border-green-700 rounded-lg p-8 transform transition-all duration-300 hover:scale-105">
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
          <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 3h-8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8M9 12h6m-3-3v6m3-9h5l3 3v12a2 2 0 0 1-2 2h-6"/>
          </svg>
        </div>
        <h3 className="mb-4 text-2xl font-bold dark:text-white">Kathara Security Lab</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-4 text-lg">
          Comprehensive security lab environment using Kathara for vulnerability analysis and attack simulation. Complete with infrastructure code and documentation.
        </p>
        <ul className="text-gray-500 dark:text-gray-400 text-lg space-y-2">
          <li>• MITRE ATT&CK analysis</li>
          <li>• Cyber Kill Chain mapping</li>
          <li>• Full assessment reports</li>
          <li>• <a href="https://github.com/w4lk3r04/internship-projects/tree/vuln_lab" className="text-green-500 hover:text-green-600" target="_blank" rel="noopener noreferrer">View on GitHub →</a></li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* #### CTFs SECTION #### */}
          <section id="ctfs" className="bg-white dark:bg-black pt-8">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                CTFs & Achievements
              </h2>
              <p className="mb-4 text-3xl">
              I've dedicated my career to finding the vulnerabilities that others miss. My journey began with CTF competitions and evolved into a full-time commitment to making digital spaces more secure.
              </p>
              <p className="text-xl">
             My approach combines creative problem-solving with rigorous methodology, ensuring no stone is left unturned in the pursuit of robust security.
              </p>
              <a href="/assets/cv.pdf" download className="inline-flex mt-8 items-center justify-center px-5 py-4 text-base font-medium text:3xl text-center text-gray-900 border-4 border-green-300  hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-gray-800"
          >
            Download C.V.
          </a>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full transition-all duration-300 hover:saturate-150 hover:brightness-75 hover:hue-rotate-15"
              src="./assets/images/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 transition-all duration-300 hover:saturate-150 hover:brightness-75 hover:hue-rotate-15"
              src="./assets/images/office-long-1.png"
              alt="office content 2"
            />
          </div>
          </div>
        </section>
        {/* #### CONTACT SECTION #### */}
        <section id="contact" className="bg-white dark:bg-black">
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img
              className="w-full transition-opacity duration-300 hover:opacity-70"
              src="./assets/images/data.png"
              alt="dashboard image"
            />
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Ready to Strengthen Your Security?
              </h2>
              <p className="mb-6 font-light text-gray-500 text-xl lg:text-2xl dark:text-gray-400">
              Let's connect and discuss how I can help identify vulnerabilities in your systems before malicious actors do.
              </p>
              <p className="mb-6 font-light text-gray-500 text-xl lg:text-2xl dark:text-gray-400">Whether you need penetration testing, security consultation, or vulnerability assessments, I'm here to provide expert guidance that fits your organization's unique needs. 
              </p>
            </div>
          </div>
        </section>
        {/* #### CONTACT SECTION #### */}
        <section className="bg-white dark:bg-black transition-all duration-300 hover:scale-105">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Book a consultation today – your security is my priority
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 text-xl lg:text-2xl">
            Protect your digital assets and maintain customer trust with proactive security testing.
            </p>
            <form action="#" className="space-y-8">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-gray-50 border-4 border-green-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border-4 border-green-300 text-gray-900 text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50  border-4 border-green-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50  shadow-sm border-4 border-green-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-lx font-medium text-center text-white bg-green-600 hover:bg-green-700 border-2 border-green-600 rounded-none sm:w-fit focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:border-green-600 dark:focus:ring-green-800"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
