# 🌐 Infrastructure & Services

This document details the external services and infrastructure that power "It's Chill".

## Deployment Pipeline
The site uses a Modern CI/CD pipeline triggered by GitHub Actions.

```mermaid
graph LR
    A[GitHub Repo] -- Push to Main --> B[GitHub Action]
    B -- Build & Export --> C[GitHub Pages]
    C -- Content Delivery --> D[Cloudflare Proxy]
    D -- End User --> E[itschill.org]
```

### GitHub Pages
- **Environment**: `github-pages`
- **Workflow**: `.github/workflows/deploy.yml`
- **Build Command**: `npm run build`

### Cloudflare (DNS & Proxy)
- **Status**: Main domain `itschill.org` is managed by Cloudflare.
- **Proxying**: The "Orange Cloud" is enabled for SSL management and edge caching.
- **DNS Records**: Managed directly in the Cloudflare dashboard.

---

## External Integrations

### Fourth Wall (Shop)
- **URL**: `shop.itschill.org`
- **Integration**: DNS record for the `shop` subdomain is configured in Cloudflare (automated via Fourth Wall's integration).
- **Function**: Handles all e-commerce and merchandise.

### Google Analytics
- **Measurement ID**: `G-K2JFZ82JS5`
- **Implementation**: Injected via `src/layouts/Layout.astro`.
- **Dashboard**: Access via [Google Analytics](https://analytics.google.com/) for traffic reports, demographics, and site performance.

---

## Domain Configuration Summary
| Subdomain | Target | Managed By |
| :--- | :--- | :--- |
| `itschill.org` | GitHub Pages | Cloudflare |
| `www.itschill.org` | Redirect to Root | Cloudflare |
| `shop.itschill.org` | Fourth Wall | Cloudflare / Fourth Wall |

---

## Infrastructure Troubleshooting
- **Site not updating**: Check the [GitHub Actions tab](https://github.com/AviFried/itschill/actions) for build failures.
- **SSL Issues**: Check the Cloudflare "SSL/TLS" settings (should be set to 'Full' or 'Full (strict)').
- **Shop Issues**: Check the Fourth Wall dashboard for domain verification status.
