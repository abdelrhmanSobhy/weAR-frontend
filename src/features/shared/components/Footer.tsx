import { Link } from 'react-router-dom';
import LogoImg from '@/assets/logo.png'; 
import FacebookIcon from '@/assets/facebook.svg';
import TwitterIcon from '@/assets/twitter.svg';
import InstagramIcon from '@/assets/instagram.svg';
import LinkedInIcon from '@/assets/linkedin.svg';
import YoutubeIcon from '@/assets/youtube.svg';
import EmailIcon from '@/assets/email.svg';
import PhoneIcon from '@/assets/phone.svg';
import LocationIcon from '@/assets/location.svg';

const Footer = () => {
  return (
    <footer className="w-full bg-[#B6A092]/20 pt-16 pb-6 px-4 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-center gap-12 lg:gap-24 mb-12 px-5">
        
        <div className="flex flex-col items-center text-center lg:w-1/4">
          <div className="flex items-center justify-center gap-2 mb-6 mt-4">
            <img src={LogoImg} alt="weAR Logo" className="w-[54px] h-[49px]" />
            <span className="font-allura text-3xl text-[#937458]">weAR</span>
          </div>
          <p className="font-['DM_Sans'] text-lg text-black/70 max-w-[300px] mb-6 leading-[30px]">
            Where Shoppers Find Perfect Fit and Brands Discover Smarter Retail Solutions
          </p>
          <div className="flex justify-center gap-6">
            {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon, YoutubeIcon].map((icon, index) => (
              <img key={index} src={icon} alt="social" className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <h5 className="font-['Hanuman'] text-lg font-bold text-black mb-8">Product</h5>
            <ul className="space-y-4 font-['Hanuman'] text-base text-black/70">
              <li className="cursor-pointer hover:text-[#A86F52] transition-colors">Features</li>
              <li className="cursor-pointer hover:text-[#A86F52] transition-colors">Pricing</li>
              <li className="cursor-pointer hover:text-[#A86F52] transition-colors">Case studies</li>
              <li className="cursor-pointer hover:text-[#A86F52] transition-colors">Reviews</li>
              <li className="cursor-pointer hover:text-[#A86F52] transition-colors">Updates</li>
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h5 className="font-['Hanuman'] text-lg font-bold text-black mb-8">Company</h5>
            <ul className="space-y-4 font-['Hanuman'] text-base text-black/70">
              <li className="cursor-pointer hover:text-[#A86F52] transition-colors">About</li>
              <li className="cursor-pointer hover:text-[#A86F52] transition-colors">Contact us</li>
              <li className="cursor-pointer hover:text-[#A86F52] transition-colors">Careers</li>
              <li className="cursor-pointer hover:text-[#A86F52] transition-colors">Blog</li>
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h5 className="font-['Hanuman'] text-lg font-bold text-black mb-8">Support</h5>
            <ul className="space-y-4 font-['Hanuman'] text-base text-black/70">
              <li className="cursor-pointer hover:text-[#A86F52] transition-colors">Getting started</li>
              <li className="cursor-pointer hover:text-[#A86F52] transition-colors">Help center</li>
              <li className="cursor-pointer hover:text-[#A86F52] transition-colors">Server status</li>
              <li className="cursor-pointer hover:text-[#A86F52] transition-colors">Report a bug</li>
              <li>
                <Link to="/admin/chat" className="cursor-pointer hover:text-[#A86F52] transition-colors">
                  Chat support
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center sm:items-start max-w-[250px] mx-auto sm:mx-0">
            <h5 className="font-['Hanuman'] text-lg font-bold text-black mb-8">Contact us</h5>
            <ul className="space-y-4">
              <li className="flex items-center sm:items-start gap-3 text-black/70 font-['Hanuman'] text-base text-center sm:text-left">
                <img src={EmailIcon} alt="" className="w-5 mt-1 shrink-0" /> <span>contact@company.com</span>
              </li>
              <li className="flex items-center sm:items-start gap-3 text-black/70 font-['Hanuman'] text-base text-center sm:text-left">
                <img src={PhoneIcon} alt="" className="w-5 mt-1 shrink-0" /> <span>(414) 687 - 5892</span>
              </li>
              <li className="flex items-center sm:items-start gap-3 text-black/70 font-['Hanuman'] text-base text-center sm:text-left">
                <img src={LocationIcon} alt="" className="w-5 mt-1 shrink-0" /> <span>794 Mcallister St San Francisco, 94102</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1476px] mt-10">
        <div className="w-full h-px bg-[#B6A092] mb-8 opacity-50"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-['Hanuman'] text-lg text-black/70 text-center px-4">
          <span>© 2025 ALL RIGHTS RESERVED</span>
          <div className="flex flex-wrap justify-center items-center gap-2">
            <span>All Rights Reserved</span> | 
            <span className="underline cursor-pointer text-[#B6A092]">Terms and Conditions</span> | 
            <span className="underline cursor-pointer text-[#B6A092]">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;