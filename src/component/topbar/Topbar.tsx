import { Notifications, Forum } from "@mui/icons-material";

export default function Topbar(): JSX.Element {
  return (
    <div className="bg-palette-white flex justify-between items-center h-12 mt-y px-5 z-99 shadow-[0_0_20px_0_rgba(165,182,214,0.75)]">
      <div className="text-palette-100 font-bold text-2xl cursor-pointer">Alwisteins</div>
      <div className="listWrapper">
        <ul className="flex items-center justify-between w-36 cursor-pointer">
          <li className="order-3">
          <img src="/profile.jpg" className=" w-10 h-10 rounded-full" alt="" />
          </li>
          <li className="order-2 flex items-center justify-center bg-palette-200 w-10 h-10 cursor-pointer rounded-full">
            <div className="bg-palette-500 absolute top-2 right-20 text-[10px] font-bold rounded-full">9+</div>
            <Forum className='text-palette-100 w-5 h-5' />
          </li>
          <li className="order-1 flex items-center justify-center bg-palette-200 w-10 h-10 cursor-pointer rounded-full">
          <div className="bg-palette-500 absolute top-2 right-[134px] text-[10px] font-bold rounded-full">9+</div>
            <Notifications className='text-palette-100 w-5 h-5' />
          </li>
        </ul>
      </div>
    </div>
  );
}
