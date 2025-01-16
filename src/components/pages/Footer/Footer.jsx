// import * as React from 'react';

// export default function Footer() {
//   const footerSections = [
//     {
//       title: 'Company',
//       links: ['Home', 'Collection', 'About us'],
//     },
//     {
//       title: 'Site Map',
//       links: ['Plant care', 'New Arrival', 'Community'],
//     },
//     {
//       title: 'Contact',
//       links: ['+91 987654321', 'info@email.com', 'data@email.com'],
//     },
//     {
//       title: 'Social',
//       links: ['Facebook', 'Instagram', 'LinkedIn'],
//     },
//   ];

//   const socialIcons = [
//     {
//       src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/277a60e5c863072a9d40ab7cf6509bfb3f8160b746ce9fc2994cb341ca4abb97?placeholderIfAbsent=true&apiKey=819dcd522c624166a0d1a35807118002',
//       alt: 'Facebook icon',
//     },
//     {
//       src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c1dbc792225e75003f3ccfe590dcd4550f239d4dc4e7fdd6a3a5e9732a9cc12e?placeholderIfAbsent=true&apiKey=819dcd522c624166a0d1a35807118002',
//       alt: 'Twitter icon',
//     },
//     {
//       src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5b441ea6de15188b8e9b36f7e232b55204e635627fbd7318ea2788c3b0dc9869?placeholderIfAbsent=true&apiKey=819dcd522c624166a0d1a35807118002',
//       alt: 'Instagram icon',
//     },
//     {
//       src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f4f50663e744445d84235d616b0e200cb69871f6a2338aacbf1e2345901022b6?placeholderIfAbsent=true&apiKey=819dcd522c624166a0d1a35807118002',
//       alt: 'LinkedIn icon',
//     },
//   ];

//   return (
//     <div className="mt-20 flex w-full flex-col rounded-2xl bg-gray-800 px-16 pb-10 pt-16 max-md:mt-10 max-md:max-w-full max-md:px-5">
//       <div className="flex w-full items-end justify-between gap-5 text-lg font-medium text-white max-md:max-w-full">
//         <div className="flex flex-col items-start self-stretch text-white">
//           <div className="flex gap-3 text-2xl text-white">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/b88a97a123be4d7a4b658fdff6e1265a385176e5307e052f4939ea9e524a3695?placeholderIfAbsent=true&apiKey=819dcd522c624166a0d1a35807118002"
//               alt="Plant It Logo"
//               className="aspect-square w-[37px] shrink-0 rounded-none object-contain"
//             />
//             <div className="self-start">Plant It.</div>
//           </div>
//           <div className="mt-12 self-stretch max-md:mt-10">
//             The Planet Kingdom encompassed <br /> all living things that were not <br />
//             animals, and included algae
//           </div>
//         </div>

//         {footerSections.map((section, index) => (
//           <div key={index} className="mt-9 flex flex-col">
//             <div className="font-bold text-white">{section.title}</div>
//             {section.links.map((link, linkIndex) => (
//               <div key={linkIndex} className="mt-6 first:mt-7">
//                 {link}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>

//       <div className="mt-20 h-0.5 shrink-0 border border-solid border-white max-md:mt-10 max-md:max-w-full" />

//       <div className="mt-8 flex w-full gap-10 max-md:max-w-full">
//         <button className="flex gap-10 whitespace-nowrap rounded-md border border-solid border-neutral-300 bg-black bg-opacity-0 px-3 py-1 text-sm leading-loose text-zinc-200">
//           <span>English</span>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1438993047bdf45215cbbd1e3712294090a13b28cdf85bd24d83411763fe6ed?placeholderIfAbsent=true&apiKey=819dcd522c624166a0d1a35807118002"
//             alt=""
//             className="my-auto aspect-square w-4 shrink-0 object-contain"
//           />
//         </button>

//         <div className="w-[396px] shrink grow text-lg font-medium text-white max-md:max-w-full">
//           All Rights Reserved 2024@Intersnship@Planet It.
//         </div>

//         <div className="my-auto flex gap-6">
//           {socialIcons.map((icon, index) => (
//             <img
//               key={index}
//               loading="lazy"
//               src={icon.src}
//               alt={icon.alt}
//               className="aspect-square w-6 shrink-0 object-contain"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';

