import Card from "./Card"
import type { FileData } from "../types"

function Foreground() {
    const data: FileData[] = [
        {
            title: "Resume.pdf",
            content: "My updated CV",
            fileSize: 240000,
            isClosed: true,
            tag: {
                title: "Important",
                color: "red",
                isOpen: true,
            }
        },
        {
            title: "Resume.pdf",
            content: "My updated CV",
            fileSize: 240000,
            isClosed: true,
            tag: {
                title: "Important",
                color: "red",
                isOpen: true,
            }
        },
        {
            title: "Resume.pdf",
            content: "My updated CV",
            fileSize: 240000,
            isClosed: true,
            tag: {
                title: "Important",
                color: "red",
                isOpen: false,
            }
        },
        {
            title: "Resume.pdf",
            content: "My updated CV",
            fileSize: 240000,
            isClosed: true,
            tag: {
                title: "Download",
                color: "blue",
                isOpen: true,
            }
        },
    ]

    return (
        <div className="fixed p-3 flex gap-5 flex-wrap top-0 left-0 z-10 w-full h-full">
            {data.map((item, index) => (
                <Card key={index} file={item} />
            ))}
        </div>
    )
}

export default Foreground
