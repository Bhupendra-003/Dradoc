import Card from "./Card"
import type { FileData } from "../types"
import { useRef } from "react"

function Foreground() {
    const data: FileData[] = [
        {
            title: "Resume.pdf",
            content: "My updated CV",
            fileSize: 240000,
            isClosed: true,
            tag: {
                title: "Important",
                color: "oklch(78.9% 0.154 211.53)",
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
                color: "oklch(72.3% 0.219 149.579)",
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
                color: "oklch(71.2% 0.194 13.428)",
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
                color: "oklch(75% 0.183 55.934)",
                isOpen: true,
            }
        },
    ]

    const ref = useRef<HTMLDivElement>(null)
    return (
        <div ref={ref} className="fixed p-3 flex gap-5 flex-wrap top-0 left-0 z-10 w-full h-full">
            {data.map((item, index) => (
                <Card key={index} file={item} ref={ref} />
            ))}
        </div>
    )
}

export default Foreground
