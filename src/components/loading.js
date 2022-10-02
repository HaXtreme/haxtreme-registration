import "../css/loading.css";
import { useState } from "react";
import Formic from "./Formic";

const Loading = () => {
const [reg, setReg] = useState(false)


const onClick = (e)=> {
    e.preventDefault();
    setReg(true)
}

  return (
    <>
    {reg && <Formic/>}
    {!reg &&
      <section class="h-100 gradient-form" style={{}}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class="card-body p-md-5 mx-md-4">
                    <div class="text-center">
                      <img
                        src="https://haxtreme.github.io/hackathon/assets/img/HaxTreme_logo.png"
                        style={{ width: 185 }}
                        alt="logo"
                      />
                      <h4 class="mt-1 mb-5 pb-1">
                        HaXtreme 1.0v Hackathon Registration
                      </h4>
                    </div>

                    <form>
                      {/* <p>Please login to your account</p> */}
                        <p>Before Registration Please read the given instructions</p>
                    

                      <div class="text-center pt-1 mb-5 pb-1">
                        <button
                          class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                          onClick={onClick}
                        >
                          Register Now
                    
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-lg-6 right-font d-flex align-items-center gradient-custom-2">
                  <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 class="mb-4">
                      Welcome to HaXtreme 1.0V competition registrations.
                    </h4>
                    <p class="small mb-0">
                      <ul>
                        <li>
                          A team should consist of at least 2 members and not
                          more than 4 members.
                        </li>
                        <li>
                          The team members should be from the same faculty
                        </li>
                        <li>
                          Only undergraduates of University of Ruhuna are
                          eligible for the competition.
                        </li>
                      </ul>
                      <p class="mb-0 me-2">For More Details </p>
                  <button type="button" class="btn btn-outline-danger">
                    <a href="https://haxtreme.github.io/hackathon/" target={"blank"}>
                    Click Here 
                    </a>
              
                  </button> 
                    </p>
                  </div>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> }
  
    </>
  );
};

export default Loading;
