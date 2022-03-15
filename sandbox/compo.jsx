<>
  <div className={`${headerGradientClass} clipBG`}></div>
  <div className={`relative overflow-hidden headerContainer`}>
    <div
      className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
      aria-hidden="true"
    >
      <div className="relative h-full max-w-7xl mx-auto">
        <svg
          className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="f210dbf6-a58d-4871-961e-36d5016a0f49"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
          />
        </svg>
        <svg
          className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
          />
        </svg>
      </div>
    </div>

    <div className="relative pt-6 pb-16 sm:pb-24">
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav
            className="relative flex items-center justify-between sm:h-10 md:justify-center"
            aria-label="Global"
          >
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <Link to={"/"}>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src={logo}
                      alt="Company logo"
                    />
                  </Link>
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <button
                    type="button"
                    onClick={() => {
                      setMenu(!showMenu);
                      console.log("Menu button clicked");
                    }}
                    className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>

                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:space-x-10">
              <a
                style={{ color: "white" }}
                href="#"
                className="font-medium text-gray-500"
              >
                <Dropdown Options={"Products"} />
              </a>

              <a
                style={{ color: "white" }}
                href="/forLenders"
                className="font-medium text-gray-500"
              >
                For Lenders
              </a>

              <Link
                style={{ color: "white" }}
                to="/use_cases"
                className="font-medium text-gray-500"
              >
                Use Case
              </Link>
              <a
                style={{ color: "white" }}
                href="#"
                className="font-medium text-gray-500"
              >
                Final Page
              </a>
            </div>
          </nav>
        </div>

        <div
          className={`${
            showMenu ? "" : "hidden"
          } absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <Link to={"/"}>
                  <img
                    width="100"
                    className="h-8 w-auto logo-mb"
                    src={darklogo}
                    alt=""
                  />
                </Link>
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  onClick={() => setMenu(!showMenu)}
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>

                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Product
              </a>

              <Link
                to="/use_cases"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Use Cases
              </Link>

              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700  hover:bg-gray-50"
              >
                Marketplace
              </a>

              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Company
              </a>
            </div>
            <a
              href="#"
              className="hidden block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
            >
              Log in
            </a>
          </div>
        </div>
      </div>

      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div className={matches ? "flex" : ""}>
          <h1
            className={`genericHeader text-7xl tracking-tight font-extrabold text-white-900 sm:text-5xl md:text-6xl ${
              matches && "header-text"
            } lenderColor`}
          >
            <span className="block xl:inline">{Caption}</span>
          </h1>
          <div className="max-w-md">
            {SubCaption && (
              <h2 style={{ color: "white" }} className="max-w-md text-3xl">
                {SubCaption}
              </h2>
            )}
            <p
              style={{ color: "white" }}
              className="mt-3 max-w-md mx-auto text-base text-rose-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            >
              {LeadIn}
            </p>
          </div>
        </div>
      </main>
    </div>
  </div>
</>;
