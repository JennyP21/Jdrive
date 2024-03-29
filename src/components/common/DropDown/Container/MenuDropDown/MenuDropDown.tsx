import { useState } from "react";
import GetIcon from "../../../Icons/GetIcon";
import Menu from "../../Content/MenuList/Menu";
import useItemVisibility from "../../../../hooks/useItemVisibility";

interface Props {
  iconSize: number;
  iconType: string;
}

const DropDownContainer = ({ iconSize, iconType }: Props) => {
  const [itemVisibility, setItemVisibility] = useState(false);

  useItemVisibility({
    itemVisibility,
    setItemVisibility,
    containerClassName: "dropdown-menu",
    contentClassname: "menu"
  });

  return (
    <div className="dropdown">
      <GetIcon
        className="dropdown-icon dropdown-menu"
        iconType={iconType}
        iconSize={iconSize}
        onClick={() => setItemVisibility(!itemVisibility)}
      />
      <Menu />
    </div>
  );
};

export default DropDownContainer;
