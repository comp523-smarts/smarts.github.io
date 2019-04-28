// common header without php hack 
// see also: https://en.wikipedia.org/wiki/Foolishness
document.write('\
\
<!doctype html>\
<html lang="en">\
    <head>\
        <meta charset="utf-8">\
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\
        \
        <!-- Bootstrap CDN -->\
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"\
         integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">\
        <link rel="stylesheet" href="style.css">\
        <title>Trauma Ready</title>\
    </head>\
    \
    <body>\
        <div class="container-fluid">\
            <nav class="navbar navbar-expand-sm navbar-dark" style="background-color: #4B9CD3"> <!-- tar heels baby!-->\
                <a class="navbar-brand" href="index.html">\
                    <img src="Old_Well_Graphic_2_facebook.jpg" width=30 height=40 alt="old well">\
                    Trauma Ready\
                </a>\
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
                        <span class="navbar-toggler-icon"></span>\
                </button>\
                <div class="collapse navbar-collapse" id="navbarSupportedContent"> \
                    <ul class="navbar-nav mr-auto">\
                        <li class="nav-item">\
                            <a class="nav-link" href="about.html">About</a>\
                        </li>\
                        <li class="nav-item">\
                                <a class="nav-link" href="team.html">Team</a>\
                        </li>\
                        <li class="nav-item dropdown">\
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
                                Deliverables\
                            </a>\
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">\
                                <a class="dropdown-item" href="specifications.html">D1. Specifications</a>\
                                <a class="dropdown-item" href="design.html">D2. Design Document</a>\
                                <a class="dropdown-item" href="testing.html">D3. Test Plan</a>\
                                <a class="dropdown-item" href="documentation.html">D4. Documentation</a>\
                                <a class="dropdown-item" href="code.html">D5. Code</a>\
                                <a class="dropdown-item" href="apples.html">APPLES Reflection 1</a>\
                            </div>\
                        </li>\
                        <li class="nav-item dropdown">\
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
                                Milestones\
                            </a>\
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">\
                                <a class="dropdown-item" href="">Team Rules & Coding Practices</a>\
                                <a class="dropdown-item" href="">Project Concept</a>\
                                <a class="dropdown-item" href="">User Stories</a>\
                                <a class="dropdown-item" href="">Platform Selection</a>\
                                <a class="dropdown-item" href="">Project Plan</a>\
                                <a class="dropdown-item" href="">Architecture Diagram</a>\
                            </div>\
                        </li>\
                        <li class="nav-item">\
                            <a class="nav-link" href="presentations.html">Presentations</a>\
                        </li>    \
                        <li class="nav-item">\
                            <a class="nav-link" href="calendar.html">Meetings</a>\
                        </li>    \
                    </ul>\
                </div>\
            </nav>\
        </div>\
        <br></br>\
\
');