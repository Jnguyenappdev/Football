let teams = [
    { code: 'DAL', name: 'Dallas Cowboys', plays: 'Arlington, TX' },
    { code: 'DEN', name: 'Denver Broncos', plays: 'Denver, CO' },
    { code: 'HOU', name: 'Houston Texans', plays: 'Houston, TX' },
    { code: 'KAN', name: 'Kansas City Chiefs', plays: 'Kansas City, MO' },
  ];
  
  function playerDropDown() {
    const teamSelectorEl = document.getElementById('teamSelector');
    for (let i = 0; i < teams.length; i++) {
      let optionEl = document.createElement('option');
      const team = teams[i];
      optionEl.textContent = team.name;
      optionEl.value = team.code;
      teamSelectorEl.appendChild(optionEl);
    }
  }
  playerDropDown();

//EXERCISE 1
function onButtonClicked(){
    const teamSelectorEl = document.getElementById('teamSelector');
    const teamcode = teamSelectorEl.value;
    //TO GET LOCATION LOOP THROUGH ARRAY VALUES 
    let selectedTeam;
    for (let i = 0; i < teams.length; i++){
        const team = teams[i];
        if (team.code == teamcode){
            selectedTeam = team;
            break;
        }
    }

    const message = `You selected the ${selectedTeam.name} ${selectedTeam.code} who play in ${selectedTeam.plays} `
    const messageEl = document.getElementById('message')
    messageEl.innerHTML = message
}

const btn = document.getElementById('btn')
btn.onclick = onButtonClicked
