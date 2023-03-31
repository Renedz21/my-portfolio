import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Image from "next/image";
import Navbar from "@/components/Navbar";

import Link from "next/link";

interface Project {
    description: string;
    githubUrl: string;
    image: string;
    tags: string[];
    title: string;
    webUrl: string;
}

const ProjectDetail = () => {

    const router = useRouter()
    const { id } = router.query

    const [projectData, setProjectData] = useState<Project>({
        description: "",
        githubUrl: "",
        image: "",
        tags: [],
        title: "",
        webUrl: ""
    })
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getOneProject = async () => {
            const result = await fetch(`http://localhost:3500/api/project/${id}`);
            const data = await result.json();
            console.log(data);
            setProjectData(data);
        }
        getOneProject();
    }, [id])


    return (
        <>
            <Navbar showNavs={false} />
            <div className="container mx-auto w-full h-screen flex px-5 md:py-24 pt-8 md:flex-row flex-col items-center">
                <div className=" w-full mb-10 md:mb-0">

                    <Image
                        className="w-full md:max-w-3xl h-full object-contain rounded-md"
                        src={projectData.image}
                        alt="Picture of the author"
                        width={720}
                        height={720}
                    />

                </div>
                <div className="lg:flex-grow lg:pl-12 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <Link href={`${projectData.webUrl}`} target="_blank" className="sm:text-4xl text-3xl mb-2 font-bold text-white flex items-center gap-2 hover:text-[#1f1d44]">
                        {projectData.title}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clipRule="evenodd" />
                        </svg>

                    </Link>

                    <p className="mb-4 leading-relaxed text-white text-lg font-medium text-justify">
                        {projectData.description}
                    </p>


                    {projectData.githubUrl && (
                        <Link href={`${projectData.githubUrl}`} target="_blank" className="text-white mb-4 flex items-center gap-2 hover:text-[#1f1d44] text-xl md:text-base">
                            Ver código en Github
                        </Link>
                    )}

                    <div>
                        <h1 className="text-white font-semibold text-2xl mb-4">Tecnologías usadas</h1>
                        <div className="flex items-center gap-4">
                            {projectData.tags?.map((tag, index) => (
                                <div key={index} className="bg-white rounded-full w-full p-3">
                                    <Image
                                        className="w-full md:h-[55px] md:max-w-xs object-contain"
                                        src={tag}
                                        alt="Picture of the author"
                                        width={720}
                                        height={720}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProjectDetail