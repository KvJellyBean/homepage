import Footer from './components/footer';
import Header from './components/header';
import MainContent from './components/mainContent';
import './style.css';

function initApp() {
  const bodyTag = document.body;
  const headerTag = document.createElement('header');
  const mainTag = document.createElement('main');
  const footerTag = document.createElement('footer');

  bodyTag.append(headerTag, mainTag, footerTag);

  Header.initHeader();
  MainContent.initMain();
  Footer.initFooter();
}

initApp();
