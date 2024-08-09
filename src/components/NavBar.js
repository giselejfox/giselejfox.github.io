import React from "react";

export default function NavBar() {

    const links = [
        { text: "About Me", url: "/about-me" },
        { text: "Oomen's Industrial Design Portfolio", url: "/project-1" },
    ]

    const navItems = (className) => links.map((linkData) => (
        <li className={`${className}-nav-item nav-item`} key={linkData.url}>
          <a className="nav-link active" aria-current="page" href={linkData.url}>{linkData.text}</a>
        </li>
    ));

    return (
        <div>
            {/* Only shows on xs/s */}
            <nav class="collapsed-navbar navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="google.com">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        {navItems('collapsed')}
                    </ul>
                    </div>
                </div>
            </nav>
            {/* shows md+ */}
            <nav class="expanded-navbar ps-5 pt-5 vh-100 border-end border-3 border-dark">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        {navItems('expanded')}
                    </ul>
                </div>
            </nav>
        </div>
        
    )
}
