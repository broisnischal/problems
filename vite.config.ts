import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup"
import { flatRoutes } from "remix-flat-routes"

export default defineConfig({
  plugins: [
    mdx({
    }),
    remixCloudflareDevProxy(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      routes: async defineRoutes => {
        return flatRoutes('routes', defineRoutes)
      },
    }),
    tsconfigPaths(),
  ],
});
