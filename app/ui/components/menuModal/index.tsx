import BannerMark from '@/app/ui/components/bannerMark';
import { CloseBtn, MenuModalWrapper } from './styles';

type MenuModalProps = {
  show_flag: boolean;
  onClose: () => void;
};

const MenuModal: React.FC<MenuModalProps> = ({ show_flag, onClose }) => {
  return (
    <>
      <MenuModalWrapper $isshow={show_flag}>
        <div className="row flex w-full justify-between">
          <BannerMark />
          <CloseBtn>
            <span className="leading-none" onClick={onClose}>&times;</span>
          </CloseBtn>
        </div>
        <div className="mt-[80px] flex h-[302px] w-full flex-col items-center justify-center">
          <div className="flex h-[130px] w-[144px] flex-col items-center justify-center space-y-[32px]">
            <h2>Community Deals</h2>
            <h2>Oss Friends</h2>
            <h2>Blog</h2>
          </div>
          <div className="flex flex-col mt-[80px] h-[92px] w-[243px] space-y-[8px]">
              <div className="radius-button-transparent rounded-[12px] h-[42px] md:w-[243px]">
                <h4 className="text-primary">Book a Call</h4>
              </div>
              <div className="radius-button rounded-[12px] h-[42px] w-[243px]">
                <h4>Discover the Platform</h4>
              </div>
            </div>
        </div>
      </MenuModalWrapper>
    </>
  );
};

export default MenuModal;
