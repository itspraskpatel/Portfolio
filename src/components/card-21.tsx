import { Image } from "@unpic/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";

export const Card_21 = ({title , content,imgSrc,techStack , github , visit ,left} : {title: string, content: string, imgSrc?	: string, techStack?: string[], github?: string, visit?: string, left ?:string}) => {
	return (
		
		<Card className="group relative w-full max-w-5xl overflow-hidden md:overflow-visible rounded-3xl m-10 shadow-xl md:aspect-video 
				transition-transform duration-500  ease-out
				hover:scale-105 
				md:hover:scale-100 gap-2 py-2">
			{/* Background image with subtle padding + rounded corners */}
			<div className="relative z-0 aspect-video w-full md:absolute md:inset-0 md:p-6 px-4">
				<div className="relative h-full w-full overflow-hidden rounded-2xl">
					<Image
						layout="fullWidth"
						className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						src= {imgSrc || "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHByb2R1Y3RzfGVufDB8fDB8fHwy"}
						alt="..."
					/>
				</div>
			</div>
			{/* Overlay gradient */}
			{/* <div className="absolute inset-0 bg-linear-to-t from-foreground via-foreground/20 to-foreground/5 z-10 group-hover:from-transparent group-hover:via-transparent group-hover:to-transparent transition-all duration-500"></div> */}
			<div className={`md:opacity-90 transition-transform duration-300 origin-center hover:opacity-100 z-40 w-full border bg-card px-6 pt-6 sm:pb-6 md:mt-0 md:w-[44%] md:rounded-xl md:border md:bg-card/95 md:shadow-xl md:backdrop-blur-sm md:absolute md:top-1/2 md:-translate-y-1/2 md:hover:scale-105 ${left ? "md:left-[-12%]" : "md:right-[-12%]"} border-0 sm:pt-4 opacity-100 `} >
				<div className="items-start">
					<CardHeader>
					<CardTitle className="text-2xl font-semibold ">{title}</CardTitle>
				</CardHeader>
				<CardContent className="text-muted-foreground">{content}</CardContent>
				</div>
				<div>

					{techStack && techStack.length > 0 && (
						<div className="flex flex-wrap gap-2 mt-4">
							{techStack.map((tech, index) => (
								<span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
									{tech}
								</span>
							))}
						</div>
					)}
				</div>
				<div className="flex gap-4 mt-4">
					{github && (
						<a href={github} target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors duration-300">
							GitHub
						</a>
					)}
					{visit && (
						<a href={visit} target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors duration-300 flex items-center">
							Visit <BsBoxArrowUpRight className="inline ml-2" />
						</a>
					)}
				</div>
			</div>
		</Card>
	);
};
