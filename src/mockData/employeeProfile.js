const employeeProfilePayload = {
  signedIn: true,
  github: {},
  skills: ['team work', 'java', 'react', 'jenkins', 'database', 'compozed'],
  initiatives: [
    {
      name: "Quantum",
      description: "This initiative is the most initiativiest initiative out there. so get initiating.",
      imageUrl: "",
      skills: [
        {
          skill: "team work",
          level: 8
        },
        {
          skill: "java",
          level: 5
        },
        {
          skill: "react",
          level: 4
        },
        {
          skill: "jenkins",
          level: 9
        },
        {
          skill: "database",
          level: 5
        },
        {
          skill: "compozed",
          level: 7
        }
      ]
    },
    {
      name: "Quantum",
      description: "This ones pretty cool. look at me! Im Mr. Initiative",
      skills: [
        {
          skill: "team work",
          level: 8
        },
        {
          skill: "java",
          level: 5
        },
        {
          skill: "react",
          level: 4
        },
        {
          skill: "jenkins",
          level: 9
        },
        {
          skill: "database",
          level: 5
        },
        {
          skill: "compozed",
          level: 7
        }
      ]
    }
  ],
  employee: {
    name: "Brian Humphreys",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/apple-a-day-4765c.appspot.com/o/34413594060.jpg?alt=media&token=47657590-47bc-4c8d-9db5-c41a93440b6a",
    email: "humbfrancis@gmail.com",
    githubUrl: "https://github.com/brianhumphreys",
    bio:
      "I am a puppy who really knows SQL. I am looking for different bones to chew on and would like to branch out for different opportunities!",
    manager: false,
    skills: [
      {
        skill: "team work",
        level: 4
      },
      {
        skill: "java",
        level: 6
      },
      {
        skill: "react",
        level: 7
      },
      {
        skill: "jenkins",
        level: 6
      },
      {
        skill: "database",
        level: 6
      },
      {
        skill: "compozed",
        level: 6
      }
    ]
  }
};

export default employeeProfilePayload;
