This project uses [Slater](https://tryslater.com) to run cron jobs inside a Next.js application [(read more)](https://tryslater.com)

To add a cron job to your application, install the Vercel integration and then create a `pages/api/[...slater.js]` file similar to the one in this example.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Cron jobs

To configure a cron job, edit the `pages/api/[...slater.js]` file.

Replace the `helloWorld` example with your own logic. You can configure the schedule using [crontab](https://crontab.guru/) if you're not familiar with cron scheduling.

Deploy to production with the [Slater Vercel integration](https://vercel.com/integrations/slater) configured in order to trigger your cron.

Read more at [tryslater.com/docs](https://tryslater.com/docs).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
