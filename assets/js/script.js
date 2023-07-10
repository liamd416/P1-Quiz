// ===| HTML DOM references |===
const quizContainer = document.getElementById('quiz_container');
const submitButton = document.getElementById('submit');
const restartButton = document.getElementById('restart');
const feedbackContainer = document.getElementById('feedback');

const numbersQuiz = [
    { //1
        question_title: "What is 10+12?",
        correct:"D",
        option: {
            A:"2",
            B:"2022",
            C:"222",
            D:"22",
        }
    },
    { //2
        question_title:"What is 10-2?",
        correct:"B",
        option: {
            A:"80",
            B:"8",
            C:"88",
            D:"4",
        }
    },
    { //3
        question_title: "What is 10x12?",
        correct:"A",
        option: {
            A:"120",
            B:"12",
            C:"22",
            D:"1",
        }
    },
    { //4
        question_title:"What is 6÷2?",
        correct:"B",
        option: {
            A:"8",
            B:"3",
            C:"12",
            D:"24",
        }
    },
    { //5
        question_title:"What is 5+6?",
        correct:"D",
        option: {
            A:"10",
            B:"36",
            C:"56",
            D:"11",
        }
    },
    { //6
        question_title:"What is 65-12?",
        correct:"B",
        option: {
            A:"62",
            B:"53",
            C:"12",
            D:"21",
        }
    },
    { //7
        question_title:"What is 46x10?",
        correct:"A",
        option: {
            A:"460",
            B:"46",
            C:"4",
            D:"6",
        }
    },
    { //8
        question_title:"What is 20÷4?",
        correct:"C",
        option: {
            A:"24",
            B:"16",
            C:"5",
            D:"10",
        }
    },
    { //9
        question_title:"What is 56+72?",
        correct:"C",
        option: {
            A:"5672",
            B:"115",
            C:"128",
            D:"132",
        }
    },
    { //10
        question_title:"What is 562-72?",
        correct:"A",
        option: {
            A:"490",
            B:"500",
            C:"421",
            D:"4",
        }
    }

]

const marvelQuiz = [
    { //1
        question_title:"What is Spider-man's real name?",
        correct:"A",
        option: {
            A:"Peter Parker",
            B:"Reed Richards",
            C:"Ben Walker",
            D:"May Parker",
        }
    },
    { //2
        question_title:"What type of radiation causes Bruce Banner to become Hulk?",
        correct:"B",
        option: {
            A:"Beta",
            B:"Gamma",
            C:"Electromagnetic",
            D:"Alpha",
        }
    },
    { //3
        question_title:"Where is Captain America from?",
        correct:"D",
        option: {
            A:"New York",
            B:"Harlem",
            C:"Manhattan",
            D:"Brooklyn",
        }
    },
    { //4
        question_title:"What type of doctor is Doctor Strange",
        correct:"C",
        option: {
            A:"Time-Lord",
            B:"Dentist",
            C:"Neurosurgeon",
            D:"General Practitioner",
        }
    },
    { //5
        question_title:"Which actor plays Spider-man in the MCU?",
        correct:"D",
        option: {
            A:"Tom Hanks",
            B:"Tom Cruise",
            C:"Tim Allen",
            D:"Tom Holland",
        }
    },
    { //6
        question_title:"What is the name of Thor's Hammer?",
        correct:"D",
        option: {
            A:"Mew Mew",
            B:"Jonathan",
            C:"Hammer",
            D:"Mjolnir",
        }
    },
    { //7
        question_title:"What was the name of Tony Stark's father?",
        correct:"B",
        option: {
            A:"JARVIS",
            B:"Howard Stark",
            C:"Steve Carrel",
            D:"Batman",
        }
    },
    { //8
        question_title:"How many Infinity Stones are there?",
        correct:"B",
        option: {
            A:"400",
            B:"6",
            C:"8",
            D:"2",
        }
    },
    { //9
        question_title:"Where does the Black Panther live?",
        correct:"C",
        option: {
            A:"Asgard",
            B:"France",
            C:"Wakanda",
            D:"America",
        }
    },
    { //10
        question_title:"What is Pepper Potts allergic to?",
        correct:"A",
        option: {
            A:"Nuts",
            B:"Strawberries",
            C:"Gluten",
            D:"Meat",
        }
    }

]

const starwarsQuiz = [
    { //1
        question_title:"What colour is Luke's first Lightsaber blade?",
        correct:"C",
        option: {
            A:"Red",
            B:"White",
            C:"Blue",
            D:"Black",
        }
    },
    { //2
        question_title:"What is Darth Vader's real name?",
        correct:"B",
        option: {
            A:"Galen Marek",
            B:"Anakin Skywalker",
            C:"Luke Skywalker",
            D:"Yoda Starkiller",
        }
    },
    { //3
        question_title:"What was the name of the planet where clones were grown?",
        correct:"D",
        option: {
            A:"Tatooine",
            B:"Mustafar",
            C:"Coruscant",
            D:"Kamino",
        }
    },
    { //4
        question_title:"Where did Obi-Wan Kenobi die?",
        correct:"A",
        option: {
            A:"Death Star",
            B:"Starkiller Base",
            C:"On a Star Destroyer",
            D:"In the Jedi Temple",
        }
    },
    { //5
        question_title:"What was Finn's Stormtrooper number?",
        correct:"B",
        option: {
            A:"FN-2186",
            B:"FN-2187",
            C:"ST-100",
            D:"CT-108",
        }
    },
    { //6
        question_title:"Was name did Obi-Wan Kenobi go by on Tatooine?",
        correct:"B",
        option: {
            A:"Obi Skywalker",
            B:"Ben Kenobi",
            C:"Ben Stiller",
            D:"Tobi Kenobi",
        }
    },
    { //7
        question_title:"That's not a moon, That's a...",
        correct:"C",
        option: {
            A:"Plane",
            B:"Fast-Food Restaurant",
            C:"Space Station",
            D:"Planet",
        }
    },
    { //8
        question_title:"What Species is Jar Jar Binks",
        correct:"D",
        option: {
            A:"Ewok",
            B:"Wookie",
            C:"Grogu",
            D:"Gungan",
        }
    },
    { //9
        question_title:"What character was held captive on the Death Star?",
        correct:"B",
        option: {
            A:"Obi-Wan Kenobi",
            B:"Princess Leia Organa",
            C:"Yoda",
            D:"Darth Vader",
        }
    },
    { //10
        question_title:"Who cut off (part of) Anakin Skywalker's arm in Attack of the Clones?",
        correct:"D",
        option: {
            A:"Darth Sidious",
            B:"Darth Maul",
            C:"Jar Jar Binks",
            D:"COunt Dooku",
        }
    }

]