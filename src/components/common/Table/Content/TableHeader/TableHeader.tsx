import "./tableHeader.css";

interface Props {
  titles: string[];
}

const TableHeader = ({ titles }: Props) => {
  return (
    <div className="table-header">
      <div className="table-row">
        {titles.map((title) => (
          <span key={title}>{title}</span>
        ))}
      </div>
    </div>
  );
};

export default TableHeader;
