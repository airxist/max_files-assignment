import Switch from "./common/Switch";

const HeaderSwitch = () => {
  return (
    <div className="flex-center font-bold text-xs md:text-sm gap-x-1">
      <p>user</p>
      <Switch />
      <p>admin</p>
    </div>
  );
};

export default HeaderSwitch;
