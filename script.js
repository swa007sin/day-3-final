var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ];
  for(let i=0; i<obj.length;i++)
  {
      console.log(obj[i])
  }
//
//
var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ];
Object.keys(obj).forEach(key => {
    console.log(obj[key]);
});
//
//
var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ];
for (let key in obj) {
  let value = obj[key];
  console.log(value);
}
//
//
var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ];
  for(let i=0; i<obj.length;i++)
  {
      console.log(object[i])
  }
//
//
//json resume
{
    "basics"; {
      "name"; "Swaraj Singh Chouhan",
      "email"; "swarajsingh888.ss@gmail.com",
      "phone"; "8778255359",
      "degree"; "Bsc_Nautical SCience",
      "location"; {
        "address"; "gmd 1/b",
        "postalCode"; "829107",
        "city"; "Bokaro",
        "countryCode"; "India",
        "region"; "Jharkhand"
      }
      "profiles"; [
        {
          "network": "LinkedIn",
          "username": "swa007sin"
        }
      ]
    }
    "work"; [
      {
        "company": "BSM",
        "position": "Deck Cadet",
        "startDate": "26-01-20221",
        "endDate": "16-08-2021",
      }
    ],
    "education"; [
      {
        "institution": "Indian Maritime University",
        "area": "Chennai",
        "studyType": "Full time",
        "percentage": "83.28",
      }
    ],
    "skills"; [
      {
        "name": "Programming language",
        "level": "Beginner",
        "keywords": [
          "Python, Javascript"
        ]
      }
    ],
    "languages"; [
      {
        "language": "Hindi, English",
      }
    ],
    "interests"; [
      {
        "name": "Sports",
        "keywords": [
          "Cricket"
        ]
      }
    ]
  }


