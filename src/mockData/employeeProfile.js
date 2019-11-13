const employeeProfilePayload = {
  signedIn: true,
  github: {},

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
      },
      {
        skill: "agile",
        level: 9
      }
    ]
  }
};

export default employeeProfilePayload;
