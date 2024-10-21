import { LogoProps } from "../entities";

export const DesktopLogo = ({
  styling,
  textStyle = 'text-3xl font-bold',
  mainText = "Max",
  spanText = "Files",
}: LogoProps) => {
  return (
    <div className={styling}>
      <h1 className={`${textStyle} text-blue-500`}>
        {mainText}
        <span className="text-red-500">{spanText}</span>
      </h1>
    </div>
  );
};

export const MobileLogo = (props: LogoProps) => {
  return <DesktopLogo {...props} mainText="M" spanText="F" />;
};
