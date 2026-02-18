import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";

const AppLayout = () => {
  return (
    <div className="mx-auto min-h-screen max-w-md bg-background">
      <main className="px-4 pb-24 pt-6">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default AppLayout;
