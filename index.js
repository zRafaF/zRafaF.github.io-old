let projectList = [
    "radio-de-galena",
    "hefestus-academy",
    "biblioteca-de-projetos",
    "em-breve"];
let currentProject = projectList[0];

const projectDescription = document.getElementById("project-description");
const projectImage = document.getElementById("project-image");
const projectName = document.getElementById("project-name");


const descriptionRadioDeGalena = 
"Este projeto foi desenvolvido para a materia de Fisica 3, o objetivo é realizar a simulação da operação de um rádio de galena. Este programa realiza a simulação dês da criação do sinal por uma transmissora AM, até a captação, retificação de demodulação do sinal.<br><br>Para a realização deste trabalho foi utilizado a engine de jogos Godot, mais informações podem ser encontradas no repositório do projeto.";


function updateContents()
{
    switch(currentProject)
    {
        case "radio-de-galena":
            projectDescription.innerHTML= descriptionRadioDeGalena; 
            projectImage.src = "images/Projeto1img.png";
            projectName.innerHTML="Rádio de Galena";
        break;
        case "hefestus-academy":
            projectDescription.innerHTML="App desenvolvido"; 
            projectImage.src = "images/Projeto2img.png";
            projectName.innerHTML="Hefestus Academy";
        break;
        case "biblioteca-de-projetos":
            projectDescription.innerHTML="Aslnjdjanld"; 
            projectImage.src = "images/Projeto3img.png";
            projectName.innerHTML="Biblioteca de Projetos";
        break;  
        case "em-breve":
        break; 
    }
}

document.getElementById("radio-de-galena").onclick = function () {
    currentProject = "radio-de-galena";
    updateContents();
};

document.getElementById("hefestus-academy").onclick = function () {
    currentProject = "hefestus-academy";
    updateContents();
};

document.getElementById("biblioteca-de-projetos").onclick = function () {
    currentProject = "biblioteca-de-projetos";
    updateContents();
};

document.getElementById("em-breve").onclick = function () {
    currentProject = "em-breve";
    updateContents();
};

document.getElementById("acess-button").onclick = function () {
    switch(currentProject)
    {
        case "radio-de-galena":
            window.open("projects/SimulacaoGalena/SimulacaoGalena.html", '_blank').focus();
        break;
        case "hefestus-academy": 
            window.open("https://hefestusacademy.github.io/", '_blank').focus();
        break;
        case "biblioteca-de-projetos":
            window.open("index.html", '_blank').focus();
        break;  
    }
};

document.getElementById("repository-btn").onclick = function () {
    switch(currentProject)
    {
        case "radio-de-galena":
            window.open("https://github.com/RafaelFariasUTFPR/RafaelFariasUTFPR.github.io/tree/master/projects/SimulacaoGalena/SimulacaoGalena", '_blank').focus();
        break;
        case "hefestus-academy": 
            window.open("https://github.com/HefestusAcademy/HefestusAcademy.github.io", '_blank').focus();
        break;
        case "biblioteca-de-projetos":
            window.open("https://github.com/RafaelFariasUTFPR/RafaelFariasUTFPR.github.io", '_blank').focus();
        break;  
    }
};



updateContents();