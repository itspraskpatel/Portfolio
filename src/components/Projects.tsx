import { Card_21 } from "./card-21";

export default function Projects() {
  return (
    <div className="flex-col items-center justify-center  m-2 sm:m-10">
      <div className="text-center text-5xl font-semibold text-gray-800 my-8">
        Projects
      </div>
      <div className=" place-items-center">
        <Card_21
          title="KoiSwipe: Anime Dating App"
          content="Match people based on their love for anime."
          techStack={["Docker", "PostgreSQL", "Prisma", "React Native"]}
          visit="https://play.google.com/store/apps/details?id=com.koiswipe"
          imgSrc="/images/koiSwipe.png"
          left="true"
        />
        <Card_21
          title="RoadEye Tracker"
          content="A Smart GPS Fleet Management System"
          techStack={["Node.js", "React Native", "Sockets"]}
          visit="https://play.google.com/store/apps/details?id=com.trackernew"
          imgSrc="/images/roadEye.png"
        />
        <Card_21
          title="I need Buddy "
          content="A platform to connect people with Buddies"
          techStack={["AWS", "Node.js", "MongoDB"]}
          visit="https://play.google.com/store/apps/details?id=com.inbuser"
          imgSrc="/images/ineedbuddy.png"
          left="true"
        />
        <Card_21
          title="Tech Relevant Students"
          content="An ERP for Schools handling over 600+ schools"
          techStack={["Express.js", "Linux", "MSSQL"]}
          visit="https://play.google.com/store/apps/details?id=com.schoolapp.management"
          imgSrc="/images/techRelevant.png"
          
        />

        <Card_21
          title="Float 24x7"
          content="A Simple and Elegant Menu for India's first floating food court"
          techStack={["React", "Tailwind CSS", "Vercel"]}
          visit="https://www.float247.in"
          imgSrc="/images/float247.png"
          left="true"
        />

        <Card_21
          title="Bedhadak News"
          content="A local news aggregation app."
          techStack={["React", "Node.js", "Tailwind CSS"]}
          visit="https://www.bedhadakkhabar.com/"
          imgSrc="/images/bedhadak.png"
        />
        
      </div>
      
      <div className="text-center sm:text-xl  text-xs font-extralight text-gray-800">
        More Projects on the way... Stay tuned!
      </div>
      <div className="text-center sm:text-xl text-xs font-extralight text-gray-800">
        :P
      </div>
    </div>
  );
}
