import { Link } from "react-router-dom";
import { HeartPulse, LogOut } from "lucide-react";

function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Admin Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          
          {/* Logo */}
          <Link to="/admin" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-600 text-white">
              <HeartPulse size={22} />
            </div>

            <div>
              <div className="text-lg font-bold text-slate-900">
                Hospital<span className="text-cyan-600">Care</span>
              </div>

              <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500">
                Admin Portal
              </p>
            </div>
          </Link>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="hidden rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 sm:block"
            >
              View Website
            </Link>

            <Link
              to="/admin/login"
              className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
            >
              <LogOut size={16} />
              Logout
            </Link>
          </div>
        </div>
      </header>

      {/* Admin Page Content */}
      <main>{children}</main>
    </div>
  );
}

export default AdminLayout;