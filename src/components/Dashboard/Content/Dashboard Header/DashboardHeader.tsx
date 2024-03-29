import { useState } from "react";
import "./dashboardHeader.css";
import { BsGrid3X2 } from "react-icons/bs";
import { MdOutlineViewList } from "react-icons/md";
import { GrCircleInformation } from "react-icons/gr";
import FolderDropDown from "../../../common/DropDown/Container/FolderDropDown/FolderDropDown";
import GetIcon from "../../../common/Icons/GetIcon";
import React from "react";

export interface FolderProps {
  id: string;
  name: string;
}

interface Props {
  currentPath: FolderProps[];
  currentDashboard: string;
  handleFolderClick: (index: number) => void;
}

const DashboardHeader = ({ currentDashboard, currentPath, handleFolderClick }: Props) => {
  const [gridLayout, setGridLayout] = useState(true);

  return (
    <div className="dashboard-header">
      {currentDashboard === "My Drive" ? (
        <div className="dashboard-filepath">
          {currentPath && currentPath.map(({ id, name }, index) => (
            <React.Fragment key={id}>
              {currentPath.length - 1 !== index ?
                <>
                  <div className="dashboard-previous-folder">
                    <span className="dashboard-title" onClick={() => handleFolderClick(index)}>{name}</span>
                  </div>
                  <GetIcon className="dashboard-pathArrow" iconType="pathArrow" iconSize={18} />
                </> :
                <FolderDropDown
                  contentClassName="dashboard-content"
                  folderName={name}
                  className="filepath-name"
                  currentFolder={true}
                />}
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div className="dashboard-title-container">
          <span className="dashboard-title">{currentDashboard}</span>
        </div>
      )}
      <div className="dashboard-settings">
        <div
          className="dashboard-data-layout"
          onClick={() => setGridLayout(!gridLayout)}
        >
          {gridLayout ? (
            <BsGrid3X2 className="dashboard-data-layout-icon" size={18} />
          ) : (
            <MdOutlineViewList
              className="dashboard-data-layout-icon"
              size={18}
            />
          )}
        </div>
        <div className="dashboard-data-info">
          <GrCircleInformation
            className="dashboard-data-layout-icon"
            size={18}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
