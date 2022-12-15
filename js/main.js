console.log("Pozdrav!!");

let putanja = window.location.pathname;

if (putanja == "/" || putanja == "/index.html") {
  index();
}
if (putanja == "/contact.html") {
  contact();
}
if (putanja == "/author.html") {
  author();
}

function topBar() {
  let topBarInfo = [
    ["fa fa-envelope", "contact@traveler.com"],
    ["fa fa-phone-alt", "+012 321 5487"],
  ];

  let topBarSocial = [
    ["https://www.facebook.com", "fab fa-facebook-f"],
    ["sitemap.xml", "fa fa-regular fa-sitemap"],
    ["dokumentacija.pdf", "fa fa-regular fa-file"],
    ["https://www.facebook.com", "fab fa-instagram"],
    ["https://www.facebook.com", "fab fa-youtube"],
  ];

  let topBarInfoText = ``;

  for (let i in topBarInfo) {
    topBarInfoText += `<p><i class="${topBarInfo[i][0]} mr-2"></i>${topBarInfo[i][1]}</p>`;
    if (i % 2 == 0) {
      topBarInfoText += `<p class="text-body px-3">|</p>`;
    }
  }
  let topBarInfoWrap = document.querySelector("#topBarInfo");

  topBarInfoWrap.innerHTML = topBarInfoText;

  let topBarSocialText = ``;

  for (let i in topBarSocial) {
    topBarSocialText += `<a class="text-primary px-3" href="${topBarSocial[i][0]}">
                          <i class="${topBarSocial[i][1]}"></i>
                        </a>`;
  }

  let topBarSocialWrap = document.querySelector("#topBarSocial");

  topBarSocialWrap.innerHTML = topBarSocialText;
}

function navBar() {
  let navBarBrand = document.createElement("a");
  navBarBrand.setAttribute("a", "index.html");
  navBarBrand.setAttribute("class", "navbar-brand");
  let brandText = document.createElement("h1");
  brandText.setAttribute("class", "m-0 text-primary");
  let brandSpan = document.createElement("span");
  brandSpan.setAttribute("class", "text-dark");
  let spanText = document.createTextNode("TRAVEL");
  brandSpan.appendChild(spanText);
  let brandNText = document.createTextNode("ER");
  brandText.appendChild(brandSpan);
  brandText.appendChild(brandNText);
  navBarBrand.appendChild(brandText);
  let buttonNav = document.createElement("button");
  buttonNav.setAttribute("type", "button");
  buttonNav.setAttribute("class", "navbar-toggler");
  let buttonSpan = document.createElement("span");
  buttonSpan.setAttribute("class", "navbar-toggler-icon");
  buttonNav.appendChild(buttonSpan);

  let navbarItemsWrap = document.createElement("div");
  navbarItemsWrap.setAttribute(
    "class",
    "collapse navbar-collapse justify-content-between px-3"
  );
  navbarItemsWrap.setAttribute("id", "navbarCollapse");

  let navItemsInfo = [
    ["Home", "index.html"],
    ["About", "index.html#aboutSection"],
    ["Services", "index.html#destinationSection"],
    ["Offers", "index.html#offersSection"],
    ["Contact", "contact.html"],
    ["Author", "author.html"],
  ];

  let navbarNav = document.createElement("div");
  navbarNav.setAttribute("class", "navbar-nav ml-auto py-0");

  for (let i in navItemsInfo) {
    let navLink = document.createElement("a");
    navLink.setAttribute("href", navItemsInfo[i][1]);
    navLink.setAttribute("class", "nav-item nav-link");
    if (putanja.includes(navItemsInfo[i][1])) {
      navLink.classList.add("active");
    }
    let linkText = document.createTextNode(navItemsInfo[i][0]);
    navLink.appendChild(linkText);
    navbarNav.appendChild(navLink);
  }

  navbarItemsWrap.appendChild(navbarNav);

  let nav = document.querySelector("nav");

  nav.appendChild(navBarBrand);
  nav.appendChild(buttonNav);
  nav.appendChild(navbarItemsWrap);

  $(document).ready(() => {
    $(".navbar-toggler").click(() => {
      $("#navbarCollapse").slideToggle();
    });
  });
}

