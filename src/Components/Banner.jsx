const Banner = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://i.ibb.co/9kTF69Mh/unnamed.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          }}
        ></div>

        {/* Content */}
        <div
          className="relative z-10 text-center px-4"
          style={{
            animation: "slideUp 1s ease-out",
          }}
        >
          <h1
            className="text-white text-4xl md:text-6xl font-bold mb-4"
            style={{
              textShadow: "0 2px 4px rgba(0,0,0,0.7)",
            }}
          >
            Manage Your Parcels with Speed and Simplicity
          </h1>

          <p className="text-white text-lg mb-6 opacity-90">
            Tracking, delivery, and records — all in one place with a single
            click
          </p>

          {/* Search Bar */}
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="search your parcel"
              className="w-full max-w-md px-4 py-3 rounded-l-lg text-black focus:outline-none"
              style={{
                backgroundColor: "#fffbeb",
                border: "1px solid #fbbf24",
              }}
            />
            <button
              className="text-white px-6 py-3 rounded-r-lg transition duration-300"
              style={{
                backgroundColor: "#f59e0b",
              }}
            >
              Search
            </button>
          </div>
        </div>

        {/* Inline Animation */}
        <style>{`
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
      </section>
    </div>
  );
};

export default Banner;
