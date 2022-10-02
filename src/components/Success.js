import "../css/loading.css";
import { useState } from "react";
import Formic from "./Formic";

const Success = () => {
const [reg, setReg] = useState(false)




  return (
    <section class="h-100 gradient-form" style={{}}>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
            
              <div class="col-lg-6  right-font d-flex align-items-center text-center gradient-custom-2">
                <div class="text-white  px-3 py-4 p-md-5 mx-md-4">
                  <h3 class="mb-4">
                  Thank you for registering for HaXtreme 1.0V competition.
                  </h3>
                  <p class="medium mb-0">
                    
                    Stay Tuned !! 
                  </p>
                </div>
             
              </div>
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
                    <div class="text-center pt-1 mb-5 pb-1">
                    <p> Visit Our Page</p>
                      <button
                        class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                        type="button"
                      > <a href="https://haxtreme.github.io/hackathon/"></a>
                        For More Details
                      </button>
                      
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Success;
