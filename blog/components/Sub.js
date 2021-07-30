export default function Sub() {
  return (
    <>
      <div className="group relative mt-36">
        <div className="absolute h-80 w-full bg-white convex -mt-32 z-20"></div>
        <div className="flex items-center flex-row gap-12 px-64 py-4 absolute h-40 w-full  mt-52 z-20">
          <div>
            <h1 className=" mb-8 text-3xl font-semibold text-gray-100 ">
              Join my subscription letter
            </h1>
            <div className="flex flex-row gap-5">
              <div className=" w-96 h-16">
                <input
                  type="text"
                  placeholder="yourname@email.com"
                  className="px-3 py-3 h-12 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                />
              </div>

              <div className="flex h-full items-end">
                <div className="w-36 h-12 rounded flex justify-center text-gray-50 bg-red-500 cursor-pointer text-center items-center hover:shadow-md">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-96 bg-gray-700 z-10 "></div>
      </div>
    </>
  );
}
