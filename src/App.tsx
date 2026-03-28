
import './App.css'
import Navbar from '../components/layout/Navbar'

function App() {

  return (
    <>
    <section id="landing">
      <Navbar />
      <header>
        <div className="container">
          <div className="row header__row">
            <div className="header__side--left">
              <h1 className="header__title">
                Beautiful React Template
                <span className="highlight-color">for you.</span>
              </h1>
              <p className="header__description">
                Our templates are easy to setup, understand and customize. Fully
                modular components with a variety of pages and components.
              </p>
              <div className="header__email--submission">
                <input
                  className="header__email--input"
                  type="text"
                  placeholder="Your Email Address"
                />
                <button className="header__button not-working">Get Started</button>
              </div>
              <p className="header__customers">Our Trusted Customers</p>
              <figure className="header__img--wrapper">
                <img
                  className="header__img"
                  src="https://module-2-fp-example-website.vercel.app/assets/customers-logo-strip.680ac7c2e8ae28161d2c.png"
                  alt=""
                />
              </figure>
            </div>
            <figure className="header__illustration--wrapper">
              <img
                className="header__illustration--img"
                src="https://module-2-fp-example-website.vercel.app/assets/design-illustration-2.6da6a00b20c07c4a9b65d1870679e1b8.svg"
                alt=""
              />
            </figure>
          </div>
        </div>
      </header>
    </section>

    <main>
      <section id="features">
        <div className="container">
          <div className="row features__row">
            <div className="section__description">
              <h4 className="section__title">Features</h4>
              <h2 className="section__subtitle">
                We Have Amazing <span className="highlight-color">Service.</span>
              </h2>
              <p className="section__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                ea nostrum illo facere quam fugiat iure!
              </p>
            </div>
            <div className="features">
              <div className="feature__list">
                <div className="feature">
                  <figure className="feature__img--wrapper">
                    <img
                      src="https://module-2-fp-example-website.vercel.app/assets/shield-icon.daefe14b320b14fbd9cbd18908ac93ec.svg"
                      alt=""
                      className="feature__img"
                    />
                  </figure>
                  <div className="feature__description">
                    <h2 className="feature__title">Secure</h2>
                    <p className="feature__para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deserunt, ullam.
                    </p>
                  </div>
                </div>
                <div className="feature">
                  <figure className="feature__img--wrapper">
                    <img
                      src="https://module-2-fp-example-website.vercel.app/assets/support-icon.f9253ffa8cb6ffde5bbaa05eb5136375.svg"
                      alt=""
                      className="feature__img"
                    />
                  </figure>
                  <div className="feature__description">
                    <h2 className="feature__title">24/7 Support</h2>
                    <p className="feature__para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex, sequi?
                    </p>
                  </div>
                </div>
                <div className="feature">
                  <figure className="feature__img--wrapper">
                    <img
                      src="https://module-2-fp-example-website.vercel.app/assets/customize-icon.367468c90fd796009b97fbfba67b2c6a.svg"
                      alt=""
                      className="feature__img"
                    />
                  </figure>
                  <div className="feature__description">
                    <h2 className="feature__title">Customizable</h2>
                    <p className="feature__para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione, minima.
                    </p>
                  </div>
                </div>
                <div className="feature">
                  <figure className="feature__img--wrapper">
                    <img
                      src="https://module-2-fp-example-website.vercel.app/assets/reliable-icon.1367510a8f0a1bec76dc425d25f92f43.svg"
                      alt=""
                      className="feature__img"
                    />
                  </figure>
                  <div className="feature__description">
                    <h2 className="feature__title">Reliable</h2>
                    <p className="feature__para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, possimus!
                    </p>
                  </div>
                </div>
                <div className="feature">
                  <figure className="feature__img--wrapper">
                    <img
                      src="https://module-2-fp-example-website.vercel.app/assets/fast-icon.dbb971a73d4805d2fc3bcdacdb55beba.svg"
                      alt=""
                      className="feature__img"
                    />
                  </figure>
                  <div className="feature__description">
                    <h2 className="feature__title">Fast</h2>
                    <p className="feature__para">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatibus, numquam.
                    </p>
                  </div>
                </div>
                <div className="feature">
                  <figure className="feature__img--wrapper">
                    <img
                      src="https://module-2-fp-example-website.vercel.app/assets/simple-icon.673b7e1750b2a4ef32907fc164828d00.svg"
                      alt=""
                      className="feature__img"
                    />
                  </figure>
                  <div className="feature__description">
                    <h2 className="feature__title">Easy</h2>
                    <p className="feature__para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reiciendis, nobis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY WORK SECTION */}

      <section id="quality-work">
        <div className="container">
          <div className="row quality-work__row">
            <div className="quality-work__description">
              <h4 className="section__title">Quality Work</h4>
              <h2 className="section__subtitle">
                Designed & Developed by
                <span className="highlight-color">Professionals.</span>
              </h2>
              <p className="section__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                quisquam voluptatum esse iusto quae aperiam in suscipit dolorem
                illum et! Reiciendis?
              </p>
              <button className="quality-work__button not-working">
                Learn More
              </button>
            </div>
            <figure className="quality-work__img--wrapper">
              <img
                className="quality-work__img"
                src="https://module-2-fp-example-website.vercel.app/assets/hero-screenshot-1.40a097b525c2f8c9808e.png"
                alt=""
              />
            </figure>
          </div>
        </div>
      </section>

      {/* STEPS SECTION */}

      <section id="steps">
        <div className="container">
          <div className="row">
            <figure className="steps__illustration--wrapper">
              <img
                className="steps__illustration"
                src="https://module-2-fp-example-website.vercel.app/assets/hero-screenshot-2.241aac1fbc66db29d873.png"
                alt=""
              />
            </figure>
            <div className="steps__side--right">
              <h4 className="section__title">Steps</h4>
              <h4 className="section__subtitle">
                Easy to
                <span className="highlight-color">Get Started.</span>
              </h4>
              <div className="steps__list">
                <div className="list__step">
                  <div className="list__step--number">01</div>
                  <div className="step__description">
                    <h4 className="step__title">Register</h4>
                    <p className="list__step--para">
                      Create an account with us using Google or Facebook.
                    </p>
                  </div>
                </div>
                <div className="list__step">
                  <div className="list__step--number">02</div>
                  <div className="step__description">
                    <h4 className="step__title">Download</h4>
                    <p className="list__step--para">
                      Browse and Download the template that you like from the
                      marketplace.
                    </p>
                  </div>
                </div>
                <div className="list__step">
                  <div className="list__step--number">03</div>
                  <div className="step__description">
                    <h4 className="step__title">Run</h4>
                    <p className="list__step--para">
                      Follow the instructions to setup and customize the
                      template to your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}

      <section id="values">
        <div className="container">
          <div className="row values__row">
            <div className="values__side--left">
              <h4 className="section__title">Values</h4>
              <h4 className="section__subtitle">
                We Always Abide by Our
                <span className="highlight-color">Principles.</span>
              </h4>
              <p className="section__para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
                consectetur! Aperiam distinctio, architecto accusantium
                obcaecati saepe asperiores porro in ipsum voluptatem harum, a,
                ullam repudiandae!
              </p>
              <div className="values__list">
                <div className="list__value">
                  <div className="value__header">
                    <figure className="value__icon--wrapper">
                      <i className="fa-solid fa-dollar-sign"></i>
                    </figure>
                    <h3 className="value__title">Affordable</h3>
                  </div>
                  <p className="value__para">
                    We promise to offer you the best rate we can - at par with
                    the industry standard.
                  </p>
                </div>
                <div className="list__value">
                  <div className="value__header">
                    <figure className="value__icon--wrapper">
                      <i className="fa-solid fa-briefcase"></i>
                    </figure>
                    <h3 className="value__title">Professionalism</h3>
                  </div>
                  <p className="value__para">
                    We assure you that our templates are designed and created by
                    professional designers.
                  </p>
                </div>
              </div>
              <button className="quality-work__button not-working">
                Learn More
              </button>
            </div>
            <figure className="values__illustration--wrapper">
              <img
                src="https://module-2-fp-example-website.vercel.app/assets/prototype-illustration.21bc4b3f612a2f257c3d361067582485.svg"
                alt=""
                className="values__illustration"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}

      <section id="pricing">
        <div className="container">
          <div className="row pricing__row">
            <h4 className="section__title">Pricing</h4>
            <h4 className="section__subtitle">
              Reasonable & Flexible
              <span className="highlight-color">Plans.</span>
            </h4>
            <p className="section__para pricing__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              accusantium reprehenderit asperiores a officia minus.
            </p>
            <div className="pricing__list">
              <div className="pricing__list--plan">
                <div className="plan__stripe"></div>
                <div className="list__plan--top-half">
                  <h3 className="plan__title">Personal</h3>
                  <div className="plan__price">$17.99</div>
                  <div className="plan__period">Monthly</div>
                </div>
                <hr className="pricing__line--break" />
                <div className="list__plan--bottom-half">
                  <div className="plan__target-audience">For Individuals</div>
                  <ul className="plan__highlights">
                    <li className="plan__highlight">30 Templates</li>
                    <li className="plan__highlight">7 Landing Pages</li>
                    <li className="plan__highlight">12 Internal Pages</li>
                    <li className="plan__highlight">Basic Assistance</li>
                  </ul>
                </div>
                <hr className="pricing__line--break" />
                <button className="plan__button not-working">Buy Now</button>
              </div>
              <div className="pricing__list--plan">
                <div className="plan__stripe"></div>
                <div className="list__plan--top-half">
                  <h3 className="plan__title">Business</h3>
                  <div className="plan__price">$37.99</div>
                  <div className="plan__period">Monthly</div>
                </div>
                <hr className="pricing__line--break" />
                <div className="list__plan--bottom-half">
                  <div className="plan__target-audience">For Small Businesses</div>
                  <ul className="plan__highlights">
                    <li className="plan__highlight">60 Templates</li>
                    <li className="plan__highlight">15 Landing Pages</li>
                    <li className="plan__highlight">22 Internal Pages</li>
                    <li className="plan__highlight">Priority Assistance</li>
                  </ul>
                </div>
                <hr className="pricing__line--break" />
                <button className="plan__button not-working">Buy Now</button>
              </div>
              <div className="pricing__list--plan">
                <div className="plan__stripe"></div>
                <div className="list__plan--top-half">
                  <h3 className="plan__title">Enterprise</h3>
                  <div className="plan__price">$57.99</div>
                  <div className="plan__period">Monthly</div>
                </div>
                <hr className="pricing__line--break" />
                <div className="list__plan--bottom-half">
                  <div className="plan__target-audience">For Large Companies</div>
                  <ul className="plan__highlights">
                    <li className="plan__highlight">90 Templates</li>
                    <li className="plan__highlight">27 Landing Pages</li>
                    <li className="plan__highlight">37 Internal Pages</li>
                    <li className="plan__highlight">Personal Assistance</li>
                  </ul>
                </div>
                <hr className="pricing__line--break" />
                <button className="plan__button not-working">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section id="testimonials">
        <div className="container">
          <div className="row">
            <figure className="testimonials__illustration--wrapper">
              <img
                className="testimonials__illustration"
                src="https://module-2-fp-example-website.vercel.app/assets/love-illustration.c759090fa833369ad6ffb6eb19cacb3e.svg"
                alt=""
              />
            </figure>
            <div className="testimonials__side--right">
              <h4 className="section__title">Testimonials</h4>
              <h4 className="section__subtitle">
                Our Clients
                <span className="highlight-color">Love Us.</span>
              </h4>
              <p className="section__para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                tempora ad molestiae. Temporibus expedita, tempora minima saepe
                earum atque minus.
              </p>
              <div className="testimonial">
                <div className="testimonial__rating">
                  <i className="fa-solid fa-star testimonial__rating--star"></i>
                  <i className="fa-solid fa-star testimonial__rating--star"></i>
                  <i className="fa-solid fa-star testimonial__rating--star"></i>
                  <i className="fa-solid fa-star testimonial__rating--star"></i>
                  <i className="fa-solid fa-star testimonial__rating--star"></i>
                </div>
                <h3 className="testimonial__title">Amazing User Experience</h3>
                <div className="testimonial__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus tempora assumenda hic consequuntur adipisci earum
                  cupiditate, maiores aut beatae culpa ea quaerat possimus modi,
                  cum ut neque ab iste. Reprehenderit atque repudiandae
                  quibusdam odit at numquam veritatis, non cumque minus.
                </div>
                <div className="testimonial__bottom">
                  <div className="testimonial__profile">
                    <figure className="testimonial__img--wrapper">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80"
                        alt=""
                        className="testimonial__img"
                      />
                    </figure>
                    <div className="testimonial__profile--description">
                      <div className="testimonial__profile--name">
                        Charlotte Hale
                      </div>
                      <div className="testimonial__profile--title">
                        Director, Delos Inc.
                      </div>
                    </div>
                  </div>
                  <div className="testimonial__buttons">
                    <button className="testimonial__button not-working">
                      <i
                        className="fa-solid fa-arrow-left testimonial__button--icon"
                      ></i>
                    </button>
                    <button className="testimonial__button not-working">
                      <i
                        className="fa-solid fa-arrow-right testimonial__button--icon"
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GET STARTED */}

      <section id="get-started">
        <div className="container">
          <div className="row">
            <div className="get-started__container">
              <div className="get-started__row">
                <div className="get-started__title">
                  Developers all over the world are happily using Treact.
                </div>
                <div className="get-started__buttons">
                  <button className="get-started__button not-working">
                    Get Started
                  </button>
                  <button
                    className="get-started__button button__effect--invert not-working"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div className="row footer__row">
        <div className="footer__columns">
          <div className="footer__column">
            <div className="footer__column--title">Main</div>
            <div className="footer__column--link">
              <a className="footer__column--anchor">Blog</a>
              <div className="footer__link--underline"></div>
            </div>
            <div className="footer__column--link">
              <a className="footer__column--anchor">FAQs</a>
              <div className="footer__link--underline"></div>
            </div>
            <div className="footer__column--link">
              <a className="footer__column--anchor">Support</a>
              <div className="footer__link--underline"></div>
            </div>
            <div className="footer__column--link">
              <a className="footer__column--anchor">About Us</a>
              <div className="footer__link--underline"></div>
            </div>
          </div>
          <div className="footer__column">
            <div className="footer__column--title">Product</div>
            <div className="footer__column--link">
              <a className="footer__column--anchor">Log In</a>
              <div className="footer__link--underline"></div>
            </div>
            <div className="footer__column--link">
              <a className="footer__column--anchor">Personal</a>
              <div className="footer__link--underline"></div>
            </div>
            <div className="footer__column--link">
              <a className="footer__column--anchor">Business</a>
              <div className="footer__link--underline"></div>
            </div>
            <div className="footer__column--link">
              <a className="footer__column--anchor">Team</a>
              <div className="footer__link--underline"></div>
            </div>
          </div>
          <div className="footer__column">
            <div className="footer__column--title">Press</div>
            <div className="footer__column--link">
              <a className="footer__column--anchor">Logos</a>
              <div className="footer__link--underline"></div>
            </div>
            <div className="footer__column--link">
              <a className="footer__column--anchor">Events</a>
              <div className="footer__link--underline"></div>
            </div>
            <div className="footer__column--link">
              <a className="footer__column--anchor">Stories</a>
              <div className="footer__link--underline"></div>
            </div>
            <div className="footer__column--link">
              <a className="footer__column--anchor">Office</a>
              <div className="footer__link--underline"></div>
            </div>
          </div>
          <div className="footer__column">
            <div className="footer__column--title">Team</div>
            <div className="footer__column--link">
              <a className="footer__column--anchor">Career</a>
              <div className="footer__link--underline"></div>
            </div>
            <div className="footer__column--link">
              <a className="footer__column--anchor">Founders</a>
              <div className="footer__link--underline"></div>
            </div>
            <div className="footer__column--link">
              <a className="footer__column--anchor">Culture</a>
              <div className="footer__link--underline"></div>
            </div>
            <div className="footer__column--link">
              <a className="footer__column--anchor">Onboarding</a>
              <div className="footer__link--underline"></div>
            </div>
          </div>
          <div className="footer__column">
            <div className="footer__column--title">Legal</div>
            <div className="footer__column--link">
              <a className="footer__column--anchor">GDPR</a>
              <div className="footer__link--underline"></div>
            </div>
            <div className="footer__column--link">
              <a className="footer__column--anchor">Privacy Policy</a>
              <div className="footer__link--underline"></div>
            </div>
            <div className="footer__column--link">
              <a className="footer__column--anchor">Terms of Service</a>
              <div className="footer__link--underline"></div>
            </div>
            <div className="footer__column--link">
              <a className="footer__column--anchor">Disclaimer</a>
              <div className="footer__link--underline"></div>
            </div>
          </div>
        </div>
        <hr className="footer__break" />
        <div className="footer__bottom">
          <div className="footer__branding">
            <img
              className="footer__logo"
              src="https://module-2-fp-example-website.vercel.app/assets/logo-light.d9a5d1b5be5ea077b26864fdfc2e96a4.svg"
              alt=""
            />
            <h5 className="footer__logo--text">Treact Inc.</h5>
          </div>
          <div className="footer__copyright">
            &copy; 2018 Treact Inc. All Rights Reserved.
          </div>
          <div className="footer__social-media">
            <div className="footer__icon--wrapper">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="footer__icon--wrapper">
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="footer__icon--wrapper">
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default App