function features() {
  let featuresInfo = [
    [
      "fa fa-2x fa-money-check-alt",
      "BREAK THE SEAL TO YOUR PARADISE",
      `All guest rooms and suites are deep cleaned and then sealed exclusively for you. `,
    ],
    [
      "fa fa-2x fa-award",
      "UNCOMPROMISED FOOD AND BEVERAGE",
      `Gourmet Inclusive means the finest ingredients made-to-order with peace of mind quality.`,
    ],
    [
      "fa fa-2x fa-globe",
      "ENVIRONMENTALLY RESPONSIBLE",
      `Our company strongly supports community service and assists employees in their hardships.`,
    ],
  ];

  let featuresHTML = ``;

  for (let i in featuresInfo) {
    featuresHTML += `<div class="col-md-4">
                      <div class="d-flex mb-4 mb-lg-0">
                        <div
                          class="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
                          style="height: 100px; width: 100px"
                        >
                          <i class="${featuresInfo[i][0]} text-white"></i>
                        </div>
                        <div class="d-flex flex-column">
                          <h5 class="">${featuresInfo[i][1]}</h5>
                          <p class="m-0">
                            ${featuresInfo[i][2]}
                          </p>
                        </div>
                      </div>
                    </div>`;
  }

  featuresWrap.innerHTML = featuresHTML;
}

function destinations() {
  let destinationsInfo = [
    ["destination-1.jpg", "Hawaii", "4"],
    ["destination-2.jpg", "Jamaica", "5"],
    ["destination-3.jpg", "Dominican Republic", "5"],
    ["destination-4.jpg", "Bali", "4"],
    ["destination-5.jpg", " Mexico", "6"],
    ["destination-6.jpg", "Martinique", "3"],
  ];

  let destinationHTML = ``;

  for (let i in destinationsInfo) {
    destinationHTML += `<div class="col-lg-4 col-md-6 mb-4">
                        <a href="img/${destinationsInfo[i][0]}" data-lightbox="destinations">
                          <div
                            class="destination-item position-relative overflow-hidden mb-2"
                          >
                            <img class="img-fluid" src="img/${destinationsInfo[i][0]}" alt="destination image" />
                            <div
                              class="destination-overlay text-white text-decoration-none"
                              
                            >
                              <h5 class="text-white">${destinationsInfo[i][1]}</h5>
                              <span>${destinationsInfo[i][2]} resorts</span>
                            </div>
                          </div>
                        </a>
                        </div>`;
  }

  destinationWrap.innerHTML = destinationHTML;
}

function services() {
  let servicesInfo = [
    [
      "fa fa-2x fa-route",
      "Activities",
      `And an array of available excursions designed to immerse you in local history and culture.`,
    ],
    [
      "fa fa-2x fa-solid fa-spa",
      "Spa",
      `Feel the soothing embrace of the herbal steam room, dry sauna, chromo therapy showers, bubble beds and whirlpool.`,
    ],
    [
      "fa fa-2x fa-hotel",
      "Le Chique Restaurant",
      `A Latin American’s Best Top 50 Restaurant, is a must stop for foodies traveling to the Riviera Maya. `,
    ],
  ];

  let serviceHTML = ``;

  for (let i in servicesInfo) {
    serviceHTML += `<div class="col-lg-4 col-md-6 mb-4">
                      <div class="service-item bg-white text-center mb-2 py-5 px-4">
                        <i class="${servicesInfo[i][0]} mx-auto mb-4"></i>
                        <h5 class="mb-2">${servicesInfo[i][1]}</h5>
                        <p class="m-0">
                          ${servicesInfo[i][2]}
                        </p>
                      </div>
                    </div>`;
  }

  serviceWrap.innerHTML = serviceHTML;
}

