import { db, Plant } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Plant).values([
    {
      name: "Plant 1",
      location: "Living Room",
      img_src: "https://source.unsplash.com/random/?Plant?1",
      water_freq: 1,
    },
    /*     {
      name: "Plant 2",
      location: "Kitchen",
      img_src: "https://source.unsplash.com/random/?Plant?2",
      water_freq: 2,
    },
    {
      name: "Plant 3",
      location: "Bedroom",
      img_src: "https://source.unsplash.com/random/?Plant?3",
      water_freq: 3,
    },
    {
      name: "Plant 4",
      location: "Office",
      img_src: "https://source.unsplash.com/random/?Plant?4",
      water_freq: 4,
    },
    {
      name: "Plant 5",
      location: "Bathroom",
      img_src: "https://source.unsplash.com/random/?Plant?5",
      water_freq: 5,
    },
    {
      name: "Plant 6",
      location: "Sunroom",
      img_src: "https://source.unsplash.com/random/?Plant?6",
      water_freq: 6,
    },
    {
      name: "Plant 7",
      location: "Patio",
      img_src: "https://source.unsplash.com/random/?Plant?7",
      water_freq: 7,
    },
    {
      name: "Plant 8",
      location: "Dining Room",
      img_src: "https://source.unsplash.com/random/?Plant?8",
      water_freq: 8,
    },
    {
      name: "Plant 9",
      location: "Balcony",
      img_src: "https://source.unsplash.com/random/?Plant?9",
      water_freq: 9,
    },
    {
      name: "Plant 10",
      location: "Study",
      img_src: "https://source.unsplash.com/random/?Plant?10",
      water_freq: 10,
    }, */
  ]);
}
