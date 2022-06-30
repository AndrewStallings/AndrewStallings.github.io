function scrollTo(element) {
    document.getElementById(element).scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};


document.getElementById("navProjects").
        onclick = () => {scrollTo("projects")};


document.getElementById("navAcademics").
        onclick = () => {scrollTo("academics")};


document.getElementById("navTechnologies").
        onclick = () => {scrollTo("technologies")};


document.getElementById("navAboutMe").
        onclick = () => {scrollTo("aboutMe")};


