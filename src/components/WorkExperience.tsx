import { useState } from "react";

export default function WorkExperience() {
  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <div className="bg-gray-50 pt-6 px-4  w-auto sm:p-10 sm:m-10 mb-6 items-center">
      <div className="text-3xl sm:text-5xl font-bold flex flex-col items-center text-left text-gray-800 my-5">
        Work Experience
      </div>
      <div className="flex gap-8 mt-4  md:flex-row">
        <div className="hidden md:grid md:grid-cols-1 md:pl-22 sm:pl-10 sm:pr-10">
          {experiences.map((experience, id) => (
            <button
              className="w-full text-left "
              key={id}
              onClick={() => setSelectedExperience(id)}
            >
              <ExperienceMenuItems
                role={experience.role}
                startDate={experience.startDate}
                endDate={experience.endDate}
                addOn={
                  selectedExperience === id
                    ? " bg-blue-50 text-blue-500 border-l-3 border-blue-600 hover:bg-gray-100"
                    : ""
                }
              />
            </button>
          ))}
        </div>

        {/* selected experience details */}
        <div className="flex flex-col gap-4 m-4 bg-white shadow-lg p-6 rounded-lg w-4xl">
          <div className="flex items-stretch gap-2  font-semibold">
            <div className=" text-2xl font-mono text-gray-900">
              {experiences[selectedExperience].role}{" "}
            </div>
            <div className="text-2xl  text-gray-900"> at </div>
            <div className="text-2xl text-gray-900">
              {experiences[selectedExperience].company}
            </div>
          </div>
          <div className="text-gray-500">
            {experiences[selectedExperience].startDate} -{" "}
            {experiences[selectedExperience].endDate}
          </div>

          <div className="flex flex-col gap-2 ">
            {experiences[selectedExperience].contributions.map(
              (contribution, index, role) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-gray-600 py-1"
                >
                  <div className="w-0 h-0 border-l-4 border-l-transparent border-b-8 border-b-blue-500 border-r-4 border-r-transparent rotate-90 mt-2 shrink-0"></div>
                  <div>{contribution}</div>
                </div>
              ),
            )}
          </div>
          <div className="flex gap-2">
            {experiences[selectedExperience].techStack.map((tech, index) => (
              <div
                key={index}
                className="px-2 py-1 bg-gray-100 text-xs rounded-4xl"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 sm:hidden">
        {experiences.map((experience, id) => (
          <button
            className="w-full text-left"
            key={id}
            onClick={() => setSelectedExperience(id)}
          >
            <ExperienceMenuItems
              role={experience.role}
              startDate={experience.startDate}
              endDate={experience.endDate}
              addOn={
                selectedExperience === id
                  ? " bg-blue-50 text-blue-500 border-l-2 border-blue-600 hover:bg-gray-100"
                  : ""
              }
            />
          </button>
        ))}
      </div>
      <img
        src="images/helpMeAdd.png"
        alt="Help Me Add"
        className="sm:h-48 sm:w-64 select-none pb-6  h-36 w-48"
        draggable="false"
        onDragStart={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
}

function ExperienceMenuItems({
  role,
  startDate,
  endDate,
  addOn = "",
}: {
  startDate: string;
  endDate: string;
  role: string;
  addOn?: string;
}) {
  return (
    <div
      className={
        addOn
          ? `w-full mr-2 ${addOn}`
          : "w-full border-l border-gray-300 hover:bg-gray-100 md:w-64"
      }
    >
      <div
        className={
          "flex flex-col gap-4 pt-4 items-start pl-4 font-medium sm:text-lg " +
          (addOn.includes("text-blue-500")
            ? "text-blue-500"
            : "text-gray-600")
        }
      >
        
        {role}
      </div>
      <div className="flex flex-col gap-4 pb-4 items-start pl-4 text-gray-500 sm:text-md text-xs">
      
        {startDate} - {endDate}
      </div>
    </div>
  );
}

const experiences = [
  {
    id: 0,
    role: "SDE Intern",
    company: "Euonus IT Pvt Ltd",
    startDate: "Oct 2024",
    endDate: "Mar 2025",
    contributions: [
      "Developed and maintained Express.js backend along with Sockets",
      "Configured and deployed backend services on AWS EC2",
      "Implemented CI/CD pipelines using GitHub Actions for automated testing and deployment",
    ],
    techStack: ["React", "Node.js","AWS", "MongoDB"]
  },

];

//help me add this on wwork experience
