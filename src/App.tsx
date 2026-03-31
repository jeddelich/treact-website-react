// Styles
import "@/App.css";
import { motion } from "framer-motion";

// Data
import features from "@/data/features";
import steps from "@/data/steps";
import values from "@/data/values";
import plans from "@/data/plans";

// Layout
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// UI
import FeatureCard from "@/components/ui/FeatureCard";
import StepCard from "@/components/ui/StepCard";
import ValueCard from "@/components/ui/ValueCard";
import PlanCard from "@/components/ui/PlanCard";

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
                  <span className="highlight-color"> for you.</span>
                </h1>
                <p className="header__description">
                  Our templates are easy to setup, understand and customize.
                  Fully modular components with a variety of pages and
                  components.
                </p>
                <div className="header__email--submission">
                  <input
                    className="header__email--input"
                    type="text"
                    placeholder="Your Email Address"
                  />
                  <button className="header__button not-working">
                    Get Started
                  </button>
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
              <motion.div
                className="section__description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h4 className="section__title">Features</h4>
                <h2 className="section__subtitle">
                  We Have Amazing{" "}
                  <span className="highlight-color">Service.</span>
                </h2>
                <p className="section__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa, ea nostrum illo facere quam fugiat iure!
                </p>
              </motion.div>
              <div className="features">
                <div className="feature__list">
                  {features.map((feature) => (
                    <FeatureCard
                      key={feature.id}
                      icon={feature.icon}
                      title={feature.title}
                      para={feature.para}
                    />
                  ))}
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
                  <span className="highlight-color"> Professionals.</span>
                </h2>
                <p className="section__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  quisquam voluptatum esse iusto quae aperiam in suscipit
                  dolorem illum et! Reiciendis?
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
                  <span className="highlight-color"> Get Started.</span>
                </h4>
                <div className="steps__list">
                  {steps.map((step) => (
                    <StepCard
                      key={step.number}
                      number={step.number}
                      title={step.title}
                      para={step.para}
                    />
                  ))}
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
                  <span className="highlight-color"> Principles.</span>
                </h4>
                <p className="section__text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  consectetur! Aperiam distinctio, architecto accusantium
                  obcaecati saepe asperiores porro in ipsum voluptatem harum, a,
                  ullam repudiandae!
                </p>
                <div className="values__list">
                  {values.map((value) => (
                    <ValueCard
                      key={value.title}
                      icon={value.icon}
                      title={value.title}
                      para={value.para}
                    />
                  ))}
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
                <span className="highlight-color"> Plans.</span>
              </h4>
              <p className="section__para pricing__para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                accusantium reprehenderit asperiores a officia minus.
              </p>
              <div className="pricing__list">
                {plans.map((plan) => (
                  <PlanCard
                    key={plan.title}
                    title={plan.title}
                    price={plan.price}
                    subscription={plan.subscription}
                    targetAudience={plan.targetAudience}
                    highlights={plan.highlights}
                  />
                ))}
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
                  <span className="highlight-color"> Love Us.</span>
                </h4>
                <p className="section__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  tempora ad molestiae. Temporibus expedita, tempora minima
                  saepe earum atque minus.
                </p>
                <div className="testimonial">
                  <div className="testimonial__rating">
                    <i className="fa-solid fa-star testimonial__rating--star"></i>
                    <i className="fa-solid fa-star testimonial__rating--star"></i>
                    <i className="fa-solid fa-star testimonial__rating--star"></i>
                    <i className="fa-solid fa-star testimonial__rating--star"></i>
                    <i className="fa-solid fa-star testimonial__rating--star"></i>
                  </div>
                  <h3 className="testimonial__title">
                    Amazing User Experience
                  </h3>
                  <div className="testimonial__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus tempora assumenda hic consequuntur adipisci
                    earum cupiditate, maiores aut beatae culpa ea quaerat
                    possimus modi, cum ut neque ab iste. Reprehenderit atque
                    repudiandae quibusdam odit at numquam veritatis, non cumque
                    minus.
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
                        <i className="fa-solid fa-arrow-left testimonial__button--icon"></i>
                      </button>
                      <button className="testimonial__button not-working">
                        <i className="fa-solid fa-arrow-right testimonial__button--icon"></i>
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
                    <button className="get-started__button button__effect--invert not-working">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
