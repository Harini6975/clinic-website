import { useState } from "react";
import {
  CalendarDays,
  Plus,
  Pencil,
  Trash2,
  Eye,
  X,
  MapPin,
} from "lucide-react";

function Events() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Free Health Screening Camp",
      date: "2026-10-20",
      deadline: "2026-10-18",
      location: "Hospital Campus",
      type: "Health Camp",
      status: "Published",
    },
    {
      id: 2,
      title: "Healthcare Innovation Hackathon",
      date: "2026-11-05",
      deadline: "2026-10-30",
      location: "Online",
      type: "Hackathon",
      status: "Draft",
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    title: "",
    date: "",
    deadline: "",
    location: "",
    type: "Health Camp",
    description: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addEvent = (e) => {
    e.preventDefault();

    if (!form.title || !form.date || !form.description) {
      alert("Please fill in the required fields.");
      return;
    }

    const newEvent = {
      id: Date.now(),
      ...form,
      status: "Draft",
    };

    setEvents((current) => [...current, newEvent]);

    setForm({
      title: "",
      date: "",
      deadline: "",
      location: "",
      type: "Health Camp",
      description: "",
      email: "",
    });

    setShowModal(false);
  };

  const toggleStatus = (id) => {
    setEvents((current) =>
      current.map((event) =>
        event.id === id
          ? {
              ...event,
              status:
                event.status === "Published" ? "Draft" : "Published",
            }
          : event
      )
    );
  };

  const deleteEvent = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (!confirmed) return;

    setEvents((current) => current.filter((event) => event.id !== id));
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-semibold text-cyan-600">
            Admin Management
          </p>

          <h1 className="text-2xl font-bold text-slate-900">
            Events & Hackathons
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Create and manage hospital events, health camps and hackathons.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700"
        >
          <Plus size={18} />
          Add Event
        </button>
      </div>

      {/* Event Cards */}
      <div className="grid gap-5 md:grid-cols-2">
        {events.map((event) => (
          <div
            key={event.id}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-700">
                    {event.type}
                  </span>

                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      event.status === "Published"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {event.status}
                  </span>
                </div>

                <h2 className="text-lg font-bold text-slate-900">
                  {event.title}
                </h2>
              </div>

              <CalendarDays
                size={22}
                className="shrink-0 text-cyan-600"
              />
            </div>

            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CalendarDays size={16} className="text-slate-400" />
                <span>{event.date}</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-slate-400" />
                <span>{event.location}</span>
              </div>

              <p className="pt-2 text-sm leading-6 text-slate-500">
                {event.description}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                <Eye size={15} />
                Preview
              </button>

              <button
                type="button"
                onClick={() => toggleStatus(event.id)}
                className={`rounded-lg border px-3 py-2 text-xs font-semibold transition ${
                  event.status === "Published"
                    ? "border-amber-200 text-amber-700 hover:bg-amber-50"
                    : "border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                }`}
              >
                {event.status === "Published" ? "Unpublish" : "Publish"}
              </button>

              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                <Pencil size={15} />
                Edit
              </button>

              <button
                type="button"
                onClick={() => deleteEvent(event.id)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-50"
              >
                <Trash2 size={15} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {events.length === 0 && (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white py-16 text-center">
          <CalendarDays
            size={40}
            className="mx-auto text-slate-300"
          />

          <h2 className="mt-4 text-lg font-bold text-slate-800">
            No events yet
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Create your first event or hackathon.
          </p>
        </div>
      )}

      {/* Add Event Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 px-4 py-6">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Add New Event
                </h2>

                <p className="text-xs text-slate-500">
                  Create an event for the hospital website.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={addEvent} className="space-y-5 p-6">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Event Title *
                </label>

                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Example: Free Health Screening Camp"
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Event Date *
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Registration Deadline
                  </label>

                  <input
                    type="date"
                    name="deadline"
                    value={form.deadline}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Event Type
                  </label>

                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-cyan-500"
                  >
                    <option>Health Camp</option>
                    <option>Hackathon</option>
                    <option>Workshop</option>
                    <option>Awareness Program</option>
                    <option>Conference</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Venue / Location
                  </label>

                  <input
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="Hospital Campus / Online"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Description *
                </label>

                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Describe the event..."
                  className="w-full resize-none rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Registration / Contact Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="events@example.com"
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div className="flex justify-end gap-3 border-t border-slate-200 pt-5">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-cyan-700"
                >
                  Create Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Demo Notice */}
      <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
        <p className="text-sm font-semibold text-amber-800">
          Demo Administration Mode
        </p>

        <p className="mt-1 text-xs leading-5 text-amber-700">
          Events are currently stored temporarily in browser memory. A
          backend database and image upload system will be connected later.
        </p>
      </div>
    </div>
  );
}

export default Events;