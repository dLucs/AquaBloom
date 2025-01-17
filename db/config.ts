import { column, defineDb, NOW, defineTable } from "astro:db";

const Plant = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    location: column.text(),
    img_src: column.text(),
    next_watering: column.date({ default: NOW }),
    water_freq: column.number(),
  },
});
// https://astro.build/db/config
export default defineDb({
  tables: { Plant },
});
