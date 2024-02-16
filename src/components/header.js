import myPhoto from '../images/me.jpg';
import myPhotoLow from '../images/me_low.jpg';

const Header = (() => {
  // Div container creator
  function createDivContainer() {
    const container = document.createElement('div');
    return container;
  }

  // Create profile photo/portrait element
  function createProfilePhoto() {
    const container = createDivContainer();
    const photo = document.createElement('picture');
    const textOverlay = document.createElement('h2');

    photo.innerHTML = `
      <source 
        srcset="${myPhoto}"
        media="(min-width: 935px)"
      />
      <source 
        srcset="${myPhotoLow}"
        media="(max-width: 935px)"
      />
      <img 
        src="${myPhoto}" 
        alt="Kevin Natanael, the creator of this website"
      />
    `;
    container.classList.add('profile');
    textOverlay.textContent = 'Kevin Natanael';

    container.append(photo, textOverlay);
    return container;
  }

  // Create list links of social media
  function createSocialLinks() {
    const container = createDivContainer();
    container.classList.add('socialLinks');
    container.innerHTML = `
        <ul>
            <li><a href="https://www.github.com/KvJellyBean" target="_blank" aria-label="Link to Open My Github in New Tab"><i class="fa-brands fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/kevin-natanael-44929b26b/" target="_blank" aria-label="Link to Open My LinkedIn in New Tab"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/natanvinx" target="_blank" aria-label="Link to Open My Instagram in New Tab"><i class="fa-brands fa-instagram"></i></a></li>
        </ul>
    `;
    return container;
  }

  // Create About me section
  function createAboutSection() {
    const container = document.createElement('section');
    const profileContainer = createDivContainer();
    const profilePhoto = createProfilePhoto();
    const socialLinks = createSocialLinks();

    container.id = 'aboutSection';
    profileContainer.classList.add('profileContainer');

    profileContainer.append(profilePhoto);
    profileContainer.innerHTML += `
        <h1>About Me</h1>
        <p>
          Hello! I'm Kevin Natanael, a front-end developer with aspirations to become a proficient MERN stack full-stack developer. Currently diving deep into learning through The Odin Project, my focus is on mastering ReactJS while aiming to broaden my skills to encompass the entire MERN stack. With a strong passion for crafting exceptional user experiences and robust functionality, I'm continually seeking new challenges to enhance my abilities.
        </p>
    `;
    profileContainer.append(socialLinks);

    container.append(profileContainer);
    return container;
  }

  // Header initialize
  function initHeader() {
    const headerTag = document.querySelector('header');
    const aboutContent = createAboutSection();

    headerTag.append(aboutContent);
  }

  return {
    initHeader,
    createSocialLinks
  };
})();

export default Header;
