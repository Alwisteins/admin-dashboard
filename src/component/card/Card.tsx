import {
  KeyboardDoubleArrowUp,
  KeyboardDoubleArrowDown,
} from "@mui/icons-material";

export default function Card() {
  return (
    <div className="flex w-11/12 my-10 mx-auto justify-between">
      <div className="bg-palette-white w-72 h-28 p-2.5 border-box hover:scale-105 duration-300 rounded shadow-[0_0_10px_0_rgba(165,182,214,0.25)]">
        <div className="flex justify-between">
          <span className=" text-palette-300">Revenue</span>
          <span className="bg-palette-500 text-xs text-palette-white font-medium flex justify-center items-center w-20 h-6 rounded">
            Weekly
          </span>
        </div>
        <span className="text-palette-100 text-3xl">$2000</span>
        <span className="text-palette-up ml-2">
          +3.4
          <KeyboardDoubleArrowUp />
        </span>
        {/* progres bar start */}
        <div className="flex justify-between mt-2 mb-1">
          <span className="text-xs font-medium text-blue-700 dark:text-white">
            Target
          </span>
          <span className="text-xs font-medium text-blue-700 dark:text-white">
            45%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
          <div className="bg-blue-600 h-1 rounded-full w-[45%]"></div>
        </div>
        {/* progres bar end */}
      </div>
      <div className="bg-palette-white w-72 h-28 p-2.5 border-box hover:scale-105 duration-300 rounded">
        <div className="flex justify-between">
          <span className=" text-palette-300">Cost</span>
          <span className="bg-palette-500 text-xs text-palette-white font-medium flex justify-center items-center w-20 h-6 rounded">
            Weekly
          </span>
        </div>
        <span className="text-palette-100 text-3xl">$1800</span>
        <span className="text-palette-down ml-2">
          -0.84
          <KeyboardDoubleArrowDown />
        </span>
        {/* progres bar start */}
        <div className="flex justify-between mt-2 mb-1">
          <span className="text-xs font-medium text-blue-700 dark:text-white">
            Target
          </span>
          <span className="text-xs font-medium text-blue-700 dark:text-white">
            31%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
          <div className="bg-blue-600 h-1 rounded-full w-[31%]"></div>
        </div>
        {/* progres bar end */}
      </div>
      <div className="bg-palette-white w-72 h-28 p-2.5 border-box hover:scale-105 duration-300 rounded">
        <div className="flex justify-between">
          <span className=" text-palette-300">Order</span>
          <span className="bg-palette-500 text-xs text-palette-white font-medium flex justify-center items-center w-20 h-6 rounded">
            Weekly
          </span>
        </div>
        <span className="text-palette-100 text-3xl">700</span>
        <span className="text-palette-up ml-2">
          +2
          <KeyboardDoubleArrowUp />
        </span>
        {/* progres bar start */}
        <div className="flex justify-between mt-2 mb-1">
          <span className="text-xs font-medium text-blue-700 dark:text-white">
            Target
          </span>
          <span className="text-xs font-medium text-blue-700 dark:text-white">
            52%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
          <div className="bg-blue-600 h-1 rounded-full w-[52%]"></div>
        </div>
        {/* progres bar end */}
      </div>
    </div>
  );
}
