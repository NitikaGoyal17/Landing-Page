let fees = {};

fetch("fees.json")
  .then(res => res.json())
  .then(data => {
    fees = data;
    loadDropdowns();
    loadSectionData();
  });

function loadDropdowns() {
  const uniA = fees["uni-a"].courses;
  const uniB = fees["uni-b"].courses;

  let cA = document.getElementById("courseDropdownA");
  let cB = document.getElementById("courseDropdownB");

  uniA.forEach(c => cA.innerHTML += `<option value="${c.name}">${c.name}</option>`);
  uniB.forEach(c => cB.innerHTML += `<option value="${c.name}">${c.name}</option>`);
}

function loadSectionData() {
  // For LP1
  let a = fees["uni-a"];
  document.getElementById("courses-a").innerHTML =
    a.courses.map(c => `<li>${c.name}</li>`).join("");

  document.getElementById("placements-a").innerHTML =
    a.placements.topCompanies.map(c => `<li>${c}</li>`).join("") +
    `<li>Average Package: ${a.placements.avgPackage}</li>`;

  document.getElementById("facilities-a").innerHTML =
    a.facilities.map(f => `<li>${f}</li>`).join("");

  // For LP2
  let b = fees["uni-b"];
  document.getElementById("courses-b").innerHTML =
    b.courses.map(c => `<li>${c.name}</li>`).join("");

  document.getElementById("placements-b").innerHTML =
    b.placements.topCompanies.map(c => `<li>${c}</li>`).join("") +
    `<li>Average Package: ${b.placements.avgPackage}</li>`;

  document.getElementById("facilities-b").innerHTML =
    b.facilities.map(f => `<li>${f}</li>`).join("");
}

// Modal
function openFeesModal(id) {
  let modal = document.getElementById("feesModal");
  modal.style.display = "block";

  let uni = fees[id];

  document.getElementById("modalTitle").innerText = uni.name + " - Fees";
  document.getElementById("feeList").innerHTML =
    uni.courses.map(c => `<li><b>${c.name}</b>: ${c.feeRange}</li>`).join("");
}

function closeFeesModal() {
  document.getElementById("feesModal").style.display = "none";
}
