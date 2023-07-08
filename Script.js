
// Sample data for candidates (replace with your own data)
const candidates = [
  { name: "John Doe", location: "New York", jobRole: "Software Engineer" },
  { name: "Jane Smith", location: "San Francisco", jobRole: "UI/UX Designer" },
  { name: "Mike Johnson", location: "Chicago", jobRole: "Data Analyst" },
  { name: "Emily Wilson", location: "New York", jobRole: "Marketing Manager" },
  { name: "John Doe", location: "New York", jobRole: "Software Engineer" },
  { name: "Jane Smith", location: "San Francisco", jobRole: "UI/UX Designer" },
  { name: "Mike Johnson", location: "Chicago", jobRole: "Data Analyst" },
  { name: "Emily Wilson", location: "New York", jobRole: "Marketing Manager" },
  
];

function searchCandidates() {
  // Clear previous search results
  const candidatesList = document.getElementById("candidates-list");
  candidatesList.innerHTML = "";

  // Get search parameters
  const locationInput = document.getElementById("location");
  const jobRoleInput = document.getElementById("job-role");
  const location = locationInput.value.toLowerCase();
  const jobRole = jobRoleInput.value.toLowerCase();

  // Filter candidates based on search parameters
  const filteredCandidates = candidates.filter(candidate => {
    const candidateLocation = candidate.location.toLowerCase();
    const candidateJobRole = candidate.jobRole.toLowerCase();

    // Check if either location or job role matches the search parameters
    return candidateLocation.includes(location) || candidateJobRole.includes(jobRole);
  });

  // Display the filtered candidates
  filteredCandidates.forEach(candidate => {
    const candidateItem = document.createElement("li");
    candidateItem.className = "candidate-item";
    candidateItem.innerHTML = `
      <div class="name">${candidate.name}</div>
      <div class="location">${candidate.location}</div>
      <div class="job-role">${candidate.jobRole}</div>
    `;

    candidatesList.appendChild(candidateItem);
  });

  // Clear search inputs
  locationInput.value = "";
  jobRoleInput.value = "";
}

