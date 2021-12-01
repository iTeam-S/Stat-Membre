
<div className="w-full xl:w-4/12 px-4">
    <CardSocialTraffic />
</div>


<div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <CardLineChart />
</div>


/*Landing*/
<div className="flex flex-wrap items-center pt-2 pb-64"></div>
            <section className = "block relative z-1  pb-48" style = {{ backgroundColor: '#008080' }}>
                <div className = "container mx-auto" >
                    <div className = "justify-center flex flex-wrap" >
                        <div className = "w-full lg:w-12/12 px-4  -mt-24" >
                            <div className = "flex flex-wrap" >
                                <div className = "w-full lg:w-4/12 px-4" >
                                    <h5 className = "text-xl font-semibold pb-4 text-center" >Login Iteam-$</h5> 
                                    <a href="https://iteam-s.mg/web/login" target="_blank" rel="noreferrer" >
                                        <div className = "hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150" >
                                            <img alt = "..." className = "align-middle border-none max-w-full h-auto rounded-lg" style={{height: '270px'}} src = { require("assets/img/login.png").default }/> 
                                        </div> 
                                    </a>
                                </div>

                                <div className = "w-full lg:w-4/12 px-4" >
                                    <h5 className = "text-xl font-semibold pb-4 text-center" >All project </h5> 
                                     <a href="https://iteam-s.mg/projets" target="_blank" rel="noreferrer" >
                                        <div className = "hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150" >
                                            <img alt = "..." className = "align-middle border-none max-w-full h-auto rounded-lg" style={{height: '270px'}} src = { require("assets/img/projet.png").default }/> 
                                        </div> 
                                    </a>
                                </div>

                                <div className = "w-full lg:w-4/12 px-4" >
                                    <h5 className = "text-xl font-semibold pb-4 text-center" >Equipe Iteam-$ </h5> 
                                    <Link to = "/landing" >
                                        <div className = "hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150" >
                                            <img alt = "..." className = "align-middle border-none max-w-full h-auto rounded-lg" style={{height: '270px'}} src = { require("assets/img/equipe.png").default }/> 
                                        </div> 
                                    </Link> 
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </div> 


/*tooltips*/
{showModal ? (
    <>
      <div
        className="items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  mx- py-12 px-12 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                Voulez-vous vraiment supprimer ce projet?
              </p>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="bg-red-500 text-white background-transparent font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Supprimer
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  ) : null}
/*fin tooltips*/


