import { useState } from "react";
import {
  HeartPulse,
  Lock,
  Mail,
  Eye,
  EyeOff,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Demo login credentials
    if (
      email === "admin@hospitalcare.com" &&
      password === "admin123"
    ) {
      navigate("/admin");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-5">
          <Link to="/" className="flex items-center gap-3">
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
        </div>
      </header>

      {/* Login */}
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-5 py-12">
        <div className="w-full max-w-md">

          {/* Heading */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
              <Lock size={25} />
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Admin Login
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Sign in to manage your hospital website
            </p>
          </div>

          {/* Login Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <form onSubmit={handleLogin} className="space-y-5">

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@hospitalcare.com"
                    required
                    className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full rounded-lg border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-cyan-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-200"
              >
                Sign In
              </button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-6 rounded-lg bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Demo Login
              </p>

              <div className="mt-2 space-y-1 text-sm text-slate-600">
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  admin@hospitalcare.com
                </p>

                <p>
                  <span className="font-medium">Password:</span>{" "}
                  admin123
                </p>
              </div>
            </div>
          </div>

          {/* Back to Website */}
          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-sm font-medium text-cyan-600 transition hover:text-cyan-700"
            >
              ← Back to Hospital Website
            </Link>
          </div>

          <p className="mt-5 text-center text-xs text-slate-400">
            Demo admin portal • Authentication will be secured in a later phase
          </p>
        </div>
      </main>
    </div>
  );
}

export default AdminLogin;