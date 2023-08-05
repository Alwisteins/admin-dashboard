import { Window, EventNote, Chat } from "@mui/icons-material";

export default function Sidebar(): JSX.Element {
  return (
    <div className="bg-palette-white w-64 box-border h-screen">
      <div className="bg-palette-bg p-4">
        <h1 className="text-palette-100 text-base font-medium">Main</h1>
        <ul className="p-2">
          <li className="py-2 transform transition-transform duration-200 hover:translate-x-2 hover:bg-palette-200">
            <a className="text-palette-100 font-medium" href="/">
              <Window /> Dasboard
            </a>
          </li>
          <li className="py-2 transform transition-transform duration-200 hover:translate-x-2 hover:bg-palette-200">
            <a className="text-palette-100 font-medium" href="/calendar">
              <EventNote /> Calendar
            </a>
          </li>
          <li className="py-2 transform transition-transform duration-200 hover:translate-x-2 hover:bg-palette-200">
            <a className="text-palette-100 font-medium" href="">
              <Chat /> Chat app
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