function packages() {
  let packageInfo = [
    [
      "package-1.jpg",
      "Mexico",
      "7",
      "2",
      `Azul Beach Resort Negril`,
      "4.4",
      "43",
      "2500",
    ],
    [
      "package-2.jpg",
      "Jamaica",
      "6",
      "1",
      `Margaritaville Island Reserve Cap Cana Wave`,
      "4.1",
      "23",
      "3500",
    ],
    [
      "package-3.jpg",
      "Bali",
      "10",
      "3",
      `Hidden Beach Au Naturel Resort`,
      "4.2",
      "21",
      "1500",
    ],
    [
      "package-4.jpg",
      "Hawaii",
      "5",
      "2",
      `Nickelodeon Hotels & Resorts Riviera Maya`,
      "4.9",
      "55",
      "3300",
    ],
    [
      "package-5.jpg",
      "Martinique",
      "3",
      "1",
      `St. Somewhere Holbox`,
      "5.0",
      "34",
      "3800",
    ],
    [
      "package-6.jpg",
      "Dominican Republic",
      "4",
      "2",
      `Escape to the Riviera Maya `,
      "4.5",
      "44",
      "1500",
    ],
  ];

  let packageHTML = ``;

  for (let i in packageInfo) {
    packageHTML += `<div class="col-lg-4 col-md-6 mb-4">
                    <div class="package-item bg-white mb-2">
                      <img class="img-fluid" src="img/${packageInfo[i][0]}" alt="package image" />
                      <div class="p-4">
                        <div class="d-flex justify-content-between mb-3">
                          <small class="m-0"
                            ><i class="fa fa-map-marker-alt text-primary mr-2"></i
                            >${packageInfo[i][1]}</small
                          >
                          <small class="m-0"
                            ><i class="fa fa-calendar-alt text-primary mr-2"></i>${packageInfo[i][2]}
                            days</small
                          >
                          <small class="m-0"
                            ><i class="fa fa-user text-primary mr-2"></i>${packageInfo[i][3]} Person</small
                          >
                        </div>
                        <a class="h5 text-decoration-none" href="#"
                          >${packageInfo[i][4]}</a
                        >
                        <div class="border-top mt-4 pt-4">
                          <div class="d-flex justify-content-between">
                            <h6 class="m-0">
                              <i class="fa fa-star text-primary mr-2"></i>${packageInfo[i][5]}
                              <small>(${packageInfo[i][6]})</small>
                            </h6>
                            <h5 class="m-0">$${packageInfo[i][7]}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>`;
  }
  packagesWrap.innerHTML = packageHTML;

  let forma = document.formSort;

  forma.sort.addEventListener("change", () => {
    if (forma.sort.value == 1) {
      packageInfo = packageInfo.sort((a, b) => a[7] - b[7]);
      let packageHTML = ``;

      for (let i in packageInfo) {
        packageHTML += `<div class="col-lg-4 col-md-6 mb-4">
                    <div class="package-item bg-white mb-2">
                      <img class="img-fluid" src="img/${packageInfo[i][0]}" alt="package image" />
                      <div class="p-4">
                        <div class="d-flex justify-content-between mb-3">
                          <small class="m-0"
                            ><i class="fa fa-map-marker-alt text-primary mr-2"></i
                            >${packageInfo[i][1]}</small
                          >
                          <small class="m-0"
                            ><i class="fa fa-calendar-alt text-primary mr-2"></i>${packageInfo[i][2]}
                            days</small
                          >
                          <small class="m-0"
                            ><i class="fa fa-user text-primary mr-2"></i>${packageInfo[i][3]} Person</small
                          >
                        </div>
                        <a class="h5 text-decoration-none" href="#"
                          >${packageInfo[i][4]}</a
                        >
                        <div class="border-top mt-4 pt-4">
                          <div class="d-flex justify-content-between">
                            <h6 class="m-0">
                              <i class="fa fa-star text-primary mr-2"></i>${packageInfo[i][5]}
                              <small>(${packageInfo[i][6]})</small>
                            </h6>
                            <h5 class="m-0">$${packageInfo[i][7]}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>`;
      }
      packagesWrap.innerHTML = packageHTML;
    }
    if (forma.sort.value == 2) {
      packageInfo = packageInfo.sort((a, b) => b[7] - a[7]);
      let packageHTML = ``;

      for (let i in packageInfo) {
        packageHTML += `<div class="col-lg-4 col-md-6 mb-4">
                    <div class="package-item bg-white mb-2">
                      <img class="img-fluid" src="img/${packageInfo[i][0]}" alt="package image" />
                      <div class="p-4">
                        <div class="d-flex justify-content-between mb-3">
                          <small class="m-0"
                            ><i class="fa fa-map-marker-alt text-primary mr-2"></i
                            >${packageInfo[i][1]}</small
                          >
                          <small class="m-0"
                            ><i class="fa fa-calendar-alt text-primary mr-2"></i>${packageInfo[i][2]}
                            days</small
                          >
                          <small class="m-0"
                            ><i class="fa fa-user text-primary mr-2"></i>${packageInfo[i][3]} Person</small
                          >
                        </div>
                        <a class="h5 text-decoration-none" href="#"
                          >${packageInfo[i][4]}</a
                        >
                        <div class="border-top mt-4 pt-4">
                          <div class="d-flex justify-content-between">
                            <h6 class="m-0">
                              <i class="fa fa-star text-primary mr-2"></i>${packageInfo[i][5]}
                              <small>(${packageInfo[i][6]})</small>
                            </h6>
                            <h5 class="m-0">$${packageInfo[i][7]}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>`;
      }
      packagesWrap.innerHTML = packageHTML;
    }
  });
}

