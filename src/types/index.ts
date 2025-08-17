export interface Tag {
    title: string;
    color: string;
    isOpen: boolean;
}

export interface FileData {
    title: string;
    content: string;
    fileSize: number;  // store size in bytes
    isClosed: boolean;
    tag: Tag;
}
