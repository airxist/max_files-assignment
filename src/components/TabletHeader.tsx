import { MobileLogo } from "./Logo";
import { icons } from "../constants";
import HeaderSwitch from "./HeaderSwitch";
import Btn from "./common/Btn";
import SearchBar from "./SearchBar";

const { Menu } = icons;

const TabletHeader = () => {
  const username = "Damisola Odusola";
  return (
    <header className="tablet-header">
      <MobileLogo styling="h-full flex-center w-[78px] border-2" />

      <div className="h-full flex-1 flex items-center px-3 justify-between border-2">
        <Btn
          icon={<Menu width={24} height={24} />}
          styling="bg-tranparent w-8 h-8"
        />

        <Btn
          text="initiate workflow"
          styling="bg-blue font-bold h-8 flex-center px-1 rounded-md text-sm"
        />

        <div className="flex items-center justify-around gap-x-2">
          <SearchBar styling="flex-center gap-x-5 h-8 flex-1" />

          <Btn
            styling="bg-blue font-bold h-8 flex-center px-1 rounded-md text-sm"
            text="Upload File"
          />

          <HeaderSwitch />

          <div className="font-bold text-base ml-5">
            <p className="hidden md:block">{username}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TabletHeader;
