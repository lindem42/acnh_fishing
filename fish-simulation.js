// function to display map
// takes map and the id of the specific html where we want to display the map's data as parameters
function displayMap(targetMap, location){
  // display map in html table
  for (var [key, value] of targetMap){

    // create html elements to display each piece of data from map
    var row = document.createElement("tr");
    var keyElem = document.createElement("td");
    var valElem = document.createElement("td");
    var probElem = document.createElement("td");

    // add fish name to key element
    keyElem.innerHTML = key;
    // add count to value element
    valElem.innerHTML = value;
    // find probability and add to probability element
    probElem.innerHTML = parseFloat((value/500) * 100).toFixed(2) + "%";

    // add elements to row
    row.appendChild(keyElem);
    row.appendChild(valElem);
    row.appendChild(probElem);

    // add row to table
    document.getElementById(location).appendChild(row);
  }
}

// TABLE 01
// create map of key-value pairs for fish name and count, sorted by prevalence
var fishMapSorted = new Map();
// add data to map
fishMapSorted.set("horse mackerel", 99);
fishMapSorted.set("sea bass", 96);
fishMapSorted.set("squid", 49);
fishMapSorted.set("zebra turkeyfish", 39);
fishMapSorted.set("olive flounder", 37);
fishMapSorted.set("sea horse", 34);
fishMapSorted.set("red snapper", 27);
fishMapSorted.set("butterfly fish", 26);
fishMapSorted.set("barred knifejaw", 24);
fishMapSorted.set("clownfish", 19);
fishMapSorted.set("anchovy", 16);
fishMapSorted.set("surgeonfish", 8);
fishMapSorted.set("rock", 7);
fishMapSorted.set("can", 5);
fishMapSorted.set("oarfish", 5);
fishMapSorted.set("tire", 4);
fishMapSorted.set("boot", 3);
fishMapSorted.set("great trevally", 1);
fishMapSorted.set("mahi-mahi", 1);
// call function to add values to html table
displayMap(fishMapSorted, "fish-map-sorted-table");

// TABLE 02
// create map of key-value pairs for fish name and count
var fishMap = new Map();
// add data to map
fishMap.set("anchovy", 16);
fishMap.set("barred knifejaw", 24);
fishMap.set("boot", 3);
fishMap.set("butterfly fish", 26);
fishMap.set("can", 5);
fishMap.set("clownfish", 19);
fishMap.set("great trevally", 1);
fishMap.set("horse mackerel", 99);
fishMap.set("mahi-mahi", 1);
fishMap.set("oarfish", 5);
fishMap.set("olive flounder", 37);
fishMap.set("red snapper", 27);
fishMap.set("rock", 7);
fishMap.set("sea bass", 96);
fishMap.set("sea horse", 34);
fishMap.set("squid", 49);
fishMap.set("surgeonfish", 8);
fishMap.set("tire", 4);
fishMap.set("zebra turkeyfish", 39);
// call function to add values to html table
displayMap(fishMap, "fish-map-table");

// SIMULATION

// create a map of key-value pairs for fish name and spawn probability, derived from collected data
var fishProbMap = new Map();
for (var [key,value] of fishMapSorted){
  fishProbMap.set(key, parseInt((value/500) * 100));
}
// don't need to display the data from this map
// fishProbMap will be used to create an array of 100 "fish" derived from the probabilities in this map
// this array will be used for the simulation

// create array to store fish
var weightedArray = [];
// weightedArray will have 100 values corresponding to the spawn rates in fishProbMap
//for example, if the probability of catching a sea bass is 20%, then there will be 20 sea bass in the array

// evaluate each key-value pair in fishProbMap
for (var [key,value] of fishProbMap){
  for (var i = 0; i <= value; i++){
    // add the key to weightedArray as many times as its value
    // for example, if the key sea bass has a value of 20, it will be added to weightedArray 20 times
    weightedArray.push(key);
  }
}


// function to generate a random fish, using the weighted array
function generateFish(){
  // returns fish at a randomly generated index from 0 to 99 in weightedArray
  return weightedArray[Math.floor(Math.random() * 100)];
}

// function to run simulation
// generates 500 fish randomly, using the generateFish function
// the number of each fish is tracked in its own variable
// the function creates a new map of key-value pairs with the fish name as its keys and the count as its values
// the program will then create a table comparing the simulation values to the actual values

