const Menu = ({ width, height }: { width: number; height: number }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 29 22"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="29" height="3.2381" fill="black" />
      <rect
        width="29"
        height="3.2381"
        transform="matrix(1 0 0 -1 0 12.6426)"
        fill="black"
      />
      <rect
        width="29"
        height="3.2381"
        transform="matrix(1 0 0 -1 0 21.5469)"
        fill="black"
      />
    </svg>
  );
};

export default Menu;
