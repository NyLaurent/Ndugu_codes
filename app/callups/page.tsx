

export default function CallupsPage() {
  return (
    <div className="max-w-6xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:py-24">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Callups
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Web3 Mates is an emerging community—our opportunities, events, and requests are coming soon! Stay tuned as we grow and launch new ways to get involved.
        </p>
      </div>

      <section className="mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Open Callups
          </h2>
        </div>
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
            No open callups yet
          </h3>
          <p className="mt-1 text-gray-500 text-sm sm:text-base">
            We&apos;re just getting started—open opportunities will be available soon!
          </p>
        </div>
      </section>

      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
          Upcoming Callups
        </h2>
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
            No upcoming callups yet
          </h3>
          <p className="mt-1 text-gray-500 text-sm sm:text-base">
            All events and opportunities are planned for the future. Stay tuned!
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
          Recently Closed
        </h2>
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
            No closed callups yet
          </h3>
          <p className="mt-1 text-gray-500 text-sm sm:text-base">
            Once we launch, you&apos;ll see completed opportunities and events here.
          </p>
        </div>
      </section>
    </div>
  );
}
