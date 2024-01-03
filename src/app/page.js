import Sidebar from "./components/Sidebar/sidebar";
import Tab from "./components/Tab/tab";
export default function Home() {
  return (
    <div className="flex min-h-screen">
      <aside>
        <Sidebar />
      </aside>
      <main className="flex-grow p-4">
        <Tab />
      </main>
    </div>
  );
}
