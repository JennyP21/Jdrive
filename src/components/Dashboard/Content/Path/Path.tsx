import { useState } from "react";
import Table, { File } from "../../../common/Table/Container/Table"
import "./path.css"

interface Props {
    currentPath: string[];
}

const Path = ({ currentPath }: Props) => {
    const fileTitle = ["Name", "Owner", "Last Modified", "Size"];

    const [files, setFiles] = useState<File[]>([]);

    return (
        <div className="path">
            <Table
                titles={fileTitle}
                files={files}
                currentFileTable="My Drive Files"
            />
        </div>
    )
}

export default Path