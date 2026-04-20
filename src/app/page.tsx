"use client";
import WorkExperience from "@/components/WorkExperience";
import TypeWriter from "@/components/Typewriter";
import Avatar from "@/components/Avatar";
import Projects from "@/components/Projects";
import { FaLinkedin, FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <WorkExperience />
      <Projects />
    </>
  );
}
