import { MobileLogo } from "./Logo";
import { icons } from "../constants";
import HeaderSwitch from "./HeaderSwitch";
import Btn from "./common/Btn";

const { Menu, SearchIcon } = icons;

const MobileHeader = () => {
  const username = "Damisola Odusola";
  return (
    <header className="mobile-header">
      <MobileLogo styling="h-full flex-center w-[78px] border-2" />

      <div className="h-full flex-1 flex items-center px-3 justify-between border-2">
        <Btn
          icon={<Menu width={20} height={32} />}
          styling="bg-tranparent w-5 h-8 border"
        />

        <div className="flex items-center justify-around border gap-x-2">
          <Btn
            icon={<SearchIcon width={20} height={32} />}
            styling="bg-transparent"
          />

          <Btn
            icon={<SearchIcon width={20} height={32} />}
            styling="bg-transparent"
          />

          <HeaderSwitch />

          <div className="font-bold text-base ml-3 md:ml-[30px]">
            <p className="md:hidden">{username[0]}</p>
            <p className="hidden md:block">{username}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
