
{/* NoteTemplate */}
{/* ========  ======== */}
{/* --------  -------- */}
{/* ........  ........ */}
 

{/* Doc Header */}
 import React from "react";
 import "./styles.css";

 export default function App() {
   return (
     <div className="App">
     
{/* ======== Navbar ======================== */}
  {/* -------- Navbar Row Container -------- */}

      <div class="row navbar stickyTop">

  {/* -------- Navbar Left Side ------------ */}
        <div class="third left">

        {/* ---------------- Links --------- */}
          <ul class="navItem">

          {/* ---------------- Item 1 ------ */}
            <li class="navItem"> 

              <a href="#">Left</a>

            </li>

          {/* ---------------- Item 2 ------ */}
            <li class="navItem">

              <a href="#">Two</a>    

            </li>

          {/* ---------------- Item 3 ------ */}
            <li class="navItem">

              <a href="#">Three</a>

            </li>
          </ul>
        {/* ...................... Links End */}
        </div>

  {/* -------- Navbar Right Side ----------- */}
        <div class="third right">

          <a href="#">Right</a>

        </div>

  {/* -------- Navbar Center --------------- */}
        <div class="third hMiddle">

          <p>Page Title</p>

        </div>
      </div>
  {/* ........................... Navbar End */}

{/* ======== Main Container ================ */}
  {/* -------- Main Cont. Row Container ---- */}

      <div class="row, mainContainer">

  {/* -------- Splash "Page" --------------- */}
        <div class="full splash" id="splash">
          <div class="full hMiddle vMiddle">
        {/* -------- Splash Content -------- */}        
            <span>Splash Text</span>
            <a href="#">Splash Link</a>

          </div>
        </div>

  {/* -------- Main Navigation ------------- */}
        <div class= "row, hidden" id="mainNavigation">


        </div>

      </div>
  {/* ................... Main Container End */}

{/* ======== Footer ======================== */}
  {/* -------- Footer Row Container -------- */}

      <div class="row">

  {/* -------- Footer Top ------------------ */}
        <div class="row">

          {/* -------- Footer Left --------- */}
                <div class="half left">

                {/* -------- Links --------- */}
                  <ul class="">

                  {/* -------- Item 1 ------ */}
                    <li class=""> 

                      <a href="#">FooterLeft</a>

                    </li>

                  {/* -------- Item 2 ------ */}
                    <li class="">

                      <a href="#">Two</a>    

                    </li>

                  {/* -------- Item 3 ------ */}
                    <li class="">

                      <a href="#">Three</a>

                    </li>
                  </ul>
                {/* .............. Links End */}
                </div>

          {/* -------- Footer Right -------- */}
                <div class="half right">

                {/* -------- Links --------- */}
                  <ul class="">

                  {/* -------- Item 1 ------ */}
                    <li class=""> 

                      <a href="#">FooterRight</a>

                    </li>

                  {/* -------- Item 2 ------ */}
                    <li class="">

                      <a href="#">Two</a>    

                    </li>

                  {/* -------- Item 3 ------ */}
                    <li class="">

                      <a href="#">Three</a>

                    </li>
                  </ul>
                {/* .............. Links End */}
                </div>

        </div>{/* ........... Footer Top End */}

  {/* -------- Footer Bottom --------------- */}
        <div class="row">

          {/* -------- Footer Center -------- */}
                <div class="full hMiddle">

                  <span>Copyright Information</span>

                </div>

        </div>{/* ........... Footer Top End */}
      </div>
  {/* ........................... Footer End */}

{/* ................................ End App */}
    </div>
  );
}
