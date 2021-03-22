import "./NavTab.css";

function NavTab(props) {
  const handleAnchorScroll = (anchor) => {
    if (anchor) {
      const anchorEle = document.getElementById(anchor);
      anchorEle.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul className='navTab'>
      <li
        onClick={() => {
          handleAnchorScroll("aboutProject");
        }}
        className='navtab__link navtab__link-text'
      >
        О проекте
      </li>
      <li
        onClick={() => {
          handleAnchorScroll("techs");
        }}
        className='navtab__link navtab__link-text'
      >
        Технологии
      </li>
      <li
        onClick={() => {
          handleAnchorScroll("aboutMe");
        }}
        className='navtab__link navtab__link-text'
      >
        Студент
      </li>
    </ul>
  );
}

export default NavTab;
