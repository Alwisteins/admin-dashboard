import Sidebar from "./component/sidebar/Sidebar";
import Topbar from "./component/topbar/Topbar";
import Dasboard from "./pages/dashboard/Dasboard";

function App() {
  return (
    <div>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <Dasboard />
      </div>
    </div>
  );
}

export default App;
