import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import logoImage from "@/assets/auth/logo.webp";

export function RetailerFooter() {
  return (
    <footer className="bg-[#EAE5E0] pt-16 pb-8 px-8 md:px-12 lg:px-16 w-full shrink-0">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-[#B6A092]">
              <div className="h-[20px] w-[25px] overflow-hidden md:h-[40px] md:w-[45px]">
                <img
                  src={logoImage}
                  alt="weAR logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span
                className="translate-y-[1px] text-[#9F8062]"
                style={{
                  fontFamily: "Allura, cursive",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "100%",
                  letterSpacing: "0.01em",
                }}
              >
                weAR
              </span>
            </div>

            <p
              className="text-[15px] text-[#5C5550] leading-relaxed max-w-[280px]"
              style={{ fontFamily: '"PT Serif", serif' }}
            >
              Where Shoppers Find Perfect Fit and Brands Discover Smarter Retail
              Solutions
            </p>

            <div className="flex items-center gap-5 text-[#B6A092]">
              <a href="#" className="hover:text-[#8C7765] transition-colors">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:text-[#8C7765] transition-colors">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:text-[#8C7765] transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:text-[#8C7765] transition-colors">
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:text-[#8C7765] transition-colors">
                <Youtube size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="flex flex-col gap-6">
            <h4
              className="text-[18px] font-semibold text-[#1A1A1A]"
              style={{ fontFamily: '"PT Serif", serif' }}
            >
              Product
            </h4>
            <ul
              className="flex flex-col gap-4 text-[15px] text-[#5C5550]"
              style={{ fontFamily: '"PT Serif", serif' }}
            >
              <li>
                <a href="#" className="hover:text-[#B6A092] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#B6A092] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#B6A092] transition-colors">
                  Case studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#B6A092] transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#B6A092] transition-colors">
                  Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col gap-6">
            <h4
              className="text-[18px] font-semibold text-[#1A1A1A]"
              style={{ fontFamily: '"PT Serif", serif' }}
            >
              Company
            </h4>
            <ul
              className="flex flex-col gap-4 text-[15px] text-[#5C5550]"
              style={{ fontFamily: '"PT Serif", serif' }}
            >
              <li>
                <a href="#" className="hover:text-[#B6A092] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#B6A092] transition-colors">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#B6A092] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#B6A092] transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="flex flex-col gap-6">
            <h4
              className="text-[18px] font-semibold text-[#1A1A1A]"
              style={{ fontFamily: '"PT Serif", serif' }}
            >
              Support
            </h4>
            <ul
              className="flex flex-col gap-4 text-[15px] text-[#5C5550]"
              style={{ fontFamily: '"PT Serif", serif' }}
            >
              <li>
                <a href="#" className="hover:text-[#B6A092] transition-colors">
                  Getting started
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#B6A092] transition-colors">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#B6A092] transition-colors">
                  Server status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#B6A092] transition-colors">
                  Report a bug
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#B6A092] transition-colors">
                  Chat support
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Contacts us */}
          <div className="flex flex-col gap-6">
            <h4
              className="text-[18px] font-semibold text-[#1A1A1A]"
              style={{ fontFamily: '"PT Serif", serif' }}
            >
              Contacts us
            </h4>
            <ul
              className="flex flex-col gap-4 text-[15px] text-[#5C5550]"
              style={{ fontFamily: '"PT Serif", serif' }}
            >
              <li className="flex items-center gap-3">
                <Mail
                  size={18}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#1A1A1A]"
                />
                <a
                  href="mailto:contact@company.com"
                  className="hover:text-[#B6A092] transition-colors"
                >
                  contact@company.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  size={18}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#1A1A1A]"
                />
                <a
                  href="tel:4146875892"
                  className="hover:text-[#B6A092] transition-colors"
                >
                  (414) 687 - 5892
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#1A1A1A] mt-1"
                />
                <span className="leading-relaxed">
                  794 Mcallister St
                  <br />
                  San Francisco, 94102
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Links */}
        <div
          className="border-t border-[#D6CFC8] pt-6 flex flex-col md:flex-row items-center justify-between text-[14px]"
          style={{ fontFamily: '"PT Serif", serif' }}
        >
          <p className="text-[#5C5550]">© 2025 ALL RIGHTS RESERVED</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="text-[#1A1A1A]">All Rights Reserved</span>
            <span className="text-[#D6CFC8]">|</span>
            <a
              href="#"
              className="text-[#A3978F] hover:text-[#B6A092] transition-colors"
            >
              Terms and Conditions
            </a>
            <span className="text-[#D6CFC8]">|</span>
            <a
              href="#"
              className="text-[#A3978F] hover:text-[#B6A092] transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
