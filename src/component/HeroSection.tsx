import HeroBanner from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 items-center gap-20">
          {/* Left Content */}
          <div>
            <h1 className="text-6xl font-black">
              Build Your Ideal
              <span className="block bg-linear-to-r from-orange-500 via-red-500 to-fuchsia-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-500">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            <div className="mt-10 flex gap-3">
              <button className="btn border-0 bg-linear-to-r from-orange-500 to-pink-500 px-5 text-white shadow-none hover:from-orange-600 hover:to-pink-600">
                Explore Technologies
              </button>
              <button className="btn border border-slate-200 bg-white px-10 text-slate-600 shadow-none hover:bg-slate-50">
                Learn More
              </button>
            </div>
          </div>

          {/* Right content */}
          <div className="flex justify-end">
            <div className="relative w-full max-w-lg">
              <img
                src={HeroBanner}
                alt="Development stack illustration"
                className="relative z-10 w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
