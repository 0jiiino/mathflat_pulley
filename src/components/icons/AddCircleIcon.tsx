interface AddCircleIconProps {
  backgroundColor: string;
  width?: number;
  height?: number;
}

const AddCircleIcon = ({
  width = 16,
  height = 16,
  backgroundColor,
}: AddCircleIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00004 1.33337C4.32004 1.33337 1.33337 4.32004 1.33337 8.00004C1.33337 11.68 4.32004 14.6667 8.00004 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 8.00004 1.33337ZM11.3334 8.66671H8.66671V11.3334H7.33337V8.66671H4.66671V7.33337H7.33337V4.66671H8.66671V7.33337H11.3334V8.66671Z"
        fill={backgroundColor}
      />
    </svg>
  );
};

export default AddCircleIcon;
