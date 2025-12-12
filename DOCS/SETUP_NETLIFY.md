# Netlify Setup Guide (GitHub Login Edition)

This guide walks you through setting up the site so your sister can edit it using her GitHub account.

## Prerequisites
- **Netlify Account** (for hosting).
- **GitHub Account** (for you).
- **GitHub Account** (for your sister).

## Step 1: Push Code & Connect to Netlify
1. Log in to [Netlify.com](https://app.netlify.com).
2. Click **"Add new site"** -> **"Import an existing project"**.
3. Select **GitHub** and choose the `itschill` repo.
4. **Build Settings**:
    - Build command: `astro build`
    - Publish directory: `dist`
5. Click **"Deploy"**.

## Step 2: Enable GitHub Login for CMS
Since we aren't using the deprecated "Netlify Identity" service, we need to register an OAuth app on GitHub so the CMS can talk to your repo.

1. Go to your **GitHub Settings** -> **Developer Settings** -> **OAuth Apps** -> **New OAuth App**.
2. **Application Name**: "It's Chill CMS" (or similar).
3. **Homepage URL**: `https://your-site-name.netlify.app` (The URL Netlify gave you).
4. **Authorization callback URL**: `https://api.netlify.com/auth/done`.
5. Click **"Register application"**.
6. Copy the **Client ID** and **Client Secret**.

## Step 3: Tell Netlify about the GitHub App
1. Go to your **Netlify Site Dashboard**.
2. Go to **Site Configuration** -> **Environment variables**.
3. Add these variables (optional generally, but helps organizing):
    - `GITHUB_CLIENT_ID`: (paste Client ID)
    - `GITHUB_CLIENT_SECRET`: (paste Client Secret)
4. **ACTUALLY, THE EASIER WAY**:
    - Go to **Site Configuration** -> **Access & Security** -> **OAuth**.
    - Click **"Install provider"**.
    - Select **GitHub**.
    - Paste the **Client ID** and **Client Secret** you got from GitHub.

## Step 4: Invite Your Sister
1. Go to your **GitHub Repository** (`AviFried/itschill`).
2. Click **Settings** -> **Collaborators**.
3. Click **"Add people"**.
4. Enter her GitHub username or email.
5. She will get an invite to access the repo.

## Step 5: Editing
1. She goes to `https://your-site-name.netlify.app/admin`.
2. Clicks **"Login with GitHub"**.
3. Done!
