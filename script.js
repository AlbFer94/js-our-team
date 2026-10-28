let teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const membriCorrenti = loadStorage();

if (membriCorrenti == null) {

  saveMembersToStorage(teamMembers);

} else {
  teamMembers = membriCorrenti;
}

renderTeam(teamMembers);


function renderTeam(listaMembri) {
  const teamContainer = document.querySelector(".team-container");

  let htmlDaScrivere = "";

  for (const thisMember of listaMembri) {
    htmlDaScrivere += getMemberCard(thisMember);
  }

  teamContainer.innerHTML = htmlDaScrivere;
}

function getMemberCard(member) {
  return `<div class="team-card">
                    <div class="card-image">
                        <img src="${member.img}" alt="Marco Bianchi">
                    </div>
                    <div class="card-text">
                        <h3>${member.name}</h3>
                        <p>${member.role}</p>
                        <p>${member.email}</p>
                    </div>
                    </div>`;

}

function saveMembersToStorage(membersList) {
  const datoSerializzato = JSON.stringify(membersList);
  localStorage.setItem("membri", datoSerializzato);
}

function loadStorage() {
  const datoSerializzato = localStorage.getItem("membri");
  const parsedData = JSON.parse(datoSerializzato);

  return parsedData;
}


/* Gestione del form */

const form = document.getElementById("member-form");
const nameField = document.getElementById("name");
const roleField = document.getElementById("role");
const emailField = document.getElementById("email");
const imageField = document.getElementById("image");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameField.value;
  const email = emailField.value;
  const role = roleField.value;
  const img = imageField.value;

  if (!name || !email || !role || !image) {
    alert("Tutti i campi sono obbligatori");
    return;
  }

  const newMember = {
    name,
    role,
    email,
    img,
  };

  teamMembers.push(newMember);

  saveMembersToStorage(teamMembers);

  renderTeam(teamMembers);

  event.target.reset();
});