function guides() {
  let guidesInfo = [
    [
      "team-1.jpg",
      "Samantha Hamilton",
      "Agent",
      "https://www.facebook.com",
      "https://www.facebook.com",
      "https://www.facebook.com",
      "https://www.facebook.com",
    ],
    [
      "team-2.jpg",
      "Rick Grimes",
      "Tour guide",
      "https://www.facebook.com",
      "https://www.facebook.com",
      "https://www.facebook.com",
      "https://www.facebook.com",
    ],
    [
      "team-3.jpg",
      "Nicole Travis",
      "Tour Guide",
      "https://www.facebook.com",
      "https://www.facebook.com",
      "https://www.facebook.com",
      "https://www.facebook.com",
    ],
    [
      "team-4.jpg",
      "Jack Harlow",
      "CEO",
      "https://www.facebook.com",
      "https://www.facebook.com",
      "https://www.facebook.com",
      "https://www.facebook.com",
    ],
  ];

  let guidesHTML = ``;

  for (let i in guidesInfo) {
    guidesHTML += `<div class="col-lg-3 col-md-4 col-sm-6 pb-2">
    <div class="team-item bg-white mb-4">
      <div class="team-img position-relative overflow-hidden">
        <img class="img-fluid w-100" src="img/${guidesInfo[i][0]}" alt="" />
        <div class="team-social">
          <a class="btn btn-outline-primary btn-square" href="${guidesInfo[i][3]}"
            ><i class="fab fa-twitter"></i
          ></a>
          <a class="btn btn-outline-primary btn-square" href="${guidesInfo[i][4]}"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a class="btn btn-outline-primary btn-square" href="${guidesInfo[i][5]}"
            ><i class="fab fa-instagram"></i
          ></a>
          <a class="btn btn-outline-primary btn-square" href="${guidesInfo[i][6]}"
            ><i class="fab fa-linkedin-in"></i
          ></a>
        </div>
      </div>
      <div class="text-center py-4">
        <h5 class="text-truncate">${guidesInfo[i][1]}</h5>
        <p class="m-0">${guidesInfo[i][2]}</p>
      </div>
    </div>
  </div>`;
  }

  teamWrap.innerHTML = guidesHTML;
}

