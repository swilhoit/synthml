# SynthML - Synthetic Data Generation Platform

SynthML is a modern web application for generating high-quality synthetic data with privacy guarantees. Our platform enables data engineers, data scientists, privacy officers, and analytics managers to create synthetic versions of their datasets for machine learning, analytics, and testing purposes.

## Dashboard Features

The SynthML dashboard provides a comprehensive enterprise-grade interface for managing the entire synthetic data generation workflow:

### Key Components

1. **Dashboard Overview**
   - Quick metrics about your synthetic data projects
   - Active jobs and recent activities
   - Charts for data quality and privacy assessment
   - Quick actions to start common tasks

2. **Data Sources**
   - Connect to databases, data warehouses, and file uploads
   - Manage existing data connections
   - Configure data profiling and PII detection
   - Set up data security and access controls

3. **Synthetic Models**
   - Create and manage various types of synthetic models:
     - Tabular data models (TabGAN, CTGAN, CopulaGAN)
     - Time-series models (TimeVAE, TimeGAN)
     - Text and image synthesis options
   - Configure model parameters and privacy settings
   - Visualize model performance metrics

4. **Monitoring**
   - Track generation jobs in real-time
   - View system resource usage
   - Monitor quality metrics for generated data
   - Manage quotas and usage limits

5. **Exports & Integration**
   - Export synthetic data in various formats
   - Set up scheduled exports
   - Integrate with external systems via AWS S3, Google Cloud, etc.
   - API access for programmatic integration

6. **Team Management**
   - Invite and manage team members
   - Set granular permissions for different roles
   - Review audit logs of team activity

7. **Settings**
   - Configure account preferences
   - Manage API keys
   - Set application defaults
   - Dark/light mode preferences

## Technical Implementation

The SynthML dashboard is built with:

- Next.js for server-side rendering and routing
- React for component-based UI
- Tailwind CSS for styling with a consistent design system
- TypeScript for type safety
- Responsive design for all screen sizes
- Dark mode support throughout the application

## Project Structure

```
app/dashboard/
├── components/        # Shared dashboard components
├── data-sources/      # Data connection management
├── exports/           # Export and integration features
├── models/            # Synthetic model configuration
│   └── new/           # New model creation form
├── monitoring/        # Job and resource monitoring
├── settings/          # User and application settings
├── team/              # Team management
├── layout.tsx         # Dashboard layout with navigation
└── page.tsx           # Dashboard home page
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Access the dashboard at: `http://localhost:3000/dashboard`

## License

[MIT License](LICENSE)
