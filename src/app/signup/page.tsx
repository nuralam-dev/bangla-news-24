const signUpPage = () => {
  return (
    <div className=" bg-[#F8F9FA] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Form Heading */}
        <h2 className="text-3xl font-bold text-center text-[#B90000] mb-8">
          সাইন আপ
        </h2>

        {/* Signup Form */}
        <form className="flex flex-col gap-5">
          {/* Name Field */}
          <div className="form-control w-full">
            <label className="label pb-1.5">
              <span className="label-text text-gray-800 text-base font-normal">
                নাম
              </span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full bg-[#FBFBFB] border-gray-300 focus:border-[#B90000] focus:outline-none rounded-md h-12"
              required
            />
          </div>

          {/* Image URL Field */}
          <div className="form-control w-full">
            <label className="label pb-1.5">
              <span className="label-text text-gray-800 text-base font-normal">
                Image
              </span>
            </label>
            <input
              type="url"
              name="image"
              className="input input-bordered w-full bg-[#FBFBFB] border-gray-300 focus:border-[#B90000] focus:outline-none rounded-md h-12"
            />
          </div>

          {/* Email Field */}
          <div className="form-control w-full">
            <label className="label pb-1.5">
              <span className="label-text text-gray-800 text-base font-normal">
                ইমেইল
              </span>
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full bg-[#FBFBFB] border-gray-300 focus:border-[#B90000] focus:outline-none rounded-md h-12"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-control w-full">
            <label className="label pb-1.5">
              <span className="label-text text-gray-800 text-base font-normal">
                পাসওয়ার্ড
              </span>
            </label>
            <input
              type="password"
              name="password"
              className="input input-bordered w-full bg-[#FBFBFB] border-gray-300 focus:border-[#B90000] focus:outline-none rounded-md h-12"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn border-none bg-[#B90000] hover:bg-[#900000] text-white text-base font-medium w-full mt-2 h-12 rounded-md transition-colors"
          >
            সাইন আপ করুন
          </button>
        </form>

        {/* Footer Link */}
      </div>
    </div>
  );
};

export default signUpPage;
