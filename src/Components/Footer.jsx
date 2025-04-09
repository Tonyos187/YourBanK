import { Link } from "react-router";
import { Logo, LogoText } from "../Data/Logo.jsx";
import email from'../assets/image/page home/Subtract.svg'
import phone from '../assets/image/page home/Vector (Stroke).svg'
import locate from '../assets/image/page home/Subtract (1).svg'
import { socialMedia } from "../Data/SocialMedia.jsx";

const Links = [
  { name: "Home", path: "/" },
  { name: "Careers", path: "/careers" },
  { name: "About", path: "/about" },
  { name: "Security", path: "/security" },
];
const contact = [
  { icon: email, info: "hello@skillbirdge.com" },
  { icon: phone, info: "+91 91813 23 2309" },
  { icon: locate, info: "Somewhere in the World" },
];
function Footer() {
  return (
    <section className="bg-gray px-16 lg:px-162 md:px-80 pt-50 lg:pt-[100px] md:pt-60 pb-30 lg:pb-50 ">
      <div className=" mb-30 lg:mb-50 md:mb-40">
        <div className="flex justify-center items-center m-auto w-[132.46px] h-[34px] lg:w-[155.83px] mb-24 lg:mb-50 md:mb-40">
          <div className="w-[34] h-[34] lg:w-40 lg:h-40 flex justify-center items-center  ">
            <Logo className="w-[28.33px] h-[28.33px] lg:w-[33.33px] lg:h-[33.33px]" />
          </div>
          <LogoText className="w-[94.92px] h-[15.58px] lg:w-[111.67px] lg:h-[18.33px] " />
        </div>
        <div className=" text-whiteShades text-bodySm lg:text-bodyLg md:text-bodyMd w-[234px] lg:w-[323px] md:w-[260px] flex justify-between items-center m-auto ">
          {Links.map(({ name, path }) => (
            <Link className="focus:border-b-4  rounded  border-lightGreen transition-all duration-200" to={path}>{name}</Link>
          ))}
        </div>
      </div>

      <div className="border-b border-lightGray mb-30 lg:mb-50 md:mb-40"></div>

      
        <div className="flex flex-wrap justify-center items-center gap-[20px] text-bodySm lg:text-bodyLg md:text-bodyMd text-whiteShades mb-30 lg:mb-50 md:mb-40">
          {contact.map(({ icon, info }) => (
            <div className="flex justify-center gap-1 items-center">
              <img className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" src={icon} />
              <p>{info}</p>
            </div>
          ))}
        </div>
      

      <div className="border-b border-lightGray mb-30 lg:mb-50 md:mb-40"></div>

      <div className="relative flex flex-col lg:flex-row md:flex-row justify-center lg:justify-between md:justify-between items-center bg-darkGray ring-1 rounded-xl lg:rounded-full md:rounded-full ring-lightGray pt-50 pb-30 lg:pt-[16px] lg:pb-[16px] md:pt-[12px] md:pb-[12px]  lg:pl-[16px] pl-[12px] lg:pr-30 pr-24  ">
        <div className="absolute top-[-22px] md:static lg:static lg:top-0  md:top-0 flex justify-between items-center lg:gap-3 lg:w-[184px] w-[148px]">
          {socialMedia.map(({ png }) => (
            <img className=" w-[44px] md:h-[44px] lg:w-[52px] lg:h-[52px] " src={png} />
          ))}
        </div>
        <div>
          <p className="text-bodySm lg:text-bodyLg text-textGray">
            YourBank All Rights Reserved
          </p>
        </div>

        <div className=" mt-30  lg:mt-0 md:mt-0 flex justify-center items-center ">
          <Link to="/#" className=" text-textGray text-bodySm lg:text-bodyLg ">
            Privacy Policy
          </Link>
          <div className="after:border-l mx-[10px] after:border-l-textGray">
            
          </div>
          <Link to="/#" className=" text-textGray text-bodySm lg:text-bodyLg ">
            Terms of Service
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Footer