# Deploy NextGen Infra to GitHub Pages (free)

## 0. Important
This site uses root links like `/projects`, so it must be served from the ROOT of a domain:
- Custom domain (best), e.g. https://www.yourdomain.com
- OR a repo named exactly `YOURUSERNAME.github.io` (served at https://YOURUSERNAME.github.io)
A normal repo (`github.com/you/nextgen-infra`) is served under `/nextgen-infra/` and links will break.

## 1. Put the code on GitHub
1. Create a GitHub account and a new empty repository (public). For a free preview use the name `YOURUSERNAME.github.io`.
2. In this folder run:
   git init
   git add .
   git commit -m "NextGen Infra website"
   git branch -M main
   git remote add origin https://github.com/YOURUSERNAME/REPONAME.git
   git push -u origin main

## 2. Turn on Pages
Repo > Settings > Pages > Source = **GitHub Actions**. Every push to `main` now builds and deploys (Actions tab shows progress, 1-3 minutes).

## 3. Set the real site address
- `astro.config.mjs`: change `site` to your final URL (e.g. "https://www.yourdomain.com" or "https://YOURUSERNAME.github.io").
- `src/config/site.ts`: change `url`.
- `public/robots.txt`: change the Sitemap line to the same domain.
Commit and push.

## 4. Custom domain
At your domain registrar's DNS settings add:
- 4 A records for host `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- 1 CNAME record: host `www` -> YOURUSERNAME.github.io
Then GitHub > Settings > Pages > Custom domain: enter the domain, Save, wait for the DNS check, tick **Enforce HTTPS**.
(DNS can take minutes to 24 hours. Confirm the IPs in GitHub's current docs.)

## 5. After going live
- Send a real test enquiry and confirm the email arrives.
- Run Lighthouse in Chrome (mobile) and fix anything under 90.
- Add the site to Google Search Console and submit /sitemap-index.xml.
- Replace placeholder images/text (see README) before telling the client it is final.
