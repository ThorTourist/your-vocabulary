const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((response) => response.json())
    .then((jasoInfo) => displayLesson(jasoInfo.data));
};

const displayLesson = (lessons) => {
  //   console.log(lessons);
  const levelConatiner = document.getElementById("level-container");
  levelConatiner.innerHTML = "";
  for (let lesson of lessons) {
    console.log(lesson);
    const btnDiv = document.createElement("div");

    btnDiv.innerHTML = `
               <button class="btn btn-outline btn-primary">
              <i class="fa-solid fa-book-open"></i>Lesson-${lesson.level_no}
              </button>
      `;
    // 4. div appen kora
    levelConatiner.append(btnDiv);
  }
};
loadLessons();