const Footer = () => {
  return (
    <footer className="m-5 rounded-lg bg-[#1C3035]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 gap-y-8 py-10 max-sm:mx-auto max-sm:max-w-sm sm:grid-cols-4 md:gap-8 lg:grid-cols-6">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <a href="https://Plant it..io/" className="flex justify-center lg:justify-start">
              <img src="src/assets/logo.svg" className="h-6 sm:h-9" alt="Plant it. Logo" />{' '}
              <span className="ml-5 mt-2 text-lg font-semibold text-white"> Plant It.</span>
            </a>
            <p className="py-8 text-center text-sm text-white lg:max-w-xs lg:text-left">
              The Planet Kingdom encompassed <br /> all living things that were not <br />
              and animals included
            </p>
          </div>

          <div className="mt-5 text-left lg:mx-auto">
            <h4 className="mb-7 text-lg font-medium text-white">Company</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-3">
                <a href="javascript:;" className="text-white">
                  Home
                </a>
              </li>
              <li className="mb-3">
                <a href="javascript:;" className="text-white">
                  Collection
                </a>
              </li>
              <li className="mb-3">
                <a href="javascript:;" className="text-white">
                  About us
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-5 text-left lg:mx-auto">
            <h4 className="mb-7 text-lg font-medium text-white">Site Map</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-3">
                <a href="javascript:;" className="text-white">
                  Plant Care
                </a>
              </li>
              <li className="mb-3">
                <a href="javascript:;" className="text-white">
                  New Arrivals{' '}
                </a>
              </li>
              <li className="mb-3">
                <a href="javascript:;" className="text-white">
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-5 text-left lg:mx-auto">
            <h4 className="mb-7 text-lg font-medium text-white">Contact</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-3">
                <a href="javascript:;" className="text-white">
                  +91 9876543210
                </a>
              </li>
              <li className="mb-3">
                <a href="javascript:;" className="text-white">
                  info@email.com
                </a>
              </li>
              <li className="mb-3">
                <a href="javascript:;" className="text-white">
                  data@email.com
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-5 text-left lg:mx-auto">
            <h4 className="mb-7 text-lg font-medium text-white">Social</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-3">
                <a href="javascript:;" className="text-white">
                  Facebook
                </a>
              </li>
              <li className="mb-3">
                <a href="javascript:;" className="text-white">
                  Instagram{' '}
                </a>
              </li>
              <li className="mb-3">
                <a href="javascript:;" className="text-white">
                  LinkedIn{' '}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 py-7">
          <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
            <span className="text-center text-sm text-white">
              ©<a href="https://Plant it..io/">Plant it.</a> 2024, All rights reserved.
            </span>
            <div className="mt-4 flex space-x-4 sm:justify-center lg:mt-0">
              <a
                href="javascript:;"
                className="flex h-9 w-9 items-center justify-center rounded-full"
              >
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/277a60e5c863072a9d40ab7cf6509bfb3f8160b746ce9fc2994cb341ca4abb97?placeholderIfAbsent=true&apiKey=819dcd522c624166a0d1a35807118002" />
              </a>
              <a
                href="javascript:;"
                className="flex h-9 w-9 items-center justify-center rounded-full"
              >
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1dbc792225e75003f3ccfe590dcd4550f239d4dc4e7fdd6a3a5e9732a9cc12e?placeholderIfAbsent=true&apiKey=819dcd522c624166a0d1a35807118002" />
              </a>
              <a
                href="javascript:;"
                className="flex h-9 w-9 items-center justify-center rounded-full"
              >
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b441ea6de15188b8e9b36f7e232b55204e635627fbd7318ea2788c3b0dc9869?placeholderIfAbsent=true&apiKey=819dcd522c624166a0d1a35807118002" />
              </a>
              <a
                href="javascript:;"
                className="flex h-9 w-9 items-center justify-center rounded-full"
              >
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4f50663e744445d84235d616b0e200cb69871f6a2338aacbf1e2345901022b6?placeholderIfAbsent=true&apiKey=819dcd522c624166a0d1a35807118002" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
