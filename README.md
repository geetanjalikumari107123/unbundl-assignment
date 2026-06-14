# Unbundl Frontend Assessment

React + TypeScript + Vite implementation of the Whistle page sections from the Unbundl frontend assessment. The UI is built with Tailwind CSS utility classes and keeps the supplied visual direction, responsive horizontal card sections, accordion behavior, and sticky call-to-action footer.

## Setup

```bash
npm install
npm run dev
```

For a production check:

```bash
npm run build
```

## API Used

The FAQ section fetches additional questions from JSONPlaceholder:

```text
https://jsonplaceholder.typicode.com/posts?_limit=3
```

The data is loaded with `useEffect` and `useState` through `src/hooks/useFaqPosts.ts`. The section shows a loading message while the request is in progress and a friendly error message if the request fails.

## Approach

I kept the current Whistle visual layout intact and organized the page into reusable functional components. Static Figma-style content stays close to each section, while API loading logic lives in a dedicated hook so the UI component remains readable. Existing interactions such as the FAQ accordion and form controls are preserved, with responsive Tailwind classes used throughout instead of switching to separate CSS files.