function runSimulation(){

  // if simulation has already been run and generated tables
  if (document.contains(document.getElementById("simulation-container"))) {
            document.getElementById("simulation-container").remove();
            document.getElementById("difference-container").remove();
  }

  // variables to keep track of number of each fish generated
  var clownfishCount = 0;
  var tireCount = 0;
  var horseMackerelCount = 0;
  var zebraTurkeyfishCount = 0;
  var redSnapperCount = 0;
  var squidCount = 0;
  var anchovyCount = 0;
  var seaHorseCount = 0;
  var seaBassCount = 0;
  var oliveFlounderCount = 0;
  var barredKnifejawCount = 0;
  var surgeonfishCount = 0;
  var canCount = 0;
  var bootCount = 0;
  var butterflyFishCount = 0;
  var rockCount = 0;
  var oarfishCount = 0;
  var greatTrevallyCount = 0;
  var mahiMahiCount = 0;

  for (var j = 0; j < 500; j++){ // run generateFish 500 times
    var randomFish = generateFish();
    // track result
    if (randomFish === "anchovy"){
      anchovyCount++;
    } else if (randomFish === "barred knifejaw"){
      barredKnifejawCount++;
    } else if (randomFish === "boot"){
      bootCount++;
    } else if (randomFish === "butterfly fish"){
      butterflyFishCount++;
    } else if (randomFish === "can"){
      canCount++;
    } else if (randomFish === "clownfish"){
      clownfishCount++;
    } else if (randomFish === "great trevally"){
      greatTrevallyCount++;
    } else if (randomFish === "horse mackerel"){
      horseMackerelCount++;
    } else if (randomFish === "mahi-mahi"){
      mahiMahiCount++;
    } else if (randomFish === "oarfish"){
      oarfishCount++;
    } else if (randomFish === "olive flounder"){
      oliveFlounderCount++;
    } else if (randomFish === "red snapper"){
      redSnapperCount++;
    } else if (randomFish === "rock"){
      rockCount++;
    } else if (randomFish === "sea bass"){
      seaBassCount++;
    } else if (randomFish === "sea horse"){
      seaHorseCount++;
    } else if (randomFish === "squid"){
      squidCount++;
    } else if (randomFish === "surgeonfish"){
      surgeonfishCount++;
    } else if (randomFish === "tire"){
      tireCount++;
    } else if (randomFish === "zebra turkeyfish"){
        zebraTurkeyfishCount++;
      }
  }

  //create map of results
  var simulationMap = new Map();
  // add data to map
  simulationMap.set("anchovy", anchovyCount);
  simulationMap.set("barred knifejaw", barredKnifejawCount);
  simulationMap.set("boot", bootCount);
  simulationMap.set("butterfly fish", butterflyFishCount);
  simulationMap.set("can", canCount);
  simulationMap.set("clownfish", clownfishCount);
  simulationMap.set("great trevally", greatTrevallyCount);
  simulationMap.set("horse mackerel", horseMackerelCount);
  simulationMap.set("mahi-mahi", mahiMahiCount);
  simulationMap.set("oarfish", oarfishCount);
  simulationMap.set("olive flounder", oliveFlounderCount);
  simulationMap.set("red snapper", redSnapperCount);
  simulationMap.set("rock", rockCount);
  simulationMap.set("sea bass", seaBassCount);
  simulationMap.set("sea horse", seaHorseCount);
  simulationMap.set("squid", squidCount);
  simulationMap.set("surgeonfish", surgeonfishCount);
  simulationMap.set("tire", tireCount);
  simulationMap.set("zebra turkeyfish", zebraTurkeyfishCount);

  // call function create tables
  createTable("simulation"); // TABLE 03
  createTable("difference"); // TABLE 04

  // call function to add values to table
  displayMap(simulationMap, "simulation-table");

  // add values to difference table
  for (var [key, value] of simulationMap){

    // create html elements to display each piece of data from map
    var row = document.createElement("tr");
    var keyElem = document.createElement("td");
    var valElem = document.createElement("td");
    var probElem = document.createElement("td");

    // add fish name to key element
    keyElem.innerHTML = key;

    // evaluate if difference in values is positive or negative and add it to value element
    var valDiff = value - fishMap.get(key);
    if (Math.sign(valDiff) == 1){
      valElem.innerHTML = "+" + valDiff;
    } else {
      valElem.innerHTML = valDiff;
    }

    // evaluate if difference in values is positive or negative and add difference in probability to probability element
    var probDiff = ((value/500) * 100) - ((fishMap.get(key)/500) * 100);
    var absVal = Math.abs(probDiff);
    if (absVal == 0){
      probElem.style.backgroundColor="#8cf5af";
    } else if (absVal > 0 && absVal < 1){
      probElem.style.backgroundColor = "#f7f588";
    } else if (absVal >= 1 && absVal < 2){
      probElem.style.backgroundColor="#ffd0b3";
    } else if (absVal >= 2){
        probElem.style.backgroundColor = "#ed9d98";
    }

    if (Math.sign(probDiff) == 1){
      probElem.innerHTML = "+" + parseFloat(probDiff).toFixed(2) + "%";
    } else if (Math.sign(probDiff) == 0){
      probElem.innerHTML = parseFloat(probDiff).toFixed(2);
    } else {
      probElem.innerHTML = parseFloat(probDiff).toFixed(2) + "%";
    }

    // add elements to row
    row.appendChild(keyElem);
    row.appendChild(valElem);
    row.appendChild(probElem);

    // add row to table
    document.getElementById("difference-table").appendChild(row);
  }

}

// function to generate table in html
function createTable(type){
  // create simulation table
  var container = document.createElement("div");
  container.classList.add("data-cont");
  var subheader = document.createElement("div");
  subheader.classList.add("subheader");
  var table = document.createElement("table");

  var row = document.createElement("tr");
  var header1 = document.createElement("td");
  header1.innerHTML = "fish";
  var header2 = document.createElement("td");
  header2.innerHTML = "count";
  var header3 = document.createElement("td");
  header3.innerHTML = "percent";

  // add header elements to header
  row.appendChild(header1);
  row.appendChild(header2);
  row.appendChild(header3);
  // add headers to tables
  table.appendChild(row);

  container.append(subheader);
  container.append(table);
  document.getElementById("simulation-data").appendChild(container);

  if (type == "simulation"){
    container.id = "simulation-container";
    subheader.innerHTML = "table 03: simulation data";
    table.id="simulation-table";
  } else if (type == "difference"){
      container.id = "difference-container";
      subheader.innerHTML = "table 04: difference between simulation data and actual data";
      table.id="difference-table";
    }
}