function blog() {
  let blogInfo = [
    [
      "blog-1.jpg",
      "14",
      "Dec",
      "Nick Dave",
      "Tours & Travel",
      `El Dorado Casitas Royale | Workcation`,
      `Working from home has its perks. Working from paradise? It doesn’t get any better. Sun. Ocean.`,
    ],
    [
      "blog-2.jpg",
      "23",
      "Nov",
      "George Smith",
      "Tours & Travel",
      `CELEBRATE THE DAY YOU SAID "I DO"`,
      `Celebrate the day you said, "I Do" in style. Whether you are looking to start married life in luxury or you are reveling in romance on the day when two became one.`,
    ],
    [
      "blog-3.jpg",
      "11",
      "Nov",
      "Amy Spades",
      "Tours & Travel",
      `BREAK THE SEAL TO YOUR PARADISE`,
      `All guest rooms and suites are deep cleaned and then sealed exclusively for you. Stay Well ™ rooms include advanced air purification systems and other wellness features and therapies that address sleep`,
    ],
  ];

  blogHTML = ``;
  for (let i in blogInfo) {
    blogHTML += `<div class="col-lg-4 blog-item-wrap col-md-6 mb-4 pb-2">
                  <a href="#" class="blog-item text-decoration-none">
                    <div class="position-relative">
                      <img class="img-fluid w-100" src="img/${blogInfo[i][0]}" alt="blog image" />
                      <div class="blog-date">
                        <h6 class="font-weight-bold mb-n1">${blogInfo[i][1]}</h6>
                        <small class="text-white text-uppercase">${blogInfo[i][2]}</small>
                      </div>
                    </div>
                    <div class="bg-white p-4">
                      <div class="d-flex mb-2">
                        <p
                          class="text-primary text-uppercase text-decoration-none"
                          
                          >${blogInfo[i][3]}</p
                        >
                        <span class="text-primary px-2">|</span>
                        <p
                          class="text-primary text-uppercase text-decoration-none"
                        
                          >${blogInfo[i][4]}</p
                        >
                      </div>
                      <h5 class="h5 m-0 text-decoration-none" 
                        >${blogInfo[i][5]}</h5
                      >
                      <p class="m-0 text-muted mt-2 blog-desc"></p>
                      <a href="#" class="m-0  mt-3 blog-more">Read more</a>
                    </div>
                  </a>
                </div>`;
  }
  blogWrap.innerHTML = blogHTML;

  let blogItems = document.querySelectorAll(".blog-item");
  $(document).ready(function () {
    $(".blog-desc").hide();
    $(".blog-item-wrap").click(function (e) {
      e.preventDefault();
      let index = $(this).index();
      $(this)
        .find(".blog-desc")
        .toggle(function () {
          $(this).html(blogInfo[index][6]);
        });
      if ($(this).find(".blog-more").html() == "Read more") {
        $(this).find(".blog-more").html("Read less");
      } else {
        $(this).find(".blog-more").html("Read more");
      }
    });
  });
}

function clients() {
  let clientsInfo = [
    [
      "testimonial-1.jpg",
      `This resort is beautiful, but brand new, and still finding its way. The pools are gorgeous, and the children’s pool is adorable (complete with toddler-sized lounge chairs). `,
      "Logan Crowe",
      "Profession",
    ],
    [
      "testimonial-2.jpg",
      `The staff was delightful, especially Johan!  Johan (the pool butler) is amazing!!! He made me feel like such a special guest, but not just me - - he treated all guests in the same amazing way!  Warm and friendly and attentive.`,
      "Britney Huston",
      "Profession",
    ],
    [
      "testimonial-3.jpg",
      `Such a great and amazing hotel, perfect for someone who is traveling by them selves like i was. The ambiance was great, everyone who worked here was very attentive and very helpful, always available to answer questions.`,
      "Juan Garcia",
      "Profession",
    ],
    [
      "testimonial-4.jpg",
      ` 10/10 will be back and will definitely recommend to my friends and family. Honestly not much or anything to truly complain about`,
      "Dave Nick",
      "Profession",
    ],
  ];

  let clientsHTML = ``;

  for (let i in clientsInfo) {
    clientsHTML += `<div class="text-center d-none flip-in-ver-right client-t-item col-sm-12 pb-4">
                      <img
                        class="img-fluid mx-auto"
                        src="img/${clientsInfo[i][0]}"
                        style="width: 100px; height: 100px"
                      />
                      <div class="testimonial-text bg-white p-4 mt-n5">
                        <p class="mt-5">
                          ${clientsInfo[i][1]}
                        </p>
                        <h5 class="text-truncate">${clientsInfo[i][2]}</h5>
                        <span>${clientsInfo[i][3]}</span>
                      </div>
                    </div>`;
  }
  clientsWrap.innerHTML = clientsHTML;

  clientsButtonsHTML = ``;

  let clientItems = document.querySelectorAll(".client-t-item");
  for (let i = 0; i < clientItems.length; i++) {
    clientsButtonsHTML += `<a href="#" class="mx-1 client-button"
    ><i class="fa fa-solid fa-circle"></i
  ></a>`;
  }
  clientsButtonWrap.innerHTML = clientsButtonsHTML;
  let clientsButton = document.querySelectorAll(".client-button");
  var tren = 0;
  clientItems[0].classList.remove("d-none");
  setInterval(() => {
    tren++;
    if (tren == 4) {
      tren = 0;
    }
    for (let i = 0; i < clientItems.length; i++) {
      if (i == tren) {
        clientItems[i].classList.remove("d-none");
        clientsButton[i].classList.add("text-success");
      } else {
        clientItems[i].classList.add("d-none");
        clientsButton[i].classList.remove("text-success");
      }
    }
  }, 5000);

  for (let i = 0; i < clientsButton.length; i++) {
    clientsButton[i].addEventListener("click", (e) => {
      e.preventDefault();
      for (let j = 0; j < clientItems.length; j++) {
        if (j == i) {
          clientItems[j].classList.remove("d-none");
          clientsButton[j].classList.add("text-success");
          tren = j;
        } else {
          clientItems[j].classList.add("d-none");
          clientsButton[j].classList.remove("text-success");
        }
      }
    });
  }
}

