# SynthML Deployment Guide

This document outlines the steps to deploy the SynthML application to different hosting providers.

## Prerequisites

- Node.js 18.x or newer
- npm or yarn
- Git

## Environment Variables

Copy the `.env.example` file to a new file named `.env.local` and update the values as needed:

```bash
cp .env.example .env.local
```

## Deployment Options

### Option 1: Vercel (Recommended)

1. **Create a Vercel Account**
   
   Sign up at [vercel.com](https://vercel.com) if you don't have an account already.

2. **Install Vercel CLI** (optional)
   
   ```bash
   npm install -g vercel
   ```

3. **Deploy**
   
   a. Using the Vercel Dashboard:
      - Import your GitHub repository
      - Configure your project settings
      - Deploy

   b. Using Vercel CLI:
      ```bash
      vercel
      ```

4. **Set Environment Variables**
   
   Add the necessary environment variables in the Vercel dashboard.

### Option 2: Netlify

1. **Create a Netlify Account**
   
   Sign up at [netlify.com](https://netlify.com) if you don't have an account already.

2. **Deploy**
   
   - Connect your GitHub repository
   - Set the build command to `npm run build`
   - Set the publish directory to `.next`

3. **Set Environment Variables**
   
   Add the necessary environment variables in the Netlify dashboard.

### Option 3: Self-Hosted

1. **Build the Application**
   
   ```bash
   npm run build
   ```

2. **Start the Server**
   
   ```bash
   npm start
   ```

## Post-Deployment

- Verify that all functionality works correctly
- Check that the styling and layouts display correctly
- Test the application on different devices and screen sizes

## Troubleshooting

- **Build Errors**: Ensure all dependencies are installed and that your Node.js version is compatible
- **Styling Issues**: Clear browser cache or try in incognito mode
- **API Connection Issues**: Verify environment variables related to API connections

For additional help, please refer to the README.md file or open an issue on GitHub.
