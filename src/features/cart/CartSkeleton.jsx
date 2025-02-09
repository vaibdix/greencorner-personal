// CartSkeleton.js
const CartSkeleton = () => (
  <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-5">
    <div className="grid grid-cols-12">
      <div className="col-span-12 w-full pt-14 pb-8 max-xl:mx-auto max-xl:max-w-3xl lg:py-14 lg:pr-8 xl:col-span-8">
        <div className="flex items-center justify-between border-b border-gray-300 pb-8">
          <div className="h-8 w-1/3 rounded bg-gray-200"></div>
          <div className="h-8 w-1/6 rounded bg-gray-200"></div>
        </div>
        <div className="mt-8 grid grid-cols-12 border-b border-gray-200 pb-6 max-md:hidden">
          <div className="col-span-12 md:col-span-7">
            <div className="h-6 w-1/3 rounded bg-gray-200"></div>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="grid grid-cols-5">
              <div className="col-span-3">
                <div className="h-6 w-1/4 rounded bg-gray-200"></div>
              </div>
              <div className="col-span-2">
                <div className="h-6 w-1/4 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="group flex flex-col gap-5 border-b border-gray-200 py-6 min-[500px]:flex-row min-[500px]:items-center"
          >
            <div className="w-full md:max-w-[126px]">
              <div className="h-[126px] w-full rounded bg-gray-200"></div>
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-4">
              <div className="md:col-span-2">
                <div className="flex flex-col gap-3 max-[500px]:items-center">
                  <div className="h-6 w-1/2 rounded bg-gray-200"></div>
                  <div className="h-6 w-2/3 rounded bg-gray-200"></div>
                  <div className="h-6 w-1/4 rounded bg-gray-200"></div>
                </div>
              </div>
              <div className="flex h-full items-center max-[500px]:justify-center max-md:mt-3">
                <div className="flex h-full items-center">
                  <div className="h-10 w-10 rounded-l-xl bg-gray-200"></div>
                  <div className="h-10 w-10 bg-gray-200"></div>
                  <div className="h-10 w-10 rounded-r-xl bg-gray-200"></div>
                </div>
              </div>
              <div className="flex h-full items-center max-[500px]:justify-center max-md:mt-3 md:justify-end">
                <div className="h-6 w-1/3 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-12 mx-auto w-full max-w-3xl bg-gray-50 py-14 max-xl:px-6 lg:pl-8 xl:col-span-4 xl:max-w-lg">
        <div className="mb-6 h-8 w-1/3 rounded bg-gray-200"></div>
        <div className="mt-8">
          <div className="flex items-center justify-between py-2">
            <div className="h-6 w-1/4 rounded bg-gray-200"></div>
            <div className="h-6 w-1/6 rounded bg-gray-200"></div>
          </div>
          <div className="mb-2 flex items-center justify-between py-2">
            <div className="h-6 w-1/4 rounded bg-gray-200"></div>
            <div className="h-6 w-1/6 rounded bg-gray-200"></div>
          </div>
          <div className="my-4 h-2 rounded bg-gray-200"></div>
          <div className="flex items-center justify-between py-5">
            <div className="h-6 w-1/4 rounded bg-gray-200"></div>
            <div className="h-6 w-1/6 rounded bg-gray-200"></div>
          </div>
          <div className="my-4 h-2 rounded bg-gray-200"></div>
          <div className="flex items-center justify-between py-5">
            <div className="h-6 w-1/4 rounded bg-gray-200"></div>
            <div className="h-6 w-1/6 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default CartSkeleton;
