import { format, isAfter, isBefore } from "date-fns";

interface Callup {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  category: "opportunity" | "event" | "request";
  status?: "open" | "closed" | "upcoming";
  actionUrl?: string;
}

export default function CallupsPage() {
  const callups: Callup[] = [
    {
      id: "1",
      title: "Web3 Developer Grants",
      description:
        "Apply for funding for your open-source Web3 project. Grants up to $50,000 available.",
      startDate: "2024-06-01",
      endDate: "2024-06-30",
      category: "opportunity",
      status: "open",
      actionUrl: "/apply/grant",
    },
    {
      id: "2",
      title: "Community AMA Session",
      description:
        "Join our live Ask-Me-Anything with the core team next Thursday.",
      startDate: "2024-06-20",
      endDate: "2024-06-20",
      category: "event",
      status: "upcoming",
      actionUrl: "/events/ama-june",
    },
    {
      id: "3",
      title: "Beta Testers Needed",
      description: "Help test our new platform features before public release.",
      startDate: "2024-05-15",
      endDate: "2024-05-30",
      category: "request",
      status: "closed",
    },
  ];

  const currentDate = new Date();

  const openCallups = callups.filter(
    (callup) =>
      isAfter(new Date(callup.endDate), currentDate) &&
      isBefore(new Date(callup.startDate), currentDate)
  );

  const upcomingCallups = callups
    .filter((callup) => isAfter(new Date(callup.startDate), currentDate))
    .sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    );

  const recentClosedCallups = callups
    .filter((callup) => isBefore(new Date(callup.endDate), currentDate))
    .sort(
      (a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
    )
    .slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:py-24">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Callups
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Opportunities, events, and requests from our community
        </p>
      </div>

      <section className="mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Open Callups
          </h2>
          <span className="bg-green-100 text-green-800 text-xs sm:text-sm font-medium px-2 sm:px-2.5 py-0.5 rounded self-start">
            {openCallups.length} active
          </span>
        </div>

        {openCallups.length > 0 ? (
          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
            {openCallups.map((callup) => (
              <CallupCard key={callup.id} callup={callup} variant="open" />
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sm:p-8 text-center">
            <svg
              className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-base sm:text-lg font-medium text-gray-900">
              No open callups
            </h3>
            <p className="mt-1 text-gray-500 text-sm sm:text-base">
              There are currently no active opportunities. Check back soon!
            </p>
          </div>
        )}
      </section>

      {upcomingCallups.length > 0 && (
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Upcoming Callups
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {upcomingCallups.map((callup) => (
              <CallupCard key={callup.id} callup={callup} variant="upcoming" />
            ))}
          </div>
        </section>
      )}

      {recentClosedCallups.length > 0 && (
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Recently Closed
          </h2>
          <div className="space-y-4 sm:space-y-6 opacity-80">
            {recentClosedCallups.map((callup) => (
              <CallupCard key={callup.id} callup={callup} variant="closed" />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function CallupCard({
  callup,
  variant,
}: {
  callup: Callup;
  variant: "open" | "upcoming" | "closed";
}) {
  const categoryColors = {
    opportunity: "bg-blue-100 text-blue-800",
    event: "bg-purple-100 text-purple-800",
    request: "bg-orange-100 text-orange-800",
  };

  const variantStyles = {
    open: "border-green-200 hover:shadow-md",
    upcoming: "border-yellow-200 hover:shadow-sm",
    closed: "border-gray-200 opacity-75",
  };

  return (
    <div
      className={`border rounded-lg overflow-hidden transition-all ${variantStyles[variant]}`}
    >
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4">
          <div className="flex-1">
            <span
              className={`inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[callup.category]} mb-2`}
            >
              {callup.category.charAt(0).toUpperCase() +
                callup.category.slice(1)}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-gray-900">
              {callup.title}
            </h3>
          </div>
          {variant === "open" && (
            <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 self-start">
              Open
            </span>
          )}
        </div>

        <p className="mt-3 text-gray-600 text-sm sm:text-base">
          {callup.description}
        </p>

        <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 text-xs sm:text-sm">
          <div className="space-y-1 sm:space-y-0 sm:space-x-4 sm:flex">
            <span className="text-gray-500 block sm:inline">
              Starts: {format(new Date(callup.startDate), "MMM d, yyyy")}
            </span>
            <span className="text-gray-500 block sm:inline">
              Ends: {format(new Date(callup.endDate), "MMM d, yyyy")}
            </span>
          </div>

          {variant === "open" && callup.actionUrl && (
            <a
              href={callup.actionUrl}
              className="inline-flex items-center px-3 sm:px-4 py-2 border border-transparent text-xs sm:text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Apply Now
            </a>
          )}
          {variant === "upcoming" && callup.actionUrl && (
            <a
              href={callup.actionUrl}
              className="inline-flex items-center px-3 sm:px-4 py-2 border border-gray-300 text-xs sm:text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Learn More
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
