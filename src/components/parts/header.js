import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const title = props.title;
  const showHomeLink = props.showHome;
  const visibleState = showHomeLink? 'visible' : 'hidden';
  const pageTitleVis = title? 'block' : 'none';

  return (
    <div>
      <header className="app-header">
        <Link style={{ visibility: visibleState }}
          to='/'
          className="home-link"
          alt=""
          title="Home"
        >
            <i className="fa fa-home" aria-hidden="true"></i>
        </Link>

        <h2 className="app-title">Flashcard Pro</h2>
      </header>

        <h3 className="stack-title"
          style={{ display: pageTitleVis }}>
          <i className="fa fa-file-text-o" aria-hidden="true"></i>
          {title}
          <i className="fa fa-file-text-o" aria-hidden="true"></i>
        </h3>
      </div>
  )
}


export default Header;