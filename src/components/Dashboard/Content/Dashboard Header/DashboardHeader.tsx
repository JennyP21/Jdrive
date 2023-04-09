import { useState } from "react";
import "./dashboardHeader.css";
import { BsGrid3X2 } from "react-icons/bs";
import { MdOutlineViewList } from "react-icons/md";
import { GrCircleInformation } from "react-icons/gr";
import { RxTriangleDown } from "react-icons/rx";
import FolderDropDow from "../../../common/DropDown/Container/FolderDropDown";

interface Props {
  items: string[];
}

const DashboardHeader = ({ items }: Props) => {
  const [gridLayout, setGridLayout] = useState(true);

  return (
    <div className="dashboard-header">
      <div className="dashboard-filepath">
        <FolderDropDow
          folderName="My Drive"
          className="filepath-name"
          items={items}
        />
      </div>
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
