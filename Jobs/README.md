# Jobs Management System

This folder contains all job listing pages and is managed by the dynamic jobs system.

## How It Works

The careers page automatically displays job listings based on what's defined in `/js/jobs.js`. If no jobs are defined, it shows the "No Current Openings" message.

## Adding a New Job

1. **Create the job page**: Create a new HTML file in this `Jobs/` folder (e.g., `team-leader.html`)
2. **Update the jobs list**: Edit `/js/jobs.js` and add your new job to the `jobListings` array
3. **The careers page updates automatically**: The new job will appear immediately

### Example Job Object:
```javascript
{
  id: "team-leader",
  title: "Team Leader", 
  location: "Stockport",
  contractType: "Full-time Permanent",
  salary: "£28,000 - £32,000",
  description: "Lead a small team of care workers providing excellent support to children and young people...",
  tags: ["Level 4", "Leadership", "Team Management"],
  closingDate: "15th March 2025",
  url: "Jobs/team-leader.html"
}
```

## Removing a Job

1. **Delete the job page**: Remove the HTML file from this folder
2. **Update the jobs list**: Remove the job object from the `jobListings` array in `/js/jobs.js`
3. **The careers page updates automatically**: The job will no longer appear

## Removing All Jobs (Show "No Openings")

1. **Option 1**: Clear the `jobListings` array in `/js/jobs.js` (set it to `[]`)
2. **Option 2**: Use the JavaScript function: `window.ElevatedLivingJobs.clearAllJobs()`

When there are no jobs in the array, the careers page automatically shows the "No Current Openings" message.

## File Structure

```
Jobs/
├── README.md (this file)
├── residential-care-worker.html
├── deputy-manager.html
├── support-worker-part-time.html
└── [any other job pages]
```

## JavaScript Functions Available

You can also manage jobs programmatically using these functions in the browser console:

- `window.ElevatedLivingJobs.jobs` - View current jobs array
- `window.ElevatedLivingJobs.addJob(jobObject)` - Add a new job
- `window.ElevatedLivingJobs.removeJob('job-id')` - Remove a job by ID
- `window.ElevatedLivingJobs.clearAllJobs()` - Remove all jobs
- `window.ElevatedLivingJobs.render()` - Re-render the jobs display

## Best Practices

1. Always use lowercase, hyphenated IDs (e.g., `support-worker-part-time`)
2. Keep job descriptions concise but compelling (around 2-3 sentences)
3. Use consistent salary formatting (e.g., `£22,000 - £26,000`)
4. Update closing dates regularly
5. Test the job page before adding it to the jobs array

## Template

Use `/job-listing-template.html` as a starting point for creating new job pages. Remember to:
- Update the title, salary, and all placeholder content
- Update navigation if needed
- Save in this `Jobs/` folder
- Add to the jobs array in `/js/jobs.js` 