/*1*/
function userAddCountry (){
    var countryName=prompt('Название страны');
    var capitalName=prompt('Название столицы');
    addCountry (countryName, capitalName);
}
function addCountry(countryName, capitalName) {
    countrysH[countryName] = capitalName;
}
/*1*/
/*2*/
function userGetCountryInfo (){
    var сountryName=prompt('Введите название страны:'); 
    console.log(getCountryInfo(сountryName)); 
}
function getCountryInfo(countryName) {
    if (countryName in countrysH)
        return 'страна:' + countryName + 'столица:' + countrysH[countryName];
    else
        return 'нет информации о стране' + countryName + '!';
}
/*2*/
/*3*/
function userListCountrys() {
 console.log(listCountrys());
}
function listCountrys() {
    var res = "";
    for (var CN in countrysH)
        res += '\n' + getCountryInfo(CN);
    return res;
}
/*3*/
/*4*/
function userDeleteCountry(){
    var countryName=prompt('Название страны');
    deleteCountry(countryName);
}
function deleteCountry(countryName) {
    delete countrysH[countryName];
}
/*4*/
