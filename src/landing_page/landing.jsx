import React, { useEffect } from 'react';
import './landing.css';

function Landing() {
  useEffect(() => {
    const items = document.querySelectorAll('.slider-item');
    const itemCount = items.length;
    const nextItem = document.querySelector('.next');
    const previousItem = document.querySelector('.previous');
    const navItem = document.querySelector('a.toggle-nav');
    let count = 0;

    const showNextItem = () => {
      items[count].classList.remove('active');
      count = (count + 1) % itemCount;
      items[count].classList.add('active');
    };

    const showPreviousItem = () => {
      items[count].classList.remove('active');
      count = (count - 1 + itemCount) % itemCount;
      items[count].classList.add('active');
    };

    const toggleNavigation = function () {
      this.nextElementSibling.classList.toggle('active');
    };

    const keyPress = (e) => {
      e = e || window.event;
      if (e.keyCode === 37) {
        showPreviousItem();
      } else if (e.keyCode === 39) {
        showNextItem();
      }
    };

    nextItem?.addEventListener('click', showNextItem);
    previousItem?.addEventListener('click', showPreviousItem);
    navItem?.addEventListener('click', toggleNavigation);
    document.addEventListener('keydown', keyPress);

    return () => {
      nextItem?.removeEventListener('click', showNextItem);
      previousItem?.removeEventListener('click', showPreviousItem);
      navItem?.removeEventListener('click', toggleNavigation);
      document.removeEventListener('keydown', keyPress);
    };
  }, []);

  return (
    <>
      <nav className="flex-nav">
        <div>
          <div className="flex">
            <div>
              <p id="logo">CEMA<span id="highlight">.</span></p>
            </div>
            <div>
              <a href="#" className="toggle-nav">Menu <i className="ion-navicon-round"></i></a>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Our information</a></li>
                <li><a href="../register/register.jsx">Star with us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <main className="intro-section">
        <div>
          <div>
            <div>
              <ul className="slider">
                <li className="slider-item active">
                  <div className="vertical">
                    <div className="hide-mobile container-intro">
                      <div className="intro">
                        <a href="#"><h1 className="title"><span className="underline">Welcome to CEMA</span></h1></a>
                      </div>
                    </div>
                    <div>
                      <div className="image-holder">
                        <img src="https://images.unsplash.com/photo-1526749837599-b4eba9fd855e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                      </div>
                      <div>
                        <div>
                          <div className="intro show-mobile">
                            <a href="#"><h1 className="title"><span className="underline">Welcome to CEMA</span></h1></a>
                          </div>
                          <p className="description">
                            CEMA is a campany to take care of the planet in many ways, We are a community of people who care about the environment and want to make a difference. Join us in our mission to protect the planet and create a sustainable future for all.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="slider-item">
                  <div className="vertical">
                    <div className="hide-mobile container-intro">
                      <div className="intro">
                      <a href="#"><h1 className="title"><span className="underline">About CEMA</span></h1></a>
                      </div>
                    </div>
                    <div>
                      <div className="image-holder">
                        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                      </div>
                      <div>
                        <div>
                          <div className="intro show-mobile">
                            <a href="#"><h1 className="title"><span className="underline">About CEMA</span></h1></a>
                          </div>
                          <p className="description">
                            CEMA is a community-driven initiative focused on environmental conservation and sustainable practices. We aim to raise awareness, promote eco-friendly habits, and inspire action towards a greener planet.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="slider-item">
                  <div className="vertical">
                    <div className="hide-mobile container-intro">
                      <div className="intro">
                        <a href="#"><h1 className="title"><span className="underline">Things tha we do</span></h1></a>
                      </div>
                    </div>
                    <div>
                      <div className="image-holder">
                        <img src="https://images.unsplash.com/photo-1523823970546-64ee7436abf3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                      </div>
                      <div>
                        <div>
                          <div className="intro show-mobile">
                            <a href="#"><h1 className="title"><span className="underline">Things tha we do</span></h1></a>
                          </div>
                          <p className="description">
                            At CEMA, we engage in various activities such as tree planting, beach clean-ups, educational workshops, and community outreach programs to promote environmental awareness and sustainability.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="slider-item">
                  <div className="vertical">
                    <div className="hide-mobile container-intro">
                      <div className="intro">
                        <a href="#"><h1 className="title"><span className="underline">Taking care is important</span></h1></a>
                      </div>
                    </div>
                    <div>
                      <div className="image-holder">
                        <img src="https://images.unsplash.com/photo-1749576502454-a0fa6ae62a48?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                      </div>
                      <div>
                        <div>
                          <div className="intro show-mobile">
                            <a href="#"><h1 className="title"><span className="underline">Taking care is important</span></h1></a>
                          </div>
                          <p className="description">
                            If you are passionate about the environment and want to make a positive impact, join CEMA! Together, we can create a sustainable future by taking small steps towards conservation and responsible living.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <div>
                <div>
                  <div className="controls">
                    <button className="previous button">
                      <span className="visually-hidden">Previous</span>
                      <span className="icon arrow-left" aria-hidden="true"></span>
                    </button>
                    <button className="next button">
                      <span className="visually-hidden">Next</span>
                      <span className="icon arrow-right" aria-hidden="true"></span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <section>
        <div className='information-grid'>
          <div className='information-text'>
            <h2>Our Information</h2>
            <p>
              CEMA is dedicated to promoting environmental awareness and sustainable practices. We believe that by working together, we can make a significant impact on the health of our planet. Our initiatives include community clean-ups, educational workshops, and partnerships with local organizations to foster a culture of sustainability.
            </p>
            <button>Star with us</button>
          </div>
          <div className='information-image'>
            <img src="https://images.unsplash.com/photo-1752490890976-dc8471357439?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Our Information" />
          </div>
        </div>
      </section>


    </>
  );
}

export default Landing;
