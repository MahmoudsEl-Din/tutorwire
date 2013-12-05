// Migrate/bootstrap the database
Meteor.startup(function () {
  // If no subjects, add subjects
  if (!Subjects.find().count()) {
    ["Maths", "English", "Science", "Biology", "Physics", "Chemistry", "Geography", "History", "Business Studies", "Economics", "Psychology", "Religious Studies", "Sociology", "Law", "Art", "Design and Technology", "Graphics", "Music", "Music Technology", "Literacy", "Numeracy", "Drama", "Philosophy", "Computer Science", "Spanish", "French", "Italian", "German", "Arabic", "Chinese", "Polish", "Portuguese", "Russian", "Turkish", "Mandarin", "Japanese", "SATs", "11+ Entrance", "Common Entrance", "Guitar", "Violin", "Bass", "Drums", "Piano", "Singing", "Keyboard", "Cello", "Viola", "Saxophone", "Clarinet", "Ukulele", "Harp", "Flute", "Dance", "Yoga", "Personal Trainer", "Tennis", "Zumba", "Karate", "Photography", "Kick Boxing", "Driving", "Pilates", "Painting", "Sculpture", "Tai Chi", "Wing Tsun", "Kung Fu", "Acting", "Life Coaching", "Programming", "Martial Arts", "Graphic Design", "Accounting", "Football", "Meditation", "Web Development"].forEach(function (s) {
      console.log("Inserting subject", s)
      Subjects.insert({name: s})
    })
  }

  if (!CityLocations.find({country: "UK"}).count()) {
    [{"name":"Bath","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-2.3656,51.3794]}}},{"name":"Birmingham","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-1.9167,52.4667]}}},{"name":"Bradford","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-1.90761,53.65229]}}},{"name":"Brighton","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-2.5515,50.525]}}},{"name":"Bristol","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-2.5833,51.45]}}},{"name":"Cambridge","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-1.125,51.96665]}}},{"name":"Canterbury","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-0.7132,54.41615]}}},{"name":"Carlisle","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-2.9333,54.8833]}}},{"name":"Chelmsford","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[0.4833,51.7333]}}},{"name":"Chester","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-2.9167,53.2]}}},{"name":"Chichester","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-0.78,50.8367]}}},{"name":"Coventry","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-1.55,52.4167]}}},{"name":"Derby","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-1.5,52.9333]}}},{"name":"Durham","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-1.5667,54.7667]}}},{"name":"Ely","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-1.4826,51.9425]}}},{"name":"Exeter","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-3.5275,50.7236]}}},{"name":"Gloucester","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-2.25,51.8333]}}},{"name":"Hereford","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-2.7167,52.05]}}},{"name":"Kingston upon Hull","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-0.3262,53.7404]}}},{"name":"Lancaster","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-2.8003,54.0475]}}},{"name":"Leeds","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-1.243214286,53.42835714]}}},{"name":"Leicester","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-1.1333,52.6333]}}},{"name":"Lichfield","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-1.8167,52.6833]}}},{"name":"Lincoln","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-0.5333,53.2333]}}},{"name":"Liverpool","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-3,53.4167]}}},{"name":"London","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-0.1255,51.5084]}}},{"name":"Manchester","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-2.2374,53.4809]}}},{"name":"Newcastle upon Tyne","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-1.6194,54.9881]}}},{"name":"Norwich","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[1.3,52.6333]}}},{"name":"Nottingham","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-1.1667,52.9667]}}},{"name":"Oxford","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-1.256,51.7522]}}},{"name":"Peterborough","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-0.25,52.5833]}}},{"name":"Plymouth","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-4.14,50.37]}}},{"name":"Portsmouth","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-1.0714,50.8091]}}},{"name":"Preston","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-1.086294118,52.69015294]}}},{"name":"Ripon","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-1.5167,54.1167]}}},{"name":"Salford","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-1.14998,52.3033]}}},{"name":"Salisbury","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-1.7957,51.0693]}}},{"name":"Sheffield","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-1.4659,53.383]}}},{"name":"Southampton","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-1.4,50.9]}}},{"name":"St Albans","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-0.3333,51.75]}}},{"name":"Stoke-on-Trent","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-2.1833,53]}}},{"name":"Sunderland","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-2.32445,54.8023]}}},{"name":"Truro","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-5.0433,50.2617]}}},{"name":"Wakefield","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-1.4977,53.6833]}}},{"name":"Wells","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-2.6494,51.2094]}}},{"name":"Winchester","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-1.3167,51.0167]}}},{"name":"Wolverhampton","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-2.1333,52.5833]}}},{"name":"Worcester","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-2.2,52.2]}}},{"name":"York","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-1.0833,53.9667]}}},{"name":"Aberdeen","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-2.1,57.1333]}}},{"name":"Dundee","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-2.9667,56.5]}}},{"name":"Edinburgh","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-3.2,55.95]}}},{"name":"Glasgow","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-4.25,55.8333]}}},{"name":"Inverness","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-4.2333,57.4667]}}},{"name":"Perth","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-3.4333,56.4]}}},{"name":"Stirling","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-2.93735,56.7971]}}},{"name":"Bangor","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-5.1515,54.19116667]}}},{"name":"Cardiff","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-2.744957143,52.14425714]}}},{"name":"Newport","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-2.7963,52.56491875]}}},{"name":"St Asaph","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-3.45,53.2667]}}},{"name":"Swansea","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-3.9432,51.6208]}}},{"name":"Armagh","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-6.6667,54.35]}}},{"name":"Belfast","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-5.9333,54.5833]}}},{"name":"Derry","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-5.86855,55.66155]}}},{"name":"Lisburn","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-6.0353,54.5234]}}},{"name":"Newry","country":"UK","location":{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[-6.3374,54.1784]}}}].forEach(function (c) {
      console.log("Inserting city", c.name)
      CityLocations.insert(c)
    })
  }
})