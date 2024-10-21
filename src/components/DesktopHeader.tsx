import { DesktopLogo } from "./Logo";
import Btn from "./common/Btn";
import { icons } from "../constants";
import HeaderSwitch from "./HeaderSwitch";
import SearchBar from "./SearchBar";

const { Menu } = icons;

const DesktopHeader = () => {
  const username = "Damilola Odunsola";
  return (
    <header className="desktop-header">
      <DesktopLogo styling="h-full flex-center w-[240px] border-2" />

      <div className="h-full flex-1 flex items-center gap-x-[70px] px-3 justify-between">
        <Btn
          icon={<Menu width={24} height={24} />}
          styling="bg-tranparent w-8 h-8"
        />

        <Btn
          text="initiate workflow"
          styling="bg-blue font-bold h-10 flex-center px-1 rounded-md text-[18px]"
        />

        <div className="flex items-center justify-around gap-x-5 w-[70%]">
          <SearchBar styling="flex-center gap-x-5 h-10 flex-1" />

          <Btn
            styling="bg-blue font-bold h-10 flex-center px-1 rounded-md text-[18px]"
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

export default DesktopHeader;
