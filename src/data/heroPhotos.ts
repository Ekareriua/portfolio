// Mockups shown in the moving hero gallery. The images live in /public/hero.
// `ratio` is each image's shape (width / height): 0.8 is the tallest (4:5), bigger = shorter.
// Each column has its own images, so the same one never appears side by side.

export type HeroPhoto = {
  src: string
  ratio: number
}

export const heroPhotos: { left: HeroPhoto[]; right: HeroPhoto[] } = {
  left: [
    { src: 'hero/booking-laptop.webp', ratio: 1.457 },
    { src: 'hero/tasks-phone.webp', ratio: 0.857 },
    { src: 'hero/timer-tablet.webp', ratio: 1.621 },
    { src: 'hero/adventure-game-phone.webp', ratio: 0.803 },
    { src: 'hero/restaurant-laptop.webp', ratio: 1.868 },
    { src: 'hero/calories-phone.webp', ratio: 0.799 },
    { src: 'hero/portfolio-mountains-laptop.webp', ratio: 0.958 },
    { src: 'hero/reading-tablet.webp', ratio: 0.799 },
    { src: 'hero/nature-charity-laptop.webp', ratio: 1.871 },
    { src: 'hero/workout-list-phone.webp', ratio: 0.799 },
    { src: 'hero/ceramics-shop-laptop.webp', ratio: 0.799 },
    { src: 'hero/language-phone.webp', ratio: 0.799 },
  ],
  right: [
    { src: 'hero/explore-phones.webp', ratio: 1.332 },
    { src: 'hero/dark-timer-tablet.webp', ratio: 0.8 },
    { src: 'hero/home-shop-laptop.webp', ratio: 1.452 },
    { src: 'hero/workout-video-phone.webp', ratio: 0.799 },
    { src: 'hero/business-laptop.webp', ratio: 1.876 },
    { src: 'hero/castle-game-phone.webp', ratio: 0.799 },
    { src: 'hero/portfolio-kate-laptop.webp', ratio: 0.834 },
    { src: 'hero/wave-dashboard-phone.webp', ratio: 0.8 },
    { src: 'hero/plant-nature-laptop.webp', ratio: 0.955 },
    { src: 'hero/calories-desk-phone.webp', ratio: 1.329 },
    { src: 'hero/calendar-laptop.webp', ratio: 0.799 },
    { src: 'hero/island-game-phone.webp', ratio: 0.799 },
  ],
}
