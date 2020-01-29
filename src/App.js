
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

      <div class="row, navbar, stickyTop">

  {/* -------- Navbar Left Side ------------ */}
        <div class="third, left">

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
        <div class="third, right">


        </div>

  {/* -------- Navbar Center --------------- */}
        <div class="third, hMiddle">


        </div>
      </div>
  {/* ........................... Navbar End */}

{/* ======== Main Container ================ */}
  {/* -------- Main Cont. Row Container ---- */}

      <div class="row, mainContainer">

  {/* -------- Splash "Page" --------------- */}
        <div class="full, splash">


        </div>

  {/* -------- Main Navigation ------------- */}
        <div class = "row">


        </div>

      </div>
  {/* ................... Main Container End */}

{/* ======== Footer ======================== */}
  {/* -------- Footer Row Container -------- */}

      <div class="row">

  {/* -------- Footer Top ------------------ */}
        <div class="row">

          {/* -------- Footer Left --------- */}
                <div class="half, left">


                </div>

          {/* -------- Footer Right -------- */}
                <div class="half, left">


                </div>

        </div>{/* ........... Footer Top End */}

  {/* -------- Footer Bottom --------------- */}
        <div class="row">

          {/* -------- Footer Center -------- */}
                <div class="full, hMiddle">


                </div>

        </div>{/* ........... Footer Top End */}
      </div>
  {/* ........................... Footer End */}

{/* ................................ End App */}
    </div>
  );
}
