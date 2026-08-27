import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import "./index.css";

type Report = {
  title: string;
  fileName: string;
  summary: string;
  focus: string[];
  signal: string;
};

const reports: Report[] = [
  {
    title: "Dai Wok Foods",
    fileName: "Dai_Wok_Foods_Incident_Investigation_Report.pdf",
    summary: "A case built around incident chronology, evidence handling, and a concise root-cause narrative.",
    focus: ["Timeline reconstruction", "Evidence handling", "Root cause"],
    signal: "Good example of clear forensic storytelling.",
  },
  {
    title: "FokkeBV Ransomware",
    fileName: "FokkeBV_Ransomware_Incident_Investigation_Report.pdf",
    summary: "A ransomware investigation focused on triage, containment, and recovery communication.",
    focus: ["Ransomware triage", "Containment decisions", "Recovery guidance"],
    signal: "Shows structured response under pressure.",
  },
  {
    title: "FramtidX Development Corp",
    fileName: "FramtidX_Development_Corp_Investigation_Report.pdf",
    summary: "A stakeholder-ready report that balances technical findings with executive readability.",
    focus: ["Scope definition", "Findings summary", "Executive reporting"],
    signal: "Built for both technical and non-technical readers.",
  },
];

const InvestigationsPage: React.FC = () => {
  const [flippedReport, setFlippedReport] = React.useState<string | null>(null);

  const toggleCard = (fileName: string) => {
    setFlippedReport((current) => (current === fileName ? null : fileName));
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white">
      <section className="relative overflow-hidden border-b-4 border-green-700 bg-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.24),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.16),_transparent_32%)]" />
        <div className="relative mx-auto max-w-screen-xl px-4 py-14 lg:px-6 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-green-400">
              Incident forensics and investigations
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              Flashcard archive of incident reports
            </h1>
            <p className="mt-5 text-lg text-gray-300 md:text-xl">
              Click any card to flip it. The front gives the quick case summary and the back opens the PDF.
            </p>
            <a
              href="/"
              className="mt-8 inline-flex items-center justify-center border-2 border-green-500 bg-green-600 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-green-700"
            >
              Back to portfolio
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-xl px-4 py-12 lg:px-6 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reports.map((report, index) => {
            const flipped = flippedReport === report.fileName;

            return (
              <div key={report.fileName} className="flip-scene">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleCard(report.fileName)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      toggleCard(report.fileName);
                    }
                  }}
                  className={`flip-card block aspect-square w-full border-4 border-green-700 bg-white p-0 text-left shadow-[0_18px_50px_rgba(15,23,42,0.12)] ${flipped ? "is-flipped" : ""}`}
                  aria-pressed={flipped}
                  aria-label={`Flip ${report.title} report card`}
                >
                  <div className="flip-face absolute inset-0 flex h-full w-full flex-col justify-between bg-white p-6 dark:bg-black">
                    <div className="flex items-start justify-between gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center border-2 border-green-700 bg-green-50 text-lg font-black text-green-700 dark:bg-green-950/40 dark:text-green-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white">
                        {report.title}
                      </h2>
                      <p className="mt-4 text-base text-gray-600 dark:text-gray-300">{report.summary}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                        Focus areas
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {report.focus.map((item) => (
                          <span key={item} className="border border-green-200 bg-green-50 px-3 py-1 text-sm text-green-700 dark:border-green-900 dark:bg-green-950/40 dark:text-green-300">
                            {item}
                          </span>
                        ))}
                      </div>
                      <p className="pt-2 text-sm text-gray-500 dark:text-gray-400">Click to flip the card.</p>
                    </div>
                  </div>

                  <div className="flip-face flip-face-back absolute inset-0 flex h-full w-full flex-col justify-between bg-black p-6 text-white dark:bg-neutral-950">
                    <div className="flex items-start justify-between gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center border-2 border-green-500 bg-green-600 text-lg font-black text-white">
                        PDF
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-green-400">
                        Back
                      </span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-extrabold leading-tight">Open the report</h2>
                      <p className="mt-4 text-base text-gray-300">{report.signal}</p>
                    </div>
                    <a
                      href={`/assets/${report.fileName}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex items-center justify-center border-2 border-green-500 bg-green-600 px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-green-700"
                    >
                      View PDF
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <InvestigationsPage />
  </React.StrictMode>,
);