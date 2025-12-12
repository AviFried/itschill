# Netlify Setup Guide

This guide will walk you through deploying your site to Netlify and enabling the CMS so your sister can edit content.

## Prerequisites
- A **GitHub Account**.
- A **Netlify Account** (Free tier is fine).

## Step 1: Connect to Netlify
1. Log in to [Netlify.com](https://app.netlify.com).
2. Click **"Add new site"** -> **"Import an existing project"**.
3. Select **GitHub**.
4. Authorize Netlify to access your GitHub repositories.
5. Select the **itschill** repository.

## Step 2: Configure Build Settings
Netlify should detect the settings automatically, but verify them:
- **Build command**: `astro build`
- **Publish directory**: `dist`

Click **"Deploy site"**.

## Step 3: Enable Identity (Crucial for CMS)
This allows users to log in to the admin panel.
1. Go to your site dashboard in Netlify.
2. Click **"Site configuration"** in the sidebar.
3. Select **"Identity"** (or look for the Identity tab).
4. Click **"Enable Identity"**.
5. Go to **"Registration references"** and set it to **"Invite only"** (so random people can't sign up to edit your site).
6. Under **"Services"** -> **"Git Gateway"**, click **"Enable Git Gateway"**. This gives the CMS permission to push changes to your repo appropriately.

## Step 4: Add Your Sister
1. Go to the **Identity** tab.
2. Click **"Invite users"**.
3. Enter your sister's email address.
4. She will receive an email to create a password.

## Step 5: Access the Admin Panel
Once deployed, she can go to:
`https://your-site-name.netlify.app/admin`

She will see a login/signup screen. She should log in with the account she just created.
