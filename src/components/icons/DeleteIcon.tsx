interface DeleteIconProps {
  backgroundColor?: string;
  width?: number;
  height?: number;
}

const DeleteIcon = ({
  width = 16,
  height = 16,
  backgroundColor = "#C0C0C0",
}: DeleteIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.00004 12.6667C4.00004 13.4 4.60004 14 5.33337 14H10.6667C11.4 14 12 13.4 12 12.6667V4.66667H4.00004V12.6667ZM12.6667 2.66667H10.3334L9.66671 2H6.33337L5.66671 2.66667H3.33337V4H12.6667V2.66667Z"
        fill={backgroundColor}
        fill-opacity="0.87"
      />
    </svg>
  );
};

export default DeleteIcon;
