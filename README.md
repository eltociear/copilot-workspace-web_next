# copilot-workspace-web_next

## Deploying on GitHub Pages

To deploy this Next.JS application on GitHub Pages, follow these steps:

1. Ensure you have a `next.config.js` file configured for GitHub Pages. This includes setting the `basePath` and `assetPrefix` to match your GitHub Pages URL.
2. Run `next build` and `next export` to generate the static export of your application.
3. Move the output from the `out` directory to a `docs/` directory at the root of your repository.
4. Push the changes to your GitHub repository.
5. Go to your repository's settings on GitHub, navigate to the Pages section, and select the `docs/` folder as the source for GitHub Pages.

This will make your Next.JS application accessible on GitHub Pages.
