import MobileNav from "../../components/share/MobileNav";
import Sidebar from "../../components/share/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="root">
      <Sidebar/>
      <MobileNav/>
      <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
      </div>
    </main>
  )
}