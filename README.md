### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

- `docker/web.dockerfile` - for npm

To build and run using Docker:

```bash
# For npm
docker build -f docker/web.dockerfile -t r1-app .

# Run the container
docker run -p 3000:3000 r1-app

# Run Infra
docker-compose -f docker/docker-compose.infra-amd64.yml up -d

docker-compose -f docker/docker-compose.infra-arm64.yml up -d
```

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

Built with ❤️ using React Router.

## Environment Variables

### Required Environment Variables

| Environment              | Description              | Default Value                      |
| ------------------------ | ------------------------ | ---------------------------------- |
| NEXT_PUBLIC_API_BASE_URL | Postgres connection URLs | postgres://r1:r1@localhost:5432/r1 |

## Drizzle

```bash
# https://orm.drizzle.team/docs/drizzle-kit-push
npx drizzle-kit push

# https://orm.drizzle.team/docs/kit-overview
npx drizzle-kit generate
npx drizzle-kit migrate
```
