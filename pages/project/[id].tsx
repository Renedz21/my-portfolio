import { useRouter } from "next/router"

const ProjectDetail = () => {

    const router = useRouter()

    console.log(router.query)

    return (
        <div>ProjectDetail</div>
    )
}

export default ProjectDetail