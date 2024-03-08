function viewApplications() {
  var formData = new FormData(
    document.getElementById("jobApplicationForm")
  );
  var table = document.getElementById("applicationsTable");
  table.innerHTML = "";

  var headerRow = table.insertRow(0);
  var headers = [
    "First Name",
    "Last Name",
    "Phone Number",
    "Email",
    "Street",
    "City",
    "State",
    "ZIP Code",
    "Cover Letter",
    "Education Level",
    "School Name",
    "Major",
    "Graduation Year",
    "Previous Job Titles",
    "Company Names",
    "Employment Dates",
    "Job Responsibilities",
    "Relevant Skills",
    "Certifications",
    "Start Date",
    "Preferred Work Schedule",
    "Willingness to Relocate",
    "Reference Name",
    "Reference Contact Information",
    "Relationship to Applicant",
    "Why Work Here",
  ];
  for (var i = 0; i < headers.length; i++) {
    var headerCell = headerRow.insertCell(i);
    headerCell.innerHTML = headers[i];
  }

  var row = table.insertRow(1);
  formData.forEach(function (value, key) {
    var cell = row.insertCell();
    cell.innerHTML = value;
  });

  table.style.display = "table";
}

document
  .getElementById("jobApplicationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully");
      viewApplications();
    } else {
      console.log("Form submission failed");
    }
  });

function validateForm() {
  return true;
}
