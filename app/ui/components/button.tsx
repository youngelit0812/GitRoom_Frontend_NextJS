export default async function Button({
  absolute_flag,
  desktop_height,
  desktop_width,
  label,
  mobile_height,
  mobile_width,
}: {
  absolute_flag?: boolean;
  desktop_height: number;
  desktop_width: number;
  label: string;
  mobile_height?: number;
  mobile_width?: number;
}) {
  return (
    <div
      className={`${absolute_flag ? 'absolute right-[4px] top-[4px]' : ''} bg-linearGradient-1 justify-center text-body text-[14px] md:text-[16px] h-[${mobile_height}px] rounded-[12px] w-[${mobile_width}px] md:h-[${desktop_height}px] md:w-[${desktop_width}px]`}
    >
      {label}
    </div>
  );
}
