// import { names } from "./data.js";
const createFacts = (() => {
  //    Definition
  const button = document.getElementById("Button");
  const facts = document.getElementById("facts");
  const quote = document.getElementById("quote");
  const download = document.getElementById("Download");
  const errDownlaod = document.getElementById("errDownlaod");
  const errGenerate = document.getElementById("errGenerate");
  const checkInputs = document.querySelectorAll('[type="radio"]');

  //    Subjects of computer science software engineering (Array)
  const subjects = () => [
    "introduction to programming",
    "introduction to algorithms and data structures",
    "computer architecture",
    "operating systems",
    "computer networks",
    "embedded systems",
    "electronics",
    "computer graphics",
    "software engineering",
    "database systems",
    "digital signal processing",
    "image processing",
    "data science",
    "robotics",
    "artificial intelligence",
    "mathematical",
    "discrete mathematics",
    "mathematical analysis",
    "linear algebra",
    "statistics",
    "physics",
  ];
  //    create random array name
  const createRandomList = (array, number) => {
    const newRandomList = [];
    while (newRandomList.length < number) {
      const getRandomListNumber = Math.round(
        Math.random() * (array().length - 1)
      );
      const getRandomList = array()[getRandomListNumber];
      if (!newRandomList.includes(getRandomList))
        newRandomList.push(getRandomList);
    }
    return newRandomList;
  };
  //    create random Name
  const createRandomName = async (numberOfStudent) => {
    const response = await fetch("/data.json");
    const namesArr = await response.json();
    const names = () => namesArr;
    const createdFirstNames = createRandomList(names, numberOfStudent);
    const createdLastNames = createRandomList(names, numberOfStudent);
    const createdFullNames = createdFirstNames.map((element, index) => {
      return (element += ` ${createdLastNames[index]}`);
    });
    return createdFullNames;
  };
  //    create random number
  const createRandomNumber = (min, max) => Math.random() * (max - min) + min;
  //    create random number with fraction
  //    generateTxtFile
  const generateTxtFile = (text) => {
    let textFile = null;
    const data = new Blob([text], { type: "text/plain" });
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }
    textFile = window.URL.createObjectURL(data);
    return textFile;
  };
  // downloadBtn
  const downloadBtnErr = () => {
    // Err
    errDownlaod.textContent = "Generate First! 🧐";
  };
  const downloadBtnNow = () => {
    // Now
    errDownlaod.textContent = "Download Now! 🥸";
  };
  const downloadBtnDone = (name = "facts.txt") => {
    // Done
    download.addEventListener("click", () => {
      download.setAttribute("download", name);
      download.href = generateTxtFile(facts.innerText);
      errDownlaod.textContent = "Done :) 🤫";
    });
  };
  //    Having flu
  const havingFlu = async (numberOfPeople) => {
    downloadBtnNow();
    download.removeEventListener("click", downloadBtnErr);
    const createdFullNames = await createRandomName(numberOfPeople);
    quote.innerText = `people(["name:john doe", "temperature:37°C", "cough:true", "headache:false"])`;
    facts.innerText = "";
    createdFullNames.forEach((name) => {
      facts.innerText += `people(["${name}", "${createRandomNumber(
        24,
        44
      ).toFixed(2)}", "${parseInt(createRandomNumber(0, 2)) > 0}", "${
        parseInt(createRandomNumber(0, 2)) > 0
      }"]).\n`;
    });
    downloadBtnDone("people.txt");
  };
  //    Classification of students Grades
  const classificationOfStudentsGrades = async (numberOfStudent) => {
    downloadBtnNow();
    download.removeEventListener("click", downloadBtnErr);
    const createdFullNames = await createRandomName(numberOfStudent);
    quote.innerText = `student(["name:john doe", "subject:mass, physics", "number:85"])`;
    facts.innerText = "";
    createdFullNames.forEach((name) => {
      facts.innerText += `student(["${name}", "${createRandomList(
        subjects,
        6
      ).join(", ")}", "${parseInt(createRandomNumber(0, 100))}"]).\n`;
    });
    downloadBtnDone("student.txt");
  };
  //    Body Weight
  const bodyWeight = async (numberOfPeople) => {
    downloadBtnNow();
    download.removeEventListener("click", downloadBtnErr);
    const createdFullNames = await createRandomName(numberOfPeople);
    quote.innerText = `people(["name:john doe", "weight:80Kg", "gender:male"])`;
    facts.innerText = "";
    createdFullNames.forEach((name) => {
      facts.innerText += `people(["${name}", "${parseInt(
        createRandomNumber(50, 145)
      )}", "${
        parseInt(createRandomNumber(0, 2)) > 0 ? "male" : "female"
      }"]).\n`;
    });
    downloadBtnDone("people.txt");
  };
  //    Military Accepted
  const militaryAccepted = async (numberOfPeople) => {
    downloadBtnNow();
    download.removeEventListener("click", downloadBtnErr);
    const createdFullNames = await createRandomName(numberOfPeople);
    quote.innerText = `people(["name:john doe", "weight:80kg", "Height:180cm", "Audiometry:15000Hz", "Optometry:6/6"])`;
    facts.innerText = "";
    createdFullNames.forEach((name) => {
      facts.innerText += `people(["${name}", "${parseInt(
        createRandomNumber(50, 145)
      )}", "${parseInt(createRandomNumber(150, 200))}", "${parseInt(
        createRandomNumber(20, 20000)
      )}", "${parseInt(createRandomNumber(0, 6))}/6"]).\n`;
    });
    downloadBtnDone("Military.txt");
  };
  //    Body Type
  const bodyType = async (numberOfPeople) => {
    downloadBtnNow();
    download.removeEventListener("click", downloadBtnErr);
    const createdFullNames = await createRandomName(numberOfPeople);
    quote.innerText = `people(["name:john doe", "weight:80kg", "Height:180cm", "BMI:28"])`;
    facts.innerText = "";
    createdFullNames.forEach((name) => {
      const h = parseInt(createRandomNumber(150, 200));
      const w = parseInt(createRandomNumber(50, 145));
      const bMI = (w / ((h / 100) * (h / 100))).toFixed(1);
      facts.innerText += `people(["${name}", "${w}", "${h}", "${bMI}"]).\n`;
    });
    downloadBtnDone("Body.txt");
  };
  const checkedInput = () => {
    let check = null;
    checkInputs.forEach((input) => {
      if (input.checked) check = input.getAttribute("id");
    });

    switch (check) {
      case "first":
        return havingFlu(40);
      case "second":
        return classificationOfStudentsGrades(40);
      case "third":
        return bodyWeight(40);
      case "fifth":
        return militaryAccepted(40);
      case "sixth":
        return bodyType(60);

      default:
        errGenerate.textContent = "select Project?! 🙄";
        break;
    }
  };
  const initPrivate = () => {
    download.addEventListener("click", downloadBtnErr);
    button.addEventListener("click", (event) => {
      event.preventDefault();
      checkedInput();
    });
  };
  const init = () => {
    initPrivate();
  };
  return {
    init,
  };
})();
createFacts.init();
