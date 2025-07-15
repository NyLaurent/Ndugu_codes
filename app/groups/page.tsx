// app/groups/page.tsx
import { format, isAfter, isBefore, parseISO } from 'date-fns';

interface Group {
  id: string;
  name: string;
  description: string;
  focusArea: string;
  startDate: string;
  endDate?: string;
  members: number;
  maxMembers?: number;
  organizer: string;
  status: 'active' | 'upcoming' | 'completed';
  tags: string[];
  imageUrl?: string;
  joinUrl?: string;
}

export default function GroupsPage() {
  // Sample data - replace with your actual data source
  const groups: Group[] = [
    {
      id: '1',
      name: 'Web3 Builders Collective',
      description: 'A group for developers building decentralized applications on Ethereum and IPFS. We meet weekly to share knowledge, collaborate on projects, and discuss the latest in blockchain technology. All skill levels welcome!',
      focusArea: 'Blockchain Development',
      startDate: '2024-06-01',
      members: 24,
      maxMembers: 30,
      organizer: 'Alice Chen',
      status: 'active',
      tags: ['web3', 'ethereum', 'solidity', 'beginners-welcome'],
      imageUrl: '/images/groups/web3-builders.jpg',
      joinUrl: '/join/web3-builders'
    },
    {
      id: '2',
      name: 'AI Ethics Roundtable',
      description: 'Monthly discussions on ethical implications of AI systems and responsible development practices. This group brings together technologists, philosophers, and policymakers to examine critical issues in AI deployment.',
      focusArea: 'Artificial Intelligence',
      startDate: '2024-07-15',
      endDate: '2024-12-15',
      members: 12,
      organizer: 'Dr. Marcus Johnson',
      status: 'upcoming',
      tags: ['ai', 'ethics', 'discussion', 'monthly'],
      imageUrl: '/images/groups/ai-ethics.jpg'
    },
    {
      id: '3',
      name: 'Open Source Sustainability',
      description: 'This completed working group explored funding models for open source maintenance. Our final report with recommendations is available to all members. Some participants continue collaborating informally.',
      focusArea: 'Open Source',
      startDate: '2023-09-01',
      endDate: '2024-03-01',
      members: 18,
      organizer: 'Sarah Williams',
      status: 'completed',
      tags: ['opensource', 'sustainability', 'research'],
      imageUrl: '/images/groups/opensource.jpg'
    }
  ];

  const currentDate = new Date();
  
  // Categorize groups
  const activeGroups = groups.filter(group => group.status === 'active');
  const upcomingGroups = groups.filter(group => group.status === 'upcoming');
  const completedGroups = groups.filter(group => group.status === 'completed');

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Collaboration Groups</h1>
        <p className="text-gray-600">
          Join specialized groups to work with peers on focused projects and topics
        </p>
      </div>

      {/* Active Groups */}
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mr-3">Active Groups</h2>
          <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
            {activeGroups.length} meeting now
          </span>
        </div>

        {activeGroups.length > 0 ? (
          <div className="space-y-8">
            {activeGroups.map(group => (
              <GroupCard 
                key={group.id} 
                group={group} 
                status="active" 
              />
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
            <svg 
              className="mx-auto h-12 w-12 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No active groups</h3>
            <p className="mt-2 text-gray-500">
              There are currently no active collaboration groups. Check back soon or start your own!
            </p>
            <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
              Propose a Group
            </button>
          </div>
        )}
      </section>

      {/* Upcoming Groups */}
      {upcomingGroups.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Upcoming Groups</h2>
          <div className="space-y-8">
            {upcomingGroups.map(group => (
              <GroupCard 
                key={group.id} 
                group={group} 
                status="upcoming" 
              />
            ))}
          </div>
        </section>
      )}

      {/* Completed Groups */}
      {completedGroups.length > 0 && (
        <section>
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mr-3">Past Groups</h2>
            <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
              {completedGroups.length} completed
            </span>
          </div>
          <div className="space-y-8 opacity-80 hover:opacity-100 transition-opacity">
            {completedGroups.map(group => (
              <GroupCard 
                key={group.id} 
                group={group} 
                status="completed" 
              />
            ))}
          </div>
        </section>
      )}

      {/* Call to Action */}
      <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Want to start your own group?</h3>
        <p className="text-gray-600 mb-6">
          We support community-led collaboration groups. Submit a proposal and we'll help with promotion and resources.
        </p>
        <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
          Submit Group Proposal
        </button>
      </div>
    </div>
  );
}

function GroupCard({ 
  group, 
  status 
}: { 
  group: Group; 
  status: 'active' | 'upcoming' | 'completed' 
}) {
  const statusColors = {
    active: 'bg-green-100 text-green-800',
    upcoming: 'bg-blue-100 text-blue-800',
    completed: 'bg-gray-100 text-gray-800'
  };

  const memberPercentage = group.maxMembers 
    ? Math.round((group.members / group.maxMembers) * 100)
    : 0;

  return (
    <div className="border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
      <div className="md:flex">
        {/* Image Column */}
        {group.imageUrl && (
          <div className="md:w-1/3 h-48 md:h-auto bg-gray-100 overflow-hidden relative">
            <img
              className="w-full h-full object-cover"
              src={group.imageUrl}
              alt={group.name}
            />
            {status === 'completed' && (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-white font-medium bg-black bg-opacity-70 px-3 py-1 rounded-full">
                  Completed
                </span>
              </div>
            )}
          </div>
        )}

        {/* Content Column */}
        <div className="p-6 md:w-2/3">
          <div className="flex justify-between items-start mb-3">
            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusColors[status]} mb-2`}>
                {group.focusArea}
              </span>
              <h3 className="text-xl font-bold text-gray-900">{group.name}</h3>
            </div>
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColors[status]}`}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </div>

          <p className="text-gray-600 mb-5">{group.description}</p>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-1">Organized by</h4>
              <p className="text-sm text-gray-600">{group.organizer}</p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-1">Timeline</h4>
              <p className="text-sm text-gray-600">
                Started: {format(parseISO(group.startDate), 'MMMM d, yyyy')}
                {group.endDate && ` • Ended: ${format(parseISO(group.endDate), 'MMMM d, yyyy')}`}
              </p>
            </div>

            {status !== 'completed' && (
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-1">Participation</h4>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[...Array(Math.min(group.members, 5))].map((_, i) => (
                      <div 
                        key={i}
                        className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"
                      />
                    ))}
                    {group.members > 5 && (
                      <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
                        +{group.members - 5}
                      </div>
                    )}
                  </div>
                  <span className="text-sm text-gray-600">
                    {group.members} {group.maxMembers ? `of ${group.maxMembers}` : ''} members
                  </span>
                </div>
                {group.maxMembers && (
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        memberPercentage >= 90 ? 'bg-red-500' :
                        memberPercentage >= 50 ? 'bg-gray-300' : 'bg-gray-500'
                      }`} 
                      style={{ width: `${memberPercentage}%` }}
                    ></div>
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {group.tags.map(tag => (
                <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {status === 'active' && group.joinUrl && (
            <div className="mt-6">
              <a
                href={group.joinUrl}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                Join Group
              </a>
            </div>
          )}
          {status === 'upcoming' && (
            <div className="mt-6">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Notify Me When Available
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}