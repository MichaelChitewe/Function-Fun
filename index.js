var places = "in Cape Town 9, in George 7, in Port Elizabeth 5 and in Johannesburg -1";

var places = places
.replace(/ and /,",")
.replace(/in /g, "")
.replace(/, /g, ",");

places = places.split(",");

places = places.map(function(place){
  var parts = place.split(" ");
  console.log(parts);
  if (parts.length > 2){
     return {
     name : parts[0] + " " + parts[1],
       temp : Number(parts[2])
     };
   }
   else{
     return {
       name : parts[0],
       temp : Number(parts[1])
     };
   }
});

var maximum = 0;
var minimum = 0;

var warmestCity = "";
var coldestCity = "";

for (var i = 0; i < places.length; i++) {
  for (var j = 0; j <places.length; j++){

    if (places[i].temp > maximum) {
            maximum = places[i].temp;
           warmestCity = places[i].name;
       }
    if (places[j].temp < minimum) {
            minimum = places[j].temp;
            coldestCity = places[j].name;
        }
     }
  }

console.log(maximum);
console.log(warmestCity);

console.log(minimum);
console.log(coldestCity);
