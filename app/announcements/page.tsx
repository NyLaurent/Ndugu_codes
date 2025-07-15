// app/announcements/page.tsx
import { format } from 'date-fns';

interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  expires?: string;
  isImportant?: boolean;
}

export default function AnnouncementsPage() {
  // Sample data - replace with your actual data source
  const announcements: Announcement[] = [
    {
      id: '1',
      title: 'System Maintenance Scheduled',
      content: 'We will be performing maintenance on Saturday from 2-4 AM UTC.',
      date: '2025-06-15',
      expires: '2025-06-16',
      isImportant: true
    },
    {
      id: '2',
      title: 'New Feature Released',
      content: 'Check out our new dashboard analytics feature!',
      date: '2025-06-10',
      expires: '2025-07-10'
    },
    // Expired announcement example:
    {
      id: '3',
      title: 'Holiday Schedule',
      content: 'Our offices will be closed December 24-26 for Christmas.',
      date: '2024-12-20',
      expires: '2024-12-27'
    }
  ];

  const currentDate = new Date();
  
  // Filter announcements
  const activeAnnouncements = announcements.filter(ann => 
    !ann.expires || new Date(ann.expires) >= currentDate
  );
  
  const expiredAnnouncements = announcements.filter(ann => 
    ann.expires && new Date(ann.expires) < currentDate
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
   .slice(0, 3); // Show only 3 most recent expired

  return (
    <div className="max-w-4xl mt-12 mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout the Latest <span className='text-blue-700'>Announcements</span></h1>
      
      {/* Active Announcements Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Current Announcements</h2>
        
        {activeAnnouncements.length > 0 ? (
          <div className="space-y-6">
            {activeAnnouncements.map((announcement) => (
              <AnnouncementCard 
                key={announcement.id}
                announcement={announcement}
                isExpired={false}
              />
            ))}
          </div>
        ) : (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <p className="text-blue-800 font-medium">
              There are currently no active announcements. Check back later!
            </p>
          </div>
        )}
      </section>

      {/* Recent Expired Announcements Section */}
      {expiredAnnouncements.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recent Announcements</h2>
          <div className="space-y-6 opacity-75">
            {expiredAnnouncements.map((announcement) => (
              <AnnouncementCard
                key={announcement.id}
                announcement={announcement}
                isExpired={true}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function AnnouncementCard({ 
  announcement, 
  isExpired 
}: { 
  announcement: Announcement; 
  isExpired: boolean 
}) {
  return (
    <div className={`border rounded-lg overflow-hidden ${isExpired ? 'bg-gray-50' : 'bg-white'} ${
      announcement.isImportant && !isExpired ? 'border-yellow-400 border-2' : 'border-gray-200'
    }`}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className={`text-lg font-bold ${
            isExpired ? 'text-gray-500' : 'text-gray-900'
          }`}>
            {announcement.title}
          </h3>
          {announcement.isImportant && !isExpired && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              Important
            </span>
          )}
        </div>
        
        <p className={`mb-4 ${isExpired ? 'text-gray-400' : 'text-gray-600'}`}>
          {announcement.content}
        </p>
        
        <div className="flex justify-between items-center text-sm">
          <span className={isExpired ? 'text-gray-400' : 'text-gray-500'}>
            Posted: {format(new Date(announcement.date), 'MMM d, yyyy')}
          </span>
          {announcement.expires && (
            <span className={isExpired ? 'text-gray-400' : 'text-gray-500'}>
              {isExpired ? 'Expired' : 'Expires'}: {format(new Date(announcement.expires), 'MMM d, yyyy')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}