function footer() {
  let footerLinks = [
    ["index.html", "Home"],
    ["index.html#aboutSection", "About"],
    ["index.html#destinationSection", "Services"],
    ["index.html#offersSection", "Offers"],
    ["contact.html", "Contact"],
    ["author.html", "Author"],
  ];

  let linksHTML = ``;
  for (let i in footerLinks) {
    linksHTML += `<a class="text-white-50 mb-2" href="${footerLinks[i][0]}"
                  ><i class="fa fa-angle-right mr-2"></i>${footerLinks[i][1]}</a>`;
  }
  let linkWrap = document.querySelector("#footerLinks");
  linkWrap.innerHTML = linksHTML;

  let footerContactInfo = [
    ["fa fa-map-marker-alt", "123 Street, New York, USA"],
    ["fa fa-phone-alt", "+012 321 5487"],
    ["fa fa-envelope", "contact@traveler.com"],
  ];

  let footerContactHTML = ``;

  for (let i in footerContactInfo) {
    footerContactHTML += `<p>
                            <i class="${footerContactInfo[i][0]} mr-2"></i>${footerContactInfo[i][1]}
                          </p>`;
  }

  let footerContact = document.querySelector("#footerContactInfo");
  footerContact.innerHTML = footerContactHTML;

  let footerForma = document.footerLetter;

  letterSubmit.addEventListener("click", () => {
    let checkEmail = /([\w\.]+)@([\w\.]+)\.(\w+)/;
    if (!checkEmail.test(footerForma.mail.value)) {
      letterError.innerHTML = "Porgešan unos email-a";
      letterError.classList.remove("text-success");
      letterError.classList.add("text-danger");
    } else {
      letterError.classList.add("text-success");
      letterError.classList.remove("text-danger");
      letterError.innerHTML = "Uspešno ste se prijavili na letter";
      setInterval(() => {
        letterError.innerHTML = "";
      }, 4000);
    }
  });

  let socialInfo = [
    ["sitemap.xml", "fa fa-sitemap"],
    ["https://www.facebook.com", "fab fa-facebook-f"],
    ["documentation.pdf", "fa fa-regular fa-file"],
    ["https://www.facebook.com", "fab fa-instagram"],
  ];

  let socialWrap = ``;

  for (let i in socialInfo) {
    socialWrap += `<a class="btn btn-outline-primary btn-square mr-2" href="${socialInfo[i][0]}"
                      ><i class="${socialInfo[i][1]}"></i
                    ></a>`;
  }
  footerSocial.innerHTML = socialWrap;
}

function offer() {
  setInterval(() => {
    let currentDate = new Date();
    let endDate = new Date("2022/12/31");

    let diff = new Date(endDate - currentDate);
    if (diff > 0) {
      let dateText =
        diff.getDate() +
        "d " +
        diff.getHours() +
        "h " +
        diff.getMinutes() +
        "m " +
        diff.getSeconds() +
        "s ";
      offerEnds.innerHTML = dateText;
    } else {
      offerEnds.innerHTML = "Offer ended!";
    }
  }, 1000);
}

