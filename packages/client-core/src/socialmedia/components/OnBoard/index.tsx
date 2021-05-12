/**
 * @author Gleb Ordinsky <glebordinskijj@gmail.com>
 */

import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';


interface Props{
    setOnborded?: any,
    image?: any,
    mockupIPhone?: any,
}


const Onboard = (props: Props) => {

    const [screen, setScreen] = useState(1)
    const { setOnborded, image, mockupIPhone } = props;
    switch(screen){

        case(1):
            return <div className={styles.firstScreen+" "+styles.onboarding}>
              <div>
              <h3>Welcome to ARC!</h3>
              <p>Biggest collection of 370+ layouts
                 for iOS prototyping.</p>
              <button onClick={()=>{setScreen(2)}}> Next </button>
              </div>
            </div>

        case(2):
            return <div className={styles.secondScreen+" "+styles.onboarding}>
              <div>
                  <img src={image} />
                  <h3>Discover articles,
                      news & posts
                  </h3>
                  <p>
                      It is those feelings that drive our love
                      of astronomy and our desire.
                  </p>
              </div>
              <button onClick={()=>{setScreen(3)}}> Get Started </button>
            </div>

        case(3):
            return <div className={styles.thirdScreen+" "+styles.onboarding}>
                      <button onClick={()=>{setOnborded(true)}}> Next </button>
                      <div>
                          <h3>
                              Meet up with friends.
                          </h3>
                          <p>
                              It is those feelings that drive our love
                              of astronomy and our desire.
                          </p>
                      </div>
                      <img src={mockupIPhone} />
                    </div>
        }
}

export default Onboard