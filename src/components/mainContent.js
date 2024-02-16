import projects from './projects';

const MainContent = (() => {
  // Create project image preview
  function createProjectImage(source, alt) {
    const image = document.createElement('img');
    image.src = source;
    image.alt = alt;
    return image;
  }

  // Create project description & information
  function createProjectInfo(name, description, repo, live) {
    const container = document.createElement('div');
    container.classList.add('projectInfo');
    container.innerHTML = `
        <h3>${name}</h3>
        <p>${description}</p>
        <div class="projectLinks">
            <ul>
                <li><a href="${repo}" target="_blank" aria-label="Link to ${name} Github Repository in New Tab"><i class="fa-brands fa-github"></i></a></li>
                <li><a href="${live}" target="_blank" aria-label="Link to ${name} Github Live Server in New Tab"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></li>
            </ul>
        </div>
    `;
    return container;
  }

  // Create card list of projects
  function createProjectList() {
    const container = document.createElement('div');
    const projectList = projects;

    container.id = 'projectList';

    projectList.forEach((project) => {
      const card = document.createElement('div');
      const imageContainer = document.createElement('div');
      const projectImage = createProjectImage(project.image, `${project.name} Preview`);
      const projectInfo = createProjectInfo(
        project.name,
        project.description,
        project.repo,
        project.live
      );
      card.classList.add('projectCard');
      imageContainer.classList.add('projectImage');

      imageContainer.append(projectImage);
      card.append(imageContainer, projectInfo);
      container.append(card);
    });

    return container;
  }

  // Main page initialize
  function initMain() {
    const mainTag = document.querySelector('main');

    const container = document.createElement('div');
    const mainTitle = document.createElement('h2');
    const content = createProjectList();

    container.classList.add('myProject');
    mainTitle.textContent = 'My Projects';

    container.append(mainTitle, content);
    mainTag.append(container);
  }

  return {
    initMain
  };
})();

export default MainContent;
