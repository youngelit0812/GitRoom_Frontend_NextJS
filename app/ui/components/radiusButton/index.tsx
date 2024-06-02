import { RadiusButtonWrapper } from '@/app/ui/components/radiusButton/styles';

type RadiusButtonProps = {
  absolute_flag?: boolean;
  desktop_height: number;
  desktop_width: number;
  label: string;
  mobile_height: number;
  mobile_width: number;
};

const RadiusButton: React.FC<RadiusButtonProps> = ({
  absolute_flag,
  desktop_height,
  desktop_width,
  label,
  mobile_height,
  mobile_width,
}) => {
  return (
    <RadiusButtonWrapper
      className={`${
        absolute_flag ? 'absolute right-[4px] top-[4px]' : ''
      } cursor-pointer flex items-center justify-center rounded-[12px] bg-linearGradient-1`}
      $desktop_height={desktop_height}
      $desktop_width={desktop_width}
      $mobile_height={mobile_height}
      $mobile_width={mobile_width}
    >
      <h5 className="text-body font-medium">{label}</h5>
    </RadiusButtonWrapper>
  );
};

export default RadiusButton;
