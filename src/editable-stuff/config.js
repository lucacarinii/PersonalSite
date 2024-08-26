// navigation
const navBar = {
  show: true,
}

// main body
const mainBody = {
  gradientColors: '#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1',
  firstName: 'Luca',
  middleName: '',
  lastName: 'Carini',
  message: ' Passionate about changing the world with technology. ',
  icons: [
    {
      image: 'fa-github',
      url: 'https://github.com/lucacarinii',
    },
    {
      image: 'fa-instagram',
      url: 'https://www.instagram.com/lucacarini/',
    },
    {
      image: 'fa-linkedin',
      url: 'https://www.linkedin.com/in/luca-carini-726473130/',
    },
  ],
}

// aboutme
const about = {
  show: true,
  heading: 'About Me',
  imageLink: require('../editable-stuff/aboutmePic.png'),
  imageSize: 375,
  message:
    "Hey there! I'm Luca, a 28-year-old software engineer from Italy with a passion for continuous learning, whether it's tech-related or not (currently improving my spanish). When I'm not coding, you'll find me on the tennis court, soccer field, or at the gym, living by the motto mens sana in corpore sano. Languages fascinate me, I speak Italian, English, and Spanish and Java 😉. Music is another love of mine; playing the electric guitar is my go-to way to unwind and get inspired. Got an idea? Let’s bring it to life! Reach out, and I’ll brew us a great cup of coffee. ☕️",
  resume: require('../editable-stuff/resume.pdf'),
}

// projects
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: 'Recent Projects',
  gitHubUsername: 'lucacarinii',
  reposLength: 4,
  specificRepos: [],
}

// leadership
const leadership = {
  show: false,
  heading: 'Leadership',
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.',
  images: [
    {
      img: require('../editable-stuff/aboutmePic.png'),
      label: 'First slide label',
      paragraph: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      img: require('../editable-stuff/aboutmePic.png'),
      label: 'Second slide label',
      paragraph: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
  ],
  imageSize: {
    width: '615',
    height: '450',
  },
}

// skills
const skills = {
  show: true,
  heading: 'Skills',
  hardSkills: [
    { name: 'Java', value: 100 },
    { name: 'SpringBoot', value: 100 },
    { name: 'Microservices', value: 100 },
    { name: 'Data Structures', value: 85 },
    { name: 'C', value: 85 },
    { name: 'Oracle DB', value: 85 },
    { name: 'MySQL DB', value: 75 },
    { name: 'MS SQL Server', value: 85 },
    { name: 'SQL', value: 85 },
    { name: 'JavaScript', value: 75 },
    { name: 'React', value: 75 },
    { name: 'Apache Flink', value: 75 },
    { name: 'Kafka', value: 75 },
    { name: 'IBM Event Streams', value: 85 },
    { name: 'MongoDB', value: 65 },
    { name: 'Openshift', value: 85 },
  ],
  softSkills: [
    { name: 'Goal-Oriented', value: 80 },
    { name: 'Collaboration', value: 90 },
    { name: 'Positivity', value: 85 },
    { name: 'Adaptability', value: 85 },
    { name: 'Problem Solving', value: 100 },
    { name: 'Empathy', value: 90 },
    { name: 'Organization', value: 85 },
    { name: 'Creativity', value: 90 },
  ],
}

// get in touch
const getInTouch = {
  show: true,
  heading: 'Get In Touch',
}

const experiences = {
  show: false,
  heading: 'Experiences',
  data: [
    {
      role: 'Software Engineer',
      //companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      //companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ],
}

// blog
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
}
