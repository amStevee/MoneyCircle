# MoneyCircle

**A modern, transparent way for trusted groups to save together.**

MoneyCircle is a web platform that digitises *Ajo* (also known as *Esusu* or *Adashe*), the traditional rotational savings system common across West Africa. Members of a group contribute a fixed amount on a schedule, and each cycle one member receives the pooled payout. MoneyCircle replaces notebooks, spreadsheets and WhatsApp reminders with a clear, shared record of every contribution and payout.

**Live site:** [money-circle-web.vercel.app](https://money-circle-web.vercel.app)

> **Status:** Early development. The public landing page and waitlist are live. Core group-savings features are being built.

---

## The Problem

Ajo works because of trust, but managing it is hard. After speaking with people who take part in Ajo groups, the same problems came up repeatedly:

- Contributions get forgotten.
- Payment records are difficult to track and easy to dispute.
- Group organisers spend more time chasing reminders than managing the savings.
- Disagreements happen when information is not visible to everyone.

## The Solution

MoneyCircle gives every group one transparent source of truth:

| Feature | Description |
| --- | --- |
| **Savings groups** | Create a private group with people you already know and trust |
| **Secure invites** | Invite members through a shareable link |
| **Configurable rules** | Set contribution amount, frequency, number of members, payout order and start date |
| **Contribution tracking** | See who has paid, what is due and how the group is progressing |
| **Payout schedule** | Everyone can see whose turn is next and when |
| **Reminders** | Keep members informed without the organiser chasing them |

Designed for families, friends, coworkers, cooperatives and local associations. No accounting knowledge required.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) with React |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Monorepo tooling | [Turborepo](https://turbo.build/repo) with [pnpm](https://pnpm.io/) workspaces |
| Code quality | ESLint, Prettier, shared TypeScript config |
| CI/CD | GitHub Actions |
| Hosting | [Vercel](https://vercel.com/) |

## Project Structure

This is a Turborepo monorepo.

```
MoneyCircle/
├── apps/
│   ├── web/                 # Main Next.js application (landing page and product)
│   └── docs/                # Next.js documentation app
├── packages/
│   ├── ui/                  # Shared React component library
│   ├── tailwind-config/     # Shared Tailwind configuration
│   ├── eslint-config/       # Shared ESLint rules
│   └── typescript-config/   # Shared tsconfig files
├── .github/workflows/       # CI workflows
├── turbo.json               # Turborepo pipeline configuration
├── pnpm-workspace.yaml      # pnpm workspace definition
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- [pnpm](https://pnpm.io/installation)

### Installation

```bash
# Clone the repository
git clone https://github.com/amStevee/MoneyCircle.git
cd MoneyCircle

# Install dependencies for all apps and packages
pnpm install
```

### Run in development

```bash
# Start every app
pnpm dev

# Or start only the web app
pnpm dev --filter=web
```

The web app runs at [http://localhost:3000](http://localhost:3000).

### Build, lint and type-check

```bash
pnpm build
pnpm lint
```

## Roadmap

- [x] Landing page with waitlist, FAQ and product overview
- [x] Monorepo setup with shared UI, Tailwind and TypeScript configuration
- [x] CI pipeline and deployment on Vercel
- [ ] User authentication
- [ ] Create and manage savings groups
- [ ] Member invitations
- [ ] Contribution and payout tracking
- [ ] Notifications and reminders
- [ ] Group history and exportable records

## Design Principles

- **Built for trust:** transparency instead of assumptions.
- **Simple to use:** anyone in the group can understand it at a glance.
- **Organised:** every contribution is recorded and every payout is tracked.
- **Community first:** modernises Ajo without losing what makes it work.

## Contributing

Contributions, ideas and feedback are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

## Author

**Steven Anongo**, Backend and Full-Stack Developer, Abuja, Nigeria

- LinkedIn: [linkedin.com/in/steven-anongo](https://www.linkedin.com/in/steven-anongo)
- GitHub: [@amStevee](https://github.com/amStevee)
- X: [@am_stevenanongo](https://x.com/am_stevenanongo)

MoneyCircle began as the capstone project for a software development bootcamp.

## License

Add a license file (for example MIT) and reference it here.
