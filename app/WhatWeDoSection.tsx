import React from 'react'
import logo1 from "@/assets/svg/Affordable Website.svg";
import logo2 from "@/assets/svg/MLM Software.svg";
import logo3 from "@/assets/svg/eCommerce site.svg";
import logo4 from "@/assets/svg/Marketing & Promotion.svg";
import logo5 from "@/assets/svg/Hosting & Emails.svg";
import logo6 from "@/assets/svg/Creative designers.svg";
import logo7 from "@/assets/svg/Excellent Support.svg";
import logo8 from "@/assets/Web Maintenance.svg";
import Image from 'next/image';


function WhatWeDoSection() {
  return (
    <div className='bg-slate-50 mt-10'>
        <div className="flex flex-col text-center gap-y-5 py-4">
            <div className="text-3xl font-bold font-sans">
            MLM CONSULTANT ASIA SERVICES
            </div>
     
        </div>
      <div className="grid grid-cols-2 gap-8 p-8 font-sans">
        <div className='md:col-span-1 col-span-2 '>  
           <div className="flex flex-col p-10 rounded-2xl bg-white justify-start space-y-5 hover:shadow-lg">
                <Image src={logo1} alt="svg1"  />
                <h3 className='text-xl font-bold'>Affordable Website</h3>
                <h3 className='text-lg font-normal text-slate-700'>Exceptional value for money is what we strive to achieve with all our services.</h3>
           </div>
        </div>
        <div className='md:col-span-1 col-span-2'>  
           <div className="flex flex-col p-10 rounded-2xl  bg-white justify-start space-y-5  hover:shadow-lg">
                <Image src={logo2} alt="svg1"  />
                <h3 className='text-xl font-bold'>MLM Software</h3>
                <h3 className='text-lg font-normal text-slate-700'>We develop all kinds of Multi Level Marketing (MLM) website and software.</h3>
           </div>
        </div>
        <div className='md:col-span-1 col-span-2'>  
           <div className="flex flex-col p-10 rounded-2xl  bg-white justify-start space-y-5  hover:shadow-lg">
                <Image src={logo3} alt="svg1"  />
                <h3 className='text-xl font-bold'>eCommerce site</h3>
                <h3 className='text-lg font-normal text-slate-700 font-sans'>We can update optimise and manage your website and online presence.</h3>
           </div>
        </div>
        <div className='md:col-span-1 col-span-2'>  
           <div className="flex flex-col p-10 rounded-2xl bg-white justify-start space-y-5  hover:shadow-lg">
                <Image src={logo4} alt="svg1"  />
                <h3 className='text-xl font-bold'>Marketing & Promotion</h3>
                <h3 className='text-lg font-normal text-slate-700'>We can run all your internet marking and social media campaigns</h3>
           </div>
        </div>
        <div className='md:col-span-1 col-span-2'>  
           <div className="flex flex-col p-10 rounded-2xl bg-white justify-start space-y-5  hover:shadow-lg">
                <Image src={logo5} alt="svg1"  />
                <h3 className='text-xl font-bold'>Hosting & Emails</h3>
                <h3 className='text-lg font-normal text-slate-700'>We offer a range of hosting solutions to cater for any type of website.</h3>
           </div>
        </div>
        <div className='md:col-span-1 col-span-2'>  
           <div className="flex flex-col p-10 rounded-2xl  bg-white justify-start space-y-5  hover:shadow-lg">
                <Image src={logo6} alt="svg1"  />
                <h3 className='text-xl font-bold'>Creative designers</h3>
                <h3 className='text-lg font-normal text-slate-700'>A graphic designer&apos;s most valuable asset is his his/her creativity and it needs constant care and feeding.</h3>
           </div>
        </div>
        <div className='md:col-span-1 col-span-2'>  
           <div className="flex flex-col p-10 rounded-2xl bg-white justify-start space-y-5  hover:shadow-lg">
                <Image src={logo7} alt="svg1"  />
                <h3 className='text-xl font-bold'>Excellent Support</h3>
                <h3 className='text-lg font-normal text-slate-700'>We love what we do and with over 12 years experience we are always here help.</h3>
           </div>
        </div>
        <div className='md:col-span-1 col-span-2'>  
           <div className="flex flex-col p-10 rounded-2xl bg-white justify-start space-y-5  hover:shadow-lg">
                <Image src={logo8} alt="svg1"  />
                <h3 className='text-xl font-bold'>Web Maintenance</h3>
                <h3 className='text-lg font-normal text-slate-700'>We can update optimise and manage your website and online presence.</h3>
           </div>
        </div>
      </div>
      
    </div>
  )
}

export default WhatWeDoSection;
