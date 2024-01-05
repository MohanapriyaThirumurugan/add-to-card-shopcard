
import React,{useState} from "react";


function Cards({count,setcount,data}) {
  let [toggle,settoggle]=useState(true)
  
  return (
  //  data. isproceses? <> 
  <div className="col mb-5">
  <div className="card h-100">
      {/* <!-- Product image--> */}
      <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
      {/* <!-- Product details--> */}
      <div className="card-body p-4">
          <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{data.product}</h5>
              {/* <!-- Product reviews--> */}
              <div className="d-flex justify-content-center small text-warning mb-2">
                  {data.isproceses?<><div className="bi-star-fill">⭐⭐⭐⭐</div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div></>:" "}
              </div>
              {/* <!-- Product price--> */}
              {data.dollor}
          </div>
      </div>
      {/* <!-- Product actions--> */}
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
          {
            toggle ?<button
              className="btn btn-outline-dark mt-auto"
              href="#"
              onClick={() => {
               setcount(count + 1);
               settoggle(false)
              }}
            >
              add to cart
            </button>:

            <button
              className="btn btn-outline-dark mt-auto"
              href="#"
              onClick={() => {
               setcount(count - 1);
               settoggle(true)
              }}
            >
              remove from button
            </button>
            
          }

        </div>
        </div>
      </div>
  </div>

   )
 }

 export default Cards;
