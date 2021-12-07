exports.projectData = [
    {
      title: "Journey Together",
      desc: [
          "Journey Together is a social media platform designed for pursuing personal development goals. It builds on the idea of accountability buddies; the user pledge their goal in public and they can choose to embark on their journey solo or with friends."
      ],
      path: "journey-together",
      url: "https://journey-together.netlify.app",
      components: [
          {
              name: "Client",
              url: "https://github.com/derekdkim/social-media-client",
              tech: ["React.js", "Tailwind.css", "React Hook Forms", "FontAwesome", "date.fns", "axios", "Netlify"]
          },
          {
              name: "Server API",
              url: "https://github.com/derekdkim/social-media-server",
              tech: ["Node.js/Express", "MongoDB/Mongoose", "Heroku", "Jest", "Supertest/Superagent", "Passport.js", "bcrypt", "UUID-1345"]
          }
      ],
    },
    {
      title: "JRNL Clone",
      desc: [
          "JRNL Clone is a clone of the online journaling app JRNL. It has the core functionality of reading and writing journal entries. The goal of the project was to replicate a commercial website while learning the Google Firebase environment.",
          "Note: JRNL has reworked their user interface since this project was completed so it looks completely different than the reference for this clone. This project is also not designed for mobile. For a showcase of responsive design, please check out my other project Journey Together."
      ],
      path: "jrnl-clone",
      url: "https://jrnl-clone.web.app/",     
      components: [
          {
              name: "Source Code",
              url: "https://github.com/derekdkim/jrnl-clone",
              tech: ["React.js", "Google Firebase"]
          },
      ],
    }
  ];