export default function Timeline(): JSX.Element {
  return (
    <div className="absolute w-5/12 right-[40px] mt-[620px] p-10 hover:scale-105 duration-200 bg-palette-white rounded">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
            5 minute ago
          </time>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            John Doe ordered 6 product
          </h3>
          <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe optio
            necessitatibus laborum laudantium
          </p>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Detail{" "}
            <svg
              className="w-3 h-3 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
            5 minute ago
          </time>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Earn $710 from John Doe
          </h3>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            quaerat beatae
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
            3 hour ago
          </time>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            New seller employee join
          </h3>
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            doloribus exercitationem
          </p>
        </li>
      </ol>
    </div>
  );
}
