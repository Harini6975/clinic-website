import {
  Activity,
  CalendarDays,
  ClipboardList,
  FileText,
  Stethoscope,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

function Dashboard() {
  const stats = [
    {
      title: "Total Doctors",
      value: "6",
      icon: Users,
      description: "Registered doctors",
    },
    {
      title: "Appointments",
      value: "24",
      icon: CalendarDays,
      description: "Appointment requests",
    },
    {
      title: "Departments",
      value: "8",
      icon: Stethoscope,
      description: "Active specialities",
    },
    {
      title: "Career Applications",
      value: "8",
      icon: ClipboardList,
      description: "Recent applications",
    },
  ];

  const managementCards = [
    {
      title: "Doctors",
      description: "Add, edit and manage hospital doctors.",
      icon: Users,
      link: "/admin/doctors",
    },
    {
      title: "Appointments",
      description: "View and manage patient appointment requests.",
      icon: CalendarDays,
      link: "/admin/appointments",
    },
    {
      title: "Events",
      description: "Create and manage hospital events and announcements.",
      icon: Activity,
      link: "/admin/events",
    },
    {
      title: "Careers",
      description: "Manage career opportunities and applications.",
      icon: FileText,
      link: "/admin/careers",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-5 py-8">
      {/* Heading */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-cyan-600">
          Hospital Administration
        </p>

        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Manage your hospital website and administrative activities.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {stat.title}
                  </p>

                  <p className="mt-2 text-3xl font-bold text-slate-900">
                    {stat.value}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                  <Icon size={21} />
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-400">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Management */}
      <div className="mt-10">
        <div className="mb-5">
          <h2 className="text-xl font-bold text-slate-900">
            Manage Hospital
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Select an area to manage website information.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {managementCards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.title}
                to={card.link}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition group-hover:bg-cyan-50 group-hover:text-cyan-600">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {card.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {card.description}
                </p>

                <span className="mt-5 inline-block text-sm font-semibold text-cyan-600">
                  Manage →
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-10 rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-6 py-5">
          <h2 className="text-lg font-bold text-slate-900">
            Recent Activity
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Latest activity in the admin portal.
          </p>
        </div>

        <div className="divide-y divide-slate-100">
          <div className="flex items-center justify-between px-6 py-5">
            <div>
              <p className="text-sm font-semibold text-slate-800">
                New appointment request
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Demo activity
              </p>
            </div>

            <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
              Appointment
            </span>
          </div>

          <div className="flex items-center justify-between px-6 py-5">
            <div>
              <p className="text-sm font-semibold text-slate-800">
                Doctor information updated
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Demo activity
              </p>
            </div>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              Doctor
            </span>
          </div>

          <div className="flex items-center justify-between px-6 py-5">
            <div>
              <p className="text-sm font-semibold text-slate-800">
                Hospital event created
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Demo activity
              </p>
            </div>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              Event
            </span>
          </div>
        </div>
      </div>

      {/* Demo Notice */}
      <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4">
        <p className="text-sm font-semibold text-amber-800">
          Demo Administration Mode
        </p>

        <p className="mt-1 text-sm text-amber-700">
          The information shown here is placeholder data. Real hospital data
          and database connectivity will be added in a later phase.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;