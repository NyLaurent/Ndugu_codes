/* eslint-disable @typescript-eslint/no-unused-vars */
import { format, parseISO } from 'date-fns';

interface Channel {
  id: string;
  name: string;
  description: string;
  category: string;
  members: number;
  lastActivity?: string;
  isNew?: boolean;
  isOfficial?: boolean;
  tags: string[];
  icon?: string;
  joinUrl?: string;
}

export default function ChannelsPage() {
  // Sample data - replace with your actual data source
  const channels: Channel[] = [
    {
      id: '1',
      name: 'Web3 Developers',
      description: 'Discussion space for all things Web3, blockchain, and smart contract development. Share resources, ask questions, and collaborate.',
      category: 'Technology',
      members: 842,
      lastActivity: '2024-06-18T14:32:00',
      isOfficial: true,
      tags: ['web3', 'blockchain', 'solidity', 'beginners-welcome'],
      icon: '🌐',
      joinUrl: '/join/web3-devs'
    },
    {
      id: '2',
      name: 'Design Thinkers',
      description: 'For designers and creatives to share work, get feedback, and discuss UX/UI trends. Weekly design challenges and portfolio reviews.',
      category: 'Creative',
      members: 326,
      lastActivity: '2024-06-17T09:15:00',
      isNew: true,
      tags: ['ui', 'ux', 'figma', 'feedback'],
      icon: '🎨',
      joinUrl: '/join/design-thinkers'
    },
    {
      id: '3',
      name: 'Startup Founders',
      description: 'Private channel for startup founders to share experiences, ask for advice, and discuss challenges of building a business.',
      category: 'Business',
      members: 154,
      lastActivity: '2024-06-15T18:45:00',
      tags: ['entrepreneurship', 'funding', 'growth'],
      icon: '🚀'
    }
  ];

  const categories = Array.from(new Set(channels.map(channel => channel.category)));

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Channels</h1>
        <p className="text-gray-600">
          Join topic-specific channels to connect with like-minded members
        </p>
      </div>

      {/* Channels List */}
      <section>
        {channels.length > 0 ? (
          <div className="space-y-6">
            {channels.map(channel => (
              <ChannelCard 
                key={channel.id} 
                channel={channel} 
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
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No channels available yet</h3>
            <p className="mt-2 text-gray-500">
              Community channels will be created soon. Check back later or suggest a channel topic!
            </p>
            <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
              Suggest a Channel
            </button>
          </div>
        )}
      </section>

      {/* Call to Action */}
      <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Want to create your own channel?</h3>
        <p className="text-gray-600 mb-6">
          We support member-created channels for specific topics and interests.
        </p>
        <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
          Create New Channel
        </button>
      </div>
    </div>
  );
}

function ChannelCard({ channel }: { channel: Channel }) {
  return (
    <div className="border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start gap-4">
          {/* Channel Icon */}
          {channel.icon && (
            <div className="flex-shrink-0 text-3xl w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center">
              {channel.icon}
            </div>
          )}

          {/* Channel Content */}
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  {channel.name}
                  {channel.isOfficial && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                      Official
                    </span>
                  )}
                  {channel.isNew && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                      New
                    </span>
                  )}
                </h3>
                <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">
                  {channel.category}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                {channel.members.toLocaleString()} members
              </span>
            </div>

            <p className="text-gray-600 mb-4">{channel.description}</p>

            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {channel.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {tag}
                  </span>
                ))}
              </div>

              {channel.lastActivity && (
                <div className="text-sm text-gray-500 flex items-center">
                  <svg className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Active {format(parseISO(channel.lastActivity), 'MMM d, h:mm a')}
                </div>
              )}
            </div>

            {channel.joinUrl && (
              <div className="mt-6">
                <a
                  href={channel.joinUrl}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  Join Channel
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}