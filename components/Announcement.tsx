import { FC } from 'react'

interface AnnouncementProps {
    title: string
}

const Announcement: FC<AnnouncementProps> = ({ title }) => {
    return (
        <div className="bg-[#312c44] px-4 py-3 text-white">
            <p className="text-center text-sm font-medium">
                {title}
            </p>
        </div>
    )
}

export default Announcement