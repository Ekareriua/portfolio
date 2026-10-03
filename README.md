# Kate — Portfolio

My personal portfolio website, built with React, TypeScript, Vite and plain CSS.

## Run it

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Deployment

The site is published with GitHub Pages at **https://kate-utina.github.io/portfolio/**.
Every push to `main` rebuilds and redeploys it automatically
(see `.github/workflows/deploy.yml`). Progress is shown in the repo's **Actions** tab.

## Where things live

```
src/
  data/          ← edit content here
    projects.ts    projects shown in the Projects section
    skills.ts      skill groups
    links.ts       email, GitHub and LinkedIn
    navigation.ts  menu items
  components/    ← one component (+ its CSS file) per section
  index.css      ← colours, fonts, spacing and shared styles
```

## Common changes

- **Add a project:** add an object to the list in `src/data/projects.ts` (there's an
  example in the comment). The Projects section and menu link appear automatically.
- **Add a screenshot:** put the image in `public/projects/` and set
  `image: 'projects/your-file.png'` on the project (no leading slash).
- **Add GitHub / demo links:** set `githubUrl` and `liveUrl` on the project.
- **Add contact links:** fill in `src/data/links.ts`. Empty values show "Coming soon".
- **Add a new section:** create a component using `<Section>`, add it to `App.tsx`,
  and add its id to `src/data/navigation.ts`.
- **Change colours:** edit the variables at the top of `src/index.css`.
