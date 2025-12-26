Quick start:

```bash
cd my-profile-spa
npm install
npm run setup   # creates .env.local with sample values
npm run dev
```

## Setup

### Environment Configuration

The project uses `.env.local` for local development configuration. The recommended cross-platform way to create a starter `.env.local` is:

```bash
npm run setup
```

This command will create `.env.local` with sample `VITE_` keys if it doesn't already exist. After creation, edit `.env.local` and set your real values, for example:

```dotenv
VITE_API_URL=you value here
VITE_API_KEY=your_api_key_here
```

Notes:
- This project uses `vue` and `vue-router` with `vite` as bundler.
- Environment variables must be prefixed with `VITE_` to be exposed to client code via `import.meta.env`.
- `.env.local` is intended to be local-only and should not be committed to source control.
