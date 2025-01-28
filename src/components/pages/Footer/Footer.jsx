import logo from '../../../assets/images/newlogo.png';

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 right-0 m-5 rounded-lg bg-[#1C3035]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 gap-y-8 py-10 max-sm:mx-auto max-sm:max-w-sm sm:grid-cols-4 md:gap-8 lg:grid-cols-6">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <a href="#" className="flex justify-center lg:justify-start">
              <img src={logo} className="h-6 sm:h-9" alt="Plant it. Logo" />{' '}
              <span className="ml-5 mt-2 text-lg font-semibold text-white"> The Green Corner</span>
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
                <a href="#" className="text-white">
                  Home
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white">
                  Collection
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white">
                  About us
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-5 text-left lg:mx-auto">
            <h4 className="mb-7 text-lg font-medium text-white">Site Map</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-3">
                <a href="#" className="text-white">
                  Plant Care
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white">
                  New Arrivals{' '}
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white">
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-5 text-left lg:mx-auto">
            <h4 className="mb-7 text-lg font-medium text-white">Contact</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-3">
                <a href="#" className="text-white">
                  +91 9876543210
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white">
                  info@email.com
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white">
                  data@email.com
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-5 text-left lg:mx-auto">
            <h4 className="mb-7 text-lg font-medium text-white">Social</h4>
            <ul className="text-sm transition-all duration-500">
              <li className="mb-3">
                <a href="#" className="text-white">
                  Facebook
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white">
                  Instagram{' '}
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-white">
                  LinkedIn{' '}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 py-7">
          <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
            <span className="text-center text-sm text-white">
              ©<a href="https://Plant it..io/">The Green Corner</a> 2024, All rights reserved.
            </span>
            <div className="mt-4 flex space-x-4 sm:justify-center lg:mt-0">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/277a60e5c863072a9d40ab7cf6509bfb3f8160b746ce9fc2994cb341ca4abb97?placeholderIfAbsent=true&apiKey=819dcd522c624166a0d1a35807118002" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1dbc792225e75003f3ccfe590dcd4550f239d4dc4e7fdd6a3a5e9732a9cc12e?placeholderIfAbsent=true&apiKey=819dcd522c624166a0d1a35807118002" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b441ea6de15188b8e9b36f7e232b55204e635627fbd7318ea2788c3b0dc9869?placeholderIfAbsent=true&apiKey=819dcd522c624166a0d1a35807118002" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full">
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
