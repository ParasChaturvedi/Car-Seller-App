import React, { useState } from "react";
import "./App.css";
import cars from "./cars.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGasPump } from '@fortawesome/free-solid-svg-icons';
import { faGauge } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastlndex = currentPage * recordsPerPage;
  const firstlndex = lastlndex - recordsPerPage;
  const records = cars.slice(firstlndex, lastlndex);
  const npage = Math.ceil(cars.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <>
      <div className="cars-container">
        <div className="seachInput-container">
          <input
            type="text"
            id="search"
            placeholder="Search Here ..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <select name="relevance" id="relevance">
            <option value="relevance">Relevance</option>
          </select>
          <select name="allBrands" id="allBrands">
            <option value="allBrands">All brands</option>
          </select>
        </div>

        <div className="carDetails-container">
          {records
            .filter((item) => {
              if (searchTerm === "") {
                return item;
              } else if (
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item, i) => {
              return (
                <div className="template" key={i}>
                  <div className="template-data">
                    <img src={item.image} alt="" />
                    <h2 className="title">{item.title}</h2>
                    <div className="span">
                    <div className="people-1">
                      <div className="people">
                      <FontAwesomeIcon icon={faUser} style={{color: "#4287ff",}} className="icon" />
                        <span className="sub-title">4 People</span>
                      </div>
                      <div className="people">
                      <FontAwesomeIcon icon={faGauge} style={{color: "#4287ff",}} className="icon" />
                        <span className="sub-title">&#160;6km/Litre</span>
                      </div>
                      </div>
                    <div className="people-2">

                      <div className="people">
                      <FontAwesomeIcon icon={faGasPump} style={{color: "#4287ff",}} className="icon" />
                        <span className="sub-title">Hybrid</span>
                      </div>
                      <div className="people">
                      <FontAwesomeIcon icon={faCar} style={{color: "#4287ff",}} className="icon" />
                        <span className="sub-title">&#160;Automatic</span>
                      </div>
                      </div>
                    </div>
            

                    <p className="start_production">
                      <span className="sub-title">Model ~ </span>
                      {item.start_production}
                    </p>
                    <p className="class">
                      <span className="sub-title">Class ~ </span>
                      {item.class}
                    </p>
                    <hr />
                    <div className="footer-car-card" style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',marginTop:'-8px'}}>
                    
                    <button style={{backgroundColor:'#92baff',border:'none',borderRadius:'5px',display:'flex',justifyContent:'center',alignItems:'center',marginRight:'125px'}}><FontAwesomeIcon icon={faHeart} style={{color:'#4287ff',padding:'8px',backgroundColor:'#92baff',border:'none',borderRadius:'5px'}}/></button>
                    <button style={{color:'#fff',padding:'4px 9px',backgroundColor:'#4287ff',border:'none',borderRadius:'5px',marginRight:'-175px'}}>Rent now</button>
                    </div>
                    
                    
                  </div>
                </div>
              );
            })}
        </div>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link" onClick={prePage}>
                &lt;
              </a>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a
                  className="page-link"
                  onClick={() => changeCPage(n)}
                  href="#"
                >
                  {n}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a className="page-link" onClick={nextPage} href="#">
                &gt;
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );

  function prePage() {
    if (currentPage !== firstlndex) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== lastlndex) {
      setCurrentPage(currentPage + 1);
    }
  }
}

export default App;
