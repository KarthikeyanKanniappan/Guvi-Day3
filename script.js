// 1.For the given JSON iterate over all for loops (for, for in, for of, forEach)
let json = [
  {
    id: "kk",
    msg: "arigato",
    task: "task-Day1",
    mail: "xxx@gmail.com",
  },
  {
    id: "vikki",
    msg: "Konnichwaa",
    task: "task-day2",
    mail: "yyy@gmail.com",
  },
];

// for loop
for (let i = 0; i < json.length; i++) {
  let a = json[i];
  console.log(a.id);
  console.log(a.msg);
  console.log(a.task);
  console.log(a.mail);
}

// for in
for (let key in json) {
  console.log(`${json[key].id}`);
  console.log(`${json[key].msg}`);
  console.log(`${json[key].task}`);
  console.log(`${json[key].mail}`);
}

// for Of
for (let value of json) {
  console.log(value.id);
  console.log(value.msg);
  console.log(value.task);
  console.log(value.mail);
}

// //forEach
json.forEach((el, i) => {
  console.log(el.id);
  console.log(el.msg);
  console.log(el.task);
  console.log(el.mail);
});

// 2.Create your own resume data in JSON format
let Resume = {
  basics: {
    name: "karthikeyan.k",
    email: "kkarthikeyanre@gmal.com",
    phone: 9080636110,
    degree: "B.E Mech",
    location: {
      address: "Muthu street, vyasrpadi chennai",
      postalCode: 600039,
      city: "Chennai",
      state: "Tamilnadu",
      country: "India",
    },
  },
  profiles: {
    website: "https://www.linkedin.com/in/karthikeyan-k-816662149/",
    github: "https://github.com/KarthikeyanKanniappan",
  },
  work: [
    {
      company: "Wheels india Limited",
      position: "Graduate Trainee",
      from: "feb-2018",
      To: "feb-2021",
      summary:
        "Started as a Trainee ,handled various task and gained experience with on how to solve problem,Teamwork and collaboration professionalism",
    },
    {
      company: "APA engineering Services",
      position: "Design Engineer",
      from: "may-2021",
      To: "may-2022",
      summary:
        "my main takeaway in here is Interpersonal skills and self management skills and also Got an opportunity to design mechanical components and the designed components were been manufactured ",
    },
  ],
  education: {
    institution: "JNN Institue Of Engineering",
    department: "Mechanical",
    studyType: "fulltime",
    "batch start year": 2013,
    "batch end year": 2017,
    gpa: 7.79,
  },
  skills: {
    name: "python,Html,Css,javascript",
    level: "begineer",
  },
  languages: {
    language: "Tamil,English,Japanese -N5 level",
  },
};

const myJSON = JSON.stringify(Resume);
console.log(myJSON);
