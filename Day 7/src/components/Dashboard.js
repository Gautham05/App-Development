import React from 'react';
import TopBar from './TopBar';
import "..//css/Dashboard.css";
import black from '../logo.jpg';
import Footer from './Footer';

function Dashboard() {
  return (
    <>
    <TopBar/>
    
    <div className='homepage'>
    <div className='homeTitle'>Project Management Tool</div>
    <div class="gamelist">
              <div class="gamecon">
                  <img class="gameimg"src={black} alt="Whack A Mole"/>
                  <h3 className='h3game'>99</h3>
                  <p class="subtextgame">Projects Completed</p>
              </div>
              
                <div class="gamecon">
                    <img class="gameimg"src={black} alt="Gravity"/>
                    <h3 className='h3game'>3</h3>
                    <p class="subtextgame">Projects Assigned</p>
                </div>

                <div class="gamecon">
                    <img class="gameimg"src={black} alt="Gravity"/>
                    <h3 className='h3game'>2</h3>
                    <p class="subtextgame">Projects Pending</p>
                </div>
            
        </div>
        </div>
      <Footer/>
    </>
  );
}

export default Dashboard;




