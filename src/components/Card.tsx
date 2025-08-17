import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import type { FileData } from "../types"
import { IoClose } from "react-icons/io5";

interface CardProps {
    file: FileData
}

function Card({ file }: CardProps) {

    return (
        <div className={`relative flex-shrink-0 bg-zinc-800 overflow-hidden p-5 text-white rounded-[40px] w-64 h-72`}>

            {/* File Icon at top */}
            <FaRegFileAlt className="mt-3" />

            {/* File Content */}
            <p className="pt-4 text-sm leading-type">{file.content}</p>

            {/* File Footer */}
            <div className="footer w-full absolute bottom-0  left-0">
                <div className="flex-between relative px-4 py-4">

                    {/* File Size */}
                    <p className="text-sm ml-4">.{file.fileSize / 1000} kb</p>

                    {/* Download Button */}
                    <span className="hover:text-zinc-300 group flex-center transition-all rounded-full w-6 h-6">
                        {file.isClosed ? <IoClose size={20} /> : <HiOutlineDownload size={20} />}
                        <span className="absolute group-hover:block bottom-10 hidden text-[0.6rem] bg-zinc-900 rounded-full px-2 py-1 right-1">{file.isClosed ? "Close" : "Download"}</span>
                    </span>
                </div>

                {/* File Tag */}
                {file.tag.isOpen && <div style={{ backgroundColor: file.tag.color }} className={`flex-center w-full h-12`}>
                    <p className="text-sm font-semibold">{file.tag.title}</p>
                </div>}
            </div>
        </div>
    )
}

export default Card
