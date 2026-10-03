// Mockups shown in the moving hero gallery. The images live in /public/hero.
// `ratio` is each image's shape (width / height): 0.8 is the tallest (4:5), bigger = shorter.
// `title` and `description` appear when you hover over a tile.
// Each column has its own images, so the same one never appears side by side.

export type HeroPhoto = {
  src: string
  ratio: number
  title: string
  description: string
}

export const heroPhotos: { left: HeroPhoto[]; right: HeroPhoto[] } = {
  left: [
    {
      src: 'hero/booking-laptop.webp',
      ratio: 1.457,
      title: 'Venue booking',
      description: 'Pick a date and time, then check availability.',
    },
    {
      src: 'hero/tasks-phone.webp',
      ratio: 0.857,
      title: 'Daily tasks',
      description: 'A simple to-do list for the day ahead.',
    },
    {
      src: 'hero/timer-tablet.webp',
      ratio: 1.621,
      title: 'Focus timer',
      description: 'Pomodoro sessions with a task list alongside.',
    },
    {
      src: 'hero/explore-phone.webp',
      ratio: 0.842,
      title: 'Travel explorer',
      description: 'Discover new places and plan the next trip.',
    },
    {
      src: 'hero/restaurant-laptop.webp',
      ratio: 1.868,
      title: 'Restaurant website',
      description: 'Menu, atmosphere and table booking.',
    },
    {
      src: 'hero/calories-phone.webp',
      ratio: 0.799,
      title: 'Nutrition tracker',
      description: 'Calories, macros and meals at a glance.',
    },
    {
      src: 'hero/portfolio-mountains-laptop.webp',
      ratio: 0.958,
      title: 'Photography portfolio',
      description: 'Big images and a clean gallery layout.',
    },
    {
      src: 'hero/reading-tablet.webp',
      ratio: 0.799,
      title: 'Reading app',
      description: 'Articles and photo stories on a tablet.',
    },
    {
      src: 'hero/nature-charity-laptop.webp',
      ratio: 1.871,
      title: 'Community charity',
      description: 'Local nature projects and ways to get involved.',
    },
    {
      src: 'hero/workout-list-phone.webp',
      ratio: 0.799,
      title: 'Workout plans',
      description: 'Choose a routine: full body, HIIT, core and more.',
    },
    {
      src: 'hero/ceramics-shop-laptop.webp',
      ratio: 0.799,
      title: 'Homeware shop',
      description: 'A calm online store for everyday objects.',
    },
    {
      src: 'hero/language-phone.webp',
      ratio: 0.799,
      title: 'Language learning',
      description: 'Bite-sized lessons with friendly prompts.',
    },
  ],
  right: [
    {
      src: 'hero/explore-phones.webp',
      ratio: 1.332,
      title: 'Hiking routes',
      description: 'Find trails, save routes and follow them on a map.',
    },
    {
      src: 'hero/dark-timer-tablet.webp',
      ratio: 0.8,
      title: 'Focus timer — dark',
      description: 'The same timer, easy on the eyes at night.',
    },
    {
      src: 'hero/home-shop-laptop.webp',
      ratio: 1.452,
      title: 'Online shop',
      description: 'Featured products for a calmer home.',
    },
    {
      src: 'hero/cafe-laptop.webp',
      ratio: 1.045,
      title: 'Café website',
      description: 'A cosy interior, menu highlights and a table booking button.',
    },
    {
      src: 'hero/business-laptop.webp',
      ratio: 1.876,
      title: 'Business website',
      description: 'A clear landing page for a growing company.',
    },
    {
      src: 'hero/my-tasks-phone.webp',
      ratio: 1.625,
      title: 'Task manager',
      description: 'Today, upcoming and done — all in one list.',
    },
    {
      src: 'hero/portfolio-kate-laptop.webp',
      ratio: 0.834,
      title: 'Personal portfolio',
      description: 'An early concept for this website.',
    },
    {
      src: 'hero/wave-dashboard-phone.webp',
      ratio: 0.8,
      title: 'Spending tracker',
      description: 'Expenses by category with a simple chart.',
    },
    {
      src: 'hero/plant-nature-laptop.webp',
      ratio: 0.955,
      title: 'Eco project',
      description: 'A green landing page for an environmental cause.',
    },
    {
      src: 'hero/calories-desk-phone.webp',
      ratio: 1.329,
      title: 'Meal planner',
      description: 'Breakfast, lunch and daily goals.',
    },
    {
      src: 'hero/calendar-laptop.webp',
      ratio: 0.799,
      title: 'Event calendar',
      description: 'A colour-coded schedule with venue details.',
    },
    {
      src: 'hero/profile-laptop.webp',
      ratio: 0.799,
      title: 'Profile page',
      description: 'An about section with a photo gallery.',
    },
  ],
}
