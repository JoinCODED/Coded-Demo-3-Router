import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header class="header">
      <div class="navbar-area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <nav class="navbar navbar-expand-lg">
                <Link class="navbar-brand" to="/">
                  Cookies Plant
                </Link>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                </button>

                <div
                  class="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <Link class="page-scroll" to="/">
                        Home
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="page-scroll" to="/features">
                        Features
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="page-scroll" to="/about">
                        About
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
