import React, {useContext} from "react";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import pdc from "../../assets/img/pdc.jpg"
import { MemberContext } from "utils/context/MemberContext";
import '../../assets/styles/style.css'

export default function Developpeur() {
  const {members}=useContext(MemberContext);
  const gaetan = members.filter((pers) => {
    return pers.id === 1;
  })
  const dama = members.filter((pers) => {
    return pers.id === 15;
  })
  const hasina = members.filter((pers) => {
    return pers.id === 37;
  })

  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                `url(${pdc})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Développeurs
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Nos développeurs qui on réalisé cette plateforme web :
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Here are our heroes</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  C'est eux ensembles qui ont pu réussir à mettre en place cette plateforme.
                </p>
              </div>
            </div>
            <div className="flex flex-wrapw-full developpeur">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                { gaetan.map((item) => (
                  <div className="px-6" key={item.id}>
                    <img
                      alt="..."
                      src={item.user_github_pic}
                      className="shadow-lg rounded-full mx-auto max-w-120-px"
                    />
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold nom">{item.prenom_usuel}</h5>
                      <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                        Lead 
                      </p>
                      <div className="mt-6">
                        <a
                          className="bg-lightBlue-500 text-white w-8 h-8 px-3 py-3 rounded-full outline-none focus:outline-none mx-1 my-1"
                          rel="noreferrer"
                          href={`https://www.linkedin.com/in${item.linkedin}`}
                        >
                          <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                          className="bg-lightBlue-600 text-white w-8 h-8 px-3 py-3 rounded-full outline-none focus:outline-none mx-1 my-1"
                          rel="noreferrer"
                          href={`https://www.facebook.com${item.facebook}`}
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                          className="bg-red-500 text-white w-8 h-8 px-3 py-3 rounded-full outline-none focus:outline-none mx-1 my-1"
                          href={`https://www.gmail.com/in${item.mail}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-google"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))
                }
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                { dama.map((item) => (
                  <div className="px-6" key={item.id}>
                    <img
                      alt="..."
                      src={item.user_github_pic}
                      className="shadow-lg rounded-full mx-auto max-w-120-px"
                    />
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold nom">{item.prenom_usuel}</h5>
                      <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                        Front/Intégration  
                      </p>
                      <div className="mt-6">
                        <a
                          className="bg-lightBlue-500 text-white w-8 h-8 px-3 py-3 rounded-full outline-none focus:outline-none mx-1 my-1"
                          rel="noreferrer"
                          href={`https://www.linkedin.com/in${item.linkedin}`}
                        >
                          <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                          className="bg-lightBlue-600 text-white w-8 h-8 px-3 py-3 rounded-full outline-none focus:outline-none mx-1 my-1"
                          rel="noreferrer"
                          href={`https://www.facebook.com${item.facebook}`}
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                          className="bg-red-500 text-white w-8 h-8 px-3 py-3 rounded-full outline-none focus:outline-none mx-1 my-1"
                          href={`https://www.gmail.com/in${item.mail}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-google"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))
                }
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                { hasina.map((item) => (
                  <div className="px-6" key={item.id}>
                    <img
                      alt="..."
                      src={item.user_github_pic}
                      className="shadow-lg rounded-full mx-auto max-w-120-px"
                    />
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold nom">{item.prenom_usuel}</h5>
                      <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                        Back-end 
                      </p>
                      <div className="mt-6">
                        <a
                          className="bg-lightBlue-500 text-white w-8 h-8 px-3 py-3 rounded-full outline-none focus:outline-none mx-1 my-1"
                          rel="noreferrer"
                          href={`https://www.linkedin.com/in${item.linkedin}`}
                        >
                          <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                          className="bg-lightBlue-600 text-white w-8 h-8 px-3 py-3 rounded-full outline-none focus:outline-none mx-1 my-1"
                          rel="noreferrer"
                          href={`https://www.facebook.com${item.facebook}`}
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                          className="bg-red-500 text-white w-8 h-8 px-3 py-3 rounded-full outline-none focus:outline-none mx-1 my-1"
                          href={`https://www.gmail.com/in${item.mail}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-google"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))
                }
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
