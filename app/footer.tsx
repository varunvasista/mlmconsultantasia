import { Icons } from "@/components/Icons";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/MLMLogo.png";
import call from "@/assets/svg/Phone.svg";
import logo3 from "@/assets/logo3.png";
import logo8 from "@/assets/logo8.png";
import { FC } from "react";
import whatsapp from "@/assets/svg/Whatsapp.svg";

const Footer: FC = () => {
  return (
    <footer>
      <div id="footer" className="text-black bg-white from-primary overflow-x-hidden mt-20 md:mt-10">
        <div className="px-4">
          <Image src={logo} alt="" className="md:px-10 md:w-[30rem] w-[20rem]" />
          <div className="flex flex-col">
            <div className="text-md text-gray-600 flex flex-row px-10 py-2 border-b">
              We are a Software Company focused on delivering the best and most cost-effective solutions to our clients.
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-10 space-y-4 p-6 md:p-10 ">
          <div className="col-span-1">
            <div className="flex flex-col space-y-4 md:py-8">
              <div className="text-lg font-bold">Drop Your Email Here</div>
              <div className="flex flex-col space-y-4 items-start ">
                <input
                  type="email"
                  className="border border-gray-300 text-md rounded-full md:px-2 px-4 py-2 w-fit"
                  placeholder="Enter your email address"
                />
                <button className="bg-blue-500 text-white text-md px-4 py-2 rounded-full hover:bg-blue-600">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1 px-4">
            <div className="flex flex-col space-y-4">
              <div className="text-lg font-bold">Contact</div>
              <div className="flex flex-row space-x-4">
                <Image src={call} alt="" />
                <div className="text-left font-normal text-sm">+66 99 118 9401</div>
              </div>
              <div className="flex flex-row space-x-4">
                <Image src={whatsapp} alt="" />
                <div className="text-left  font-normal text-sm">+63 967 384 5698</div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col space-y-4">
              <div className="text-lg font-bold">Address</div>
              <div className="text-md space-y-2 text-start">
                No 12, Soi Pridi 26 Wattana, Sukhumvit 71 Bangkok 10110 Thailand.
              </div>
              <div className="text-md space-y-2 text-start">
                Unit 302 3/Flr., Jollibee Plaza, F. Ortigas Jr. Road, Ortigas Center, Pasig City, Philippines 1600
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col space-y-4">
              <div className="text-lg font-bold">Partners</div>
            </div>
            <div className="flex space-x-4 object-cover">
              <Image src={logo3} alt="" width={96} />
              <Image src={logo8} alt="" width={96} />
            </div>
          </div>
        </div>
        <div className="text-center md:text-center md:p-8 text-slate-700 text-sm">
          ©2024 MLM Consultant Asia | All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
