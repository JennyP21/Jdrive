import Suggestions from "../../../common/Suggestions/Suggestions";
import "./myDrive.css";
import Table, { File } from "../../../common/Table/Container/Table";
import { getFiles } from "../../../../services/fileService";
import { useEffect, useState } from "react";
import { FolderProps } from "../Dashboard Header/DashboardHeader";

interface Props {
  currentPath: FolderProps[];
}

const MyDrive = ({ currentPath }: Props) => {
  const fileTitle = ["Name", "Owner", "Last Modified", "Size"];

  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    if (currentPath.length > 0) {
      const data = async () => {
        return await getFiles().then(items => setFiles(items));
      }
      data();
    }
  }, [currentPath]);

  const suggestedFiles = [
    {
      fileName: "Final presentation  2023",
      fileType: "pdf",
      activity: "You modified this file yesterday",
    },
    {
      fileName: "Bills",
      fileType: "pdf",
      activity: "You created this file this morning",
    },
    {
      fileName: "Resume",
      fileType: "document",
      activity: "You modified this file Last Week",
    },
  ];

  return (
    <div className="my-drive">
      <Suggestions suggestedFiles={suggestedFiles} />
      <Table
        titles={fileTitle}
        files={files}
        currentFileTable="My Drive Files"
      />
    </div>
  );
};

export default MyDrive;
