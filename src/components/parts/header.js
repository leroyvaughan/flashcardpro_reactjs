import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const title = props.title;
  const showHomeLink = props.showHome;
  const visibleState = showHomeLink? '' : 'hidden';
  const pageTitleVis = title? 'block' : '';

  return (
    <div>
      <header className="app-header">
        <Link
          to='/'
          className={`home-link ${visibleState}`}
          alt=""
          title="Home"
        >
            <i className="fa fa-home" aria-hidden="true"></i>
        </Link>

        <h2 className="app-title">Flashcard Pro</h2>
      </header>

        <h3 className={`stack-title ${pageTitleVis}`}>
          {title}
        </h3>
      </div>
  )
}


export default Header;