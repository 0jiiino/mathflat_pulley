interface SwapHorizIconProps {
  width?: number;
  height?: number;
}

const SwapHorizIcon = ({ width = 16, height = 16 }: SwapHorizIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.66 7.33337L2 10L4.66 12.6667V10.6667H9.33333V9.33337H4.66V7.33337ZM14 6.00004L11.34 3.33337V5.33337H6.66667V6.66671H11.34V8.66671L14 6.00004Z"
        fill="#C0C0C0"
      />
    </svg>
  );
};

export default SwapHorizIcon;
