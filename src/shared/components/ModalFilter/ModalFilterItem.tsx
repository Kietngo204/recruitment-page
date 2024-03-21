interface ModalFilterItemProps {
  company: string;
  id: number;
  selectedBg: number;
  onItemClick: () => void;
}

const ModalFilterItem: React.FC<ModalFilterItemProps> = ({
  company,
  id,
  selectedBg,
  onItemClick,
}) => {
  let classItem = "";
  if (id === selectedBg) {
    classItem =
      "gap-[10px] rounded-md bg-orange-alta px-3 py-[10px] bg-orange-alta text-white cursor-pointer";
  } else {
    classItem =
      "gap-[10px] rounded-md  px-3 py-[10px] bg-[#F1F3F5] cursor-pointer";
  }

  return (
    <div className={classItem} onClick={onItemClick}>
      {company}
    </div>
  );
};

export default ModalFilterItem;
