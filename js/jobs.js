// Jobs Management System for Elevated Living Group
// Add or remove jobs from this array to automatically update the careers page

const jobListings = [
 
];

// Function to render job listings
function renderJobListings() {
  const jobsContainer = document.getElementById('jobs-container');
  
  if (!jobsContainer) {
    console.error('Jobs container not found');
    return;
  }

  // Clear existing content
  jobsContainer.innerHTML = '';

  if (jobListings.length === 0) {
    // Show "no current openings" message
    jobsContainer.innerHTML = `
      <div class="policy-section">
        <h2>Current Opportunities</h2>
        <p>We are always looking for passionate, dedicated individuals to join our team. While we don't have any open positions at the moment, we encourage you to submit your CV for future opportunities.</p>
        
        <div style="background: linear-gradient(135deg, #f0fdfc 0%, #e6fffa 100%); border: 2px solid #0f9688; padding: 2.5rem; border-radius: 12px; margin: 2rem 0; text-align: center; box-shadow: 0 4px 6px rgba(15, 150, 136, 0.1);">
          <div style="display: inline-flex; align-items: center; justify-content: center; width: 60px; height: 60px; background-color: #0f9688; border-radius: 50%; margin-bottom: 1.5rem;">
            <svg style="width: 30px; height: 30px; fill: white;" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h3 style="color: #0f9688; margin-bottom: 1rem; font-size: 1.5rem; font-weight: 700;">No Current Openings</h3>
          <p style="margin-bottom: 1.5rem; color: #047857; font-size: 1.1rem; line-height: 1.6;">We're not actively recruiting at this time, but we're always interested in hearing from talented professionals who share our values and commitment to children's care.</p>
          <div style="background-color: white; padding: 1.5rem; border-radius: 8px; margin-top: 1.5rem;">
            <p style="margin: 0; color: #0f9688; font-weight: 600; font-size: 1rem;"><strong>📄 Submit your CV below and we'll keep it on file for future opportunities.</strong></p>
          </div>
        </div>
      </div>
    `;
  } else {
    // Show job listings
    let jobsHTML = `
      <div class="policy-section">
        <h2>Current Opportunities</h2>
        <p>We are actively seeking passionate, dedicated individuals to join our team. Explore our current openings below and find the perfect role to make a meaningful difference in children's lives.</p>
        
        <!-- Job Listings -->
        <div style="display: grid; gap: 2rem; margin: 2rem 0;">
    `;

    jobListings.forEach(job => {
      jobsHTML += `
        <!-- ${job.title} -->
        <div style="background-color: #f8f9fa; padding: 2rem; border-radius: 8px; border-left: 4px solid #0f9688;">
          <div style="display: grid; grid-template-columns: 1fr auto; gap: 2rem; align-items: start;">
            <div>
              <h3 style="color: #0f9688; margin-bottom: 0.5rem; font-size: 1.5rem;">${job.title}</h3>
              <p style="color: #666; margin-bottom: 1rem; font-weight: 600;">${job.location} • ${job.contractType} • ${job.salary}</p>
              <p style="margin-bottom: 1.5rem; line-height: 1.6;">${job.description}</p>
              <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
                ${job.tags.map(tag => `<span style="background-color: #e3f2fd; color: #0f9688; padding: 0.25rem 0.75rem; border-radius: 50px; font-size: 0.875rem;">${tag}</span>`).join('')}
              </div>
              <p style="font-size: 0.9rem; color: #666;"><strong>Closing Date:</strong> ${job.closingDate}</p>
            </div>
            <div style="text-align: center;">
              <a href="${job.url}" style="background-color: #0f9688; color: white; padding: 1rem 2rem; border-radius: 50px; text-decoration: none; font-weight: 700; display: inline-block; white-space: nowrap;">View Details</a>
            </div>
          </div>
        </div>
      `;
    });

    jobsHTML += `
        </div>

        <div style="background-color: #e8f5e8; padding: 1.5rem; border-radius: 8px; margin: 2rem 0; text-align: center;">
          <p style="margin: 0; color: #2e7d32;"><strong>Don't see the right role?</strong> We're always interested in hearing from talented professionals. Submit your CV below and we'll keep it on file for future opportunities.</p>
        </div>
      </div>
    `;

    jobsContainer.innerHTML = jobsHTML;
  }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', renderJobListings);

// Global functions for managing jobs (can be used in browser console)
window.ElevatedLivingJobs = {
  addJob: function(job) {
    jobListings.push(job);
    renderJobListings();
    console.log('Job added:', job.title);
  },
  
  removeJob: function(jobId) {
    const index = jobListings.findIndex(job => job.id === jobId);
    if (index > -1) {
      const removedJob = jobListings.splice(index, 1)[0];
      renderJobListings();
      console.log('Job removed:', removedJob.title);
    } else {
      console.log('Job not found:', jobId);
    }
  },
  
  clearAllJobs: function() {
    jobListings.length = 0;
    renderJobListings();
    console.log('All jobs cleared');
  },
  
  listJobs: function() {
    console.log('Current jobs:', jobListings);
    return jobListings;
  }
}; 