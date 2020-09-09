
let allCases = [
  {
    "FIPS": "n/a",
    "Admin2": "n/a",
    "Province_State": "n/a",
    "Country_Region": "Afghanistan",
    "Last_Update": "17/08/2020 4:27",
    "Lat": 33.93911,
    "Long_": 67.709953,
    "Confirmed": 37596,
    "Deaths": 1375,
    "Recovered": 27166,
    "Active": 9055,
    "Combined_Key": "Afghanistan",
    "Incidence_Rate": 96.5774524,
    "Case-Fatality_Ratio": 3.657303969
  },
  {
    "FIPS": "n/a",
    "Admin2": "n/a",
    "Province_State": "n/a",
    "Country_Region": "Albania",
    "Last_Update": "17/08/2020 4:27",
    "Lat": 41.1533,
    "Long_": 20.1683,
    "Confirmed": 7380,
    "Deaths": 228,
    "Recovered": 3794,
    "Active": 3358,
    "Combined_Key": "Albania",
    "Incidence_Rate": 256.4458962,
    "Case-Fatality_Ratio": 3.089430894
  },
  {
    "FIPS": "n/a",
    "Admin2": "n/a",
    "Province_State": "n/a",
    "Country_Region": "Algeria",
    "Last_Update": "17/08/2020 4:27",
    "Lat": 28.0339,
    "Long_": 1.6596,
    "Confirmed": 38583,
    "Deaths": 1370,
    "Recovered": 27017,
    "Active": 10196,
    "Combined_Key": "Algeria",
    "Incidence_Rate": 87.98650468,
    "Case-Fatality_Ratio": 3.550786616
  },
  {
    "FIPS": "n/a",
    "Admin2": "n/a",
    "Province_State": "n/a",
    "Country_Region": "Andorra",
    "Last_Update": "17/08/2020 4:27",
    "Lat": 42.5063,
    "Long_": 1.5218,
    "Confirmed": 989,
    "Deaths": 53,
    "Recovered": 863,
    "Active": 73,
    "Combined_Key": "Andorra",
    "Incidence_Rate": 1280.010354,
    "Case-Fatality_Ratio": 5.358948433
  },
  {
    "FIPS": "n/a",
    "Admin2": "n/a",
    "Province_State": "n/a",
    "Country_Region": "Angola",
    "Last_Update": "17/08/2020 4:27",
    "Lat": -11.2027,
    "Long_": 17.8739,
    "Confirmed": 1906,
    "Deaths": 88,
    "Recovered": 628,
    "Active": 1190,
    "Combined_Key": "Angola",
    "Incidence_Rate": 5.799258985,
    "Case-Fatality_Ratio": 4.616998951
  },
  {
    "FIPS": "n/a",
    "Admin2": "n/a",
    "Province_State": "n/a",
    "Country_Region": "Antigua and Barbuda",
    "Last_Update": "17/08/2020 4:27",
    "Lat": 17.0608,
    "Long_": -61.7964,
    "Confirmed": 93,
    "Deaths": 3,
    "Recovered": 88,
    "Active": 2,
    "Combined_Key": "Antigua and Barbuda",
    "Incidence_Rate": 94.96773139,
    "Case-Fatality_Ratio": 3.225806452
  },
  {
    "FIPS": "n/a",
    "Admin2": "n/a",
    "Province_State": "n/a",
    "Country_Region": "Argentina",
    "Last_Update": "17/08/2020 4:27",
    "Lat": -38.4161,
    "Long_": -63.6167,
    "Confirmed": 294569,
    "Deaths": 5703,
    "Recovered": 211702,
    "Active": 77164,
    "Combined_Key": "Argentina",
    "Incidence_Rate": 651.7622211,
    "Case-Fatality_Ratio": 1.936048939
  },
  {
    "FIPS": "n/a",
    "Admin2": "n/a",
    "Province_State": "n/a",
    "Country_Region": "Armenia",
    "Last_Update": "17/08/2020 4:27",
    "Lat": 40.0691,
    "Long_": 45.0382,
    "Confirmed": 41663,
    "Deaths": 818,
    "Recovered": 34584,
    "Active": 6261,
    "Combined_Key": "Armenia",
    "Incidence_Rate": 1405.997636,
    "Case-Fatality_Ratio": 1.963372777
  }
]
// makes a request to te endpoint for the data
async function getAllCases() {
  try {
      var selectCountry = document.getElementById('global_tins')
    for (let index = 0; index < allCases.length; index++) {
      var option = document.createElement("option");
      option.text = allCases[index]['Country_Region'];
      option.id = `option${index}`
      selectCountry.add(option);
    }
  } catch (error) {
    console.error(error);
  }
}


  getAllCases()


  document.getElementById('global_tins').addEventListener('change', (e) => {
    // makes a request and use the data to populate the select
    let elTotalCase = document.getElementById('totalCases')
    let elTotalRecovered = document.getElementById('totalRecovered')
    let elTotalDeaths = document.getElementById('totalDeaths')

    let index =  e.target.selectedIndex
    elTotalCase.innerText = allCases[index]["Confirmed"]
    elTotalRecovered.innerText = allCases[index]["Recovered"]
    elTotalDeaths.innerText = allCases[index]["Deaths"]

    console.log("Selected item: ", index)
  })