function contactForm() {
  let forma = document.sentMessage;
  let regName = /^[A-Z][a-z]{2,13}\s[A-Z][a-z]{2,13}$/;
  let regEmail = /([\w\.]+)@([\w\.]+)\.(\w+)/;

  sendMessageButton.addEventListener("click", () => {
    let brGresaka = 0;
    if (!regName.test(forma.name.value)) {
      brGresaka++;
      let nameError = document.getElementById("nameError");
      nameError.innerHTML = "Invalid Full Name. Try : Edward Elric";
    } else {
      nameError.innerHTML = "";
    }
    if (!regEmail.test(forma.email.value)) {
      brGresaka++;
      forma.email.nextElementSibling.innerHTML =
        "Invalid Full Email. Try : yourname@gmail.com";
    } else {
      forma.email.nextElementSibling.innerHTML = "";
    }
    if (forma.subject.value == 0) {
      brGresaka++;
      forma.subject.nextElementSibling.innerHTML =
        "You didn't pick topic of message!";
    } else {
      forma.subject.nextElementSibling.innerHTML = "";
    }
    if (forma.role.value == 0) {
      brGresaka++;
      roleError.innerHTML = "You didn't pick client role!";
    } else {
      roleError.innerHTML = "";
    }
    if (forma.message.value == "") {
      brGresaka++;
      forma.message.nextElementSibling.innerHTML = "You didn't write message!";
    } else {
      forma.message.nextElementSibling.innerHTML = "";
    }
    if (!forma.terms.checked) {
      brGresaka++;
      forma.terms.nextElementSibling.innerHTML =
        "You have to be over 18 years old!";
    } else {
      forma.terms.nextElementSibling.innerHTML = "";
    }
    if (brGresaka == 0) {
      formSuccess.innerHTML = "You successfully sent a message!";
      forma.reset();
    }
  });
}

function cover() {
  let coverInfo = [
    [
      "carousel-1.jpg",
      "Tours & Travel",
      "Let's Discover The World Together",
      "Book Now",
    ],
    [
      "carousel-2.jpg",
      "Tours & Travel",
      "Discover Amazing Places With Us",
      "Book Now",
    ],
  ];

  let coverInner = ``;
  for (let i in coverInfo) {
    coverInner += `<div class="carousel-item ${i == 0 ? "active" : ""}">
                    <img class="w-100" src="img/${
                      coverInfo[i][0]
                    }" alt="Image" />
                    <div
                      class="carousel-caption d-flex flex-column align-items-center justify-content-center"
                    >
                      <div class="p-3" style="max-width: 900px">
                        <h4 class="text-white text-uppercase mb-md-3">
                          ${coverInfo[i][1]}
                        </h4>
                        <h1 class="display-3 text-white mb-md-4">
                        ${coverInfo[i][2]}
                        </h1>
                        <a href="" class="btn btn-primary py-md-3 px-md-5 mt-2"
                          >${coverInfo[i][3]}</a
                        >
                      </div>
                    </div>
                  </div>`;
  }

  coverWrap.innerHTML = coverInner;
}

function about() {
  let imagesInfo = [
    "destination-2.jpg",
    "about-2.jpg",
    "blog-1.jpg",
    "blog-2.jpg",
    "blog-3.jpg",
  ];

  let ranNums = [],
    i = imagesInfo.length,
    j = 0;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    ranNums.push(imagesInfo[j]);
    imagesInfo.splice(j, 1);
  }
  let aboutImages = ``;
  for (let i = 0; i < 2; i++) {
    aboutImages += `<div class="col-6">
                      <img class="img-fluid" src="img/${ranNums[i]}" alt="" />
                    </div>`;
  }
  let aboutWrap = document.querySelector("#aboutImg");
  aboutWrap.innerHTML = aboutImages;
}

function index() {
  topBar();
  navBar();
  features();
  destinations();
  services();
  clients();
  packages();
  guides();
  about();
  offer();
  blog();
  cover();
  footer();
}
function contact() {
  topBar();
  navBar();
  contactForm();
  footer();
}
function author() {
  topBar();
  navBar();
  $(document).ready(function () {
    $("#authorMore").hide();
    $("#readMore").html("Read more");
    $("#readMore").click(function (e) {
      e.preventDefault();
      $("#authorMore").slideToggle();
      if ($(this).html() == "Read more") {
        $(this).html("Read less");
      } else {
        $(this).html("Read more");
      }
    });
  });
  footer();
}
