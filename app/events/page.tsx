import EventsHero from "@/components/EventsHero";
import UpcomingEvents from "@/components/UpcomingEvents";
import LatestBlogPosts from "@/components/LatestBlogPosts";

export default function Events() {
  return (
    <main>
      <EventsHero />
    
      <LatestBlogPosts />
      <UpcomingEvents />
      
    </main>
  );
}
