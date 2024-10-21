import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import TabletHeader from "./TabletHeader";

const Header = () => {
  return (
    <>
      <MobileHeader />
      <TabletHeader />
      <DesktopHeader />
    </>
  );
};

export default Header;
