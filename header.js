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
                                <a class="dropdown-item" href="deliverables/specifications.html">Specifications</a>\
                                <a class="dropdown-item" href="deliverables/design.html">Design Document</a>\
                                <a class="dropdown-item" href="deliverables/testing.html">Test Plan</a>\
                                <a class="dropdown-item" href="deliverables/manual.html">User Manual</a>\
                                <a class="dropdown-item" href="deliverables/code.html">Code</a>\
                            </div>\
                        </li>\
                        <li class="nav-item">\
                            <a class="nav-link" href="calendar.html">Calendar</a>\
                        </li>    \
                        <li class="nav-item">\
                            <a class="nav-link" href="blog.html">Blog</a>\
                        </li>\
                    </ul>\
                </div>\
            </nav>\
        </div>\
        <br></br>\
\
');