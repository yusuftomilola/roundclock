import { plusIcon } from "../../assets";

const GenButton = ({ children }) => {
  return (
    <button className="bg-[#FEDC44] flex items-center gap-1 px-3 h-[28px] text-[10px]  font-bold text-nowrap rounded-sm">
      <img src={plusIcon} alt="plus icon" width={18} className="" />
      {children}
    </button>
  );
};

export default GenButton;
