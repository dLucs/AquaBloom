import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import db from "@astrojs/db";
import icon from "astro-icon";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), db(), icon(), tailwind()],
  image: { domains: ["https://unsplash.com/photos"] },
  output: "server",
});
