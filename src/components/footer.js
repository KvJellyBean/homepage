import Header from './header';
import contactImg from '../images/contact.jpg';
import contactImgLow from '../images/contact_low.jpg';

const Footer = (() => {
  // Create contact information element
  function createContact() {
    const container = document.createElement('div');
    container.id = 'contact';
    container.innerHTML = `
        <h4>Contact Me</h4>

        <p>Please get in touch if you think our projects could be mutually beneficial!</p>
        <p class="road">1234 Random Road</p>
        <p class="town">Random Town, California 12345</p>
        <p class="phone"><i class="fa-solid fa-phone"></i> 555-555-5555</p>
        <p class="email"><i class="fa-regular fa-envelope"></i> kvjellybean@fakemail.com</p>
    `;
    container.append(Header.createSocialLinks());
    return container;
  }

  // Create contact person photo/portrait element
  function createContactPhoto() {
    const image = document.createElement('picture');
    image.innerHTML = `
      <source 
        srcset="${contactImg}"
        media="(min-width: 935px)"
      />
      <source 
        srcset="${contactImgLow}"
        media="(max-width: 935px)"
      />
      <img 
        src="${contactImg}"
        alt="Profile picture of Kevin Natanael, the person you are contacting"
      />
    `;
    return image;
  }

  // Footer initialize
  function initFooter() {
    const footerTag = document.querySelector('footer');
    const contact = createContact();
    const image = createContactPhoto();

    footerTag.append(contact, image);
  }

  return {
    initFooter
  };
})();

export default Footer;
