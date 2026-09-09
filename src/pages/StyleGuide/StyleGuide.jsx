import "@/pages/StyleGuide/style-guide.scss";

import ColorCard from "@/components/cards/ColorCard/ColorCard.jsx";
import Header from "@/components/layout/header/Header.jsx";

import lexendImage from "@/assets/images/style-guide/lexend.png"
import urbanistImage from "@/assets/images/style-guide/urbanist.png"



function StyleGuide() {
  return (
    <main className="grid">
      <div className="page__content">
        <section className="style-guide">

          <Header />

          
          <div className="style-guide__title">
            <h1>Style guide</h1>
            <p className="body-l--emphasis-high">
              A collection of visual principles and design elements
              that create consistency across the portfolio.
            </p>
          </div>



          <div className="style-guide__typefaces">

            <h4>Typefaces</h4>

            <div className="style-guide__boxes">

              <div className="style-guide__box">
                <div className="style-guide__box-texts">
                  <p>Display type</p>
                  <p>
                    Geometric, readability, clarity. Used for headers,
                    buttons, biz names, and impact text.
                  </p>
                </div>
                <img src= {lexendImage} alt="" />
              </div>

              <div className="style-guide__box">
                <div className="style-guide__box-texts">
                  <p>Text type</p>
                  <p>
                    Modern and clean. Used for most body text, particularly 
                    long form content.
                  </p>
                </div>
                <img src= {urbanistImage} alt="" />
              </div>

            </div>   

          </div>


          
          <div className="style-guide__sizes">

            <h4>Platform sizes</h4>

            <div className="style-guide__web">
              <h4 className="style-guide__web-title">Web</h4>


              <div className="style-guide__main-container">

                <div className="style-guide__container-texts-line">
                  <div className="style-guide__container-texts style-guide__container-texts--title">
                    <p>Type scale (1200)</p>
                    <div className="style-guide__container-size-height">
                      <p>Size</p>
                      <p>Height</p>  
                    </div>   
                  </div>
                  <div className="style-guide__line style-guide__line--first"></div>
                </div>   

                <div className="style-guide__container-texts-line">
                  <div className="style-guide__container-texts">
                    <h1>Heading 1</h1>
                    <div className="style-guide__container-size-height">
                      <div className="style-guide__size">
                        <p>40px</p>
                        <p>2.5 rem</p>
                      </div>                      
                      <div className="style-guide__size">
                        <p>48px</p>  
                        <p>1.2</p>
                      </div>
                    </div>   
                  </div>
                  <div className="style-guide__line"></div>
                </div> 

                <div className="style-guide__container-texts-line">
                  <div className="style-guide__container-texts">
                    <h2>Heading 2</h2>
                    <div className="style-guide__container-size-height">
                      <div className="style-guide__size">
                        <p>32px</p>
                        <p>2 rem</p>
                      </div>                      
                      <div className="style-guide__size">
                        <p>40px</p>  
                        <p>1.25</p>
                      </div>
                    </div>   
                  </div>
                  <div className="style-guide__line"></div>
                </div> 

                <div className="style-guide__container-texts-line">
                  <div className="style-guide__container-texts">
                    <h3>Heading 3</h3>
                    <div className="style-guide__container-size-height">
                      <div className="style-guide__size">
                        <p>28px</p>
                        <p>1.75 rem</p>
                      </div>                      
                      <div className="style-guide__size">
                        <p>36px</p>  
                        <p>1.3</p>
                      </div>
                    </div>   
                  </div>
                  <div className="style-guide__line"></div>
                </div>       


                <div className="style-guide__container-texts-line">
                  <div className="style-guide__container-texts">
                    <h4>Heading 4</h4>
                    <div className="style-guide__container-size-height">
                      <div className="style-guide__size">
                        <p>24px</p>
                        <p>1.5 rem</p>
                      </div>                      
                      <div className="style-guide__size">
                        <p>32px</p>  
                        <p>1.35</p>
                      </div>
                    </div>   
                  </div>
                  <div className="style-guide__line"></div>
                </div>   


                <div className="style-guide__container-texts-line">
                  <div className="style-guide__container-texts">
                    <p className="style-guide__xl-text">Xl</p>
                    <div className="style-guide__container-size-height">
                      <div className="style-guide__size">
                        <p>20px</p>
                        <p>1.25 rem</p>
                      </div>                      
                      <div className="style-guide__size">
                        <p>28px</p>  
                        <p>1.4</p>
                      </div>
                    </div>   
                  </div>
                  <div className="style-guide__line"></div>
                </div>   

                <div className="style-guide__container-texts-line">
                  <div className="style-guide__container-texts">
                    <p className="style-guide__l-text">L</p>
                    <div className="style-guide__container-size-height">
                      <div className="style-guide__size">
                        <p>16px</p>
                        <p>1 rem</p>
                      </div>                      
                      <div className="style-guide__size">
                        <p>24px</p>  
                        <p>1.5</p>
                      </div>
                    </div>   
                  </div>
                  <div className="style-guide__line"></div>
                </div>   

                <div className="style-guide__container-texts-line">
                  <div className="style-guide__container-texts">
                    <p className="style-guide__m-text">M</p>
                    <div className="style-guide__container-size-height">
                      <div className="style-guide__size">
                        <p>14px</p>
                        <p>0.875 rem</p>
                      </div>                      
                      <div className="style-guide__size">
                        <p>20px</p>  
                        <p>1.4</p>
                      </div>
                    </div>   
                  </div>
                  <div className="style-guide__line"></div>
                </div>   

                <div className="style-guide__container-texts-line">
                  <div className="style-guide__container-texts">
                    <p className="style-guide__s-text">s</p>
                    <div className="style-guide__container-size-height">
                      <div className="style-guide__size">
                        <p>12px</p>
                        <p>0.75 rem</p>
                      </div>                      
                      <div className="style-guide__size">
                        <p>16px</p>  
                        <p>1.33</p>
                      </div>
                    </div>   
                  </div>
                  <div className="style-guide__line"></div>
                </div>   

                <div className="style-guide__container-texts-line">
                  <div className="style-guide__container-texts">
                    <p className="style-guide__xs-text">xs</p>
                    <div className="style-guide__container-size-height">
                      <div className="style-guide__size">
                        <p>10px</p>
                        <p>0.625 rem</p>
                      </div>                      
                      <div className="style-guide__size">
                        <p>12px</p>  
                        <p>1.2</p>
                      </div>
                    </div>   
                  </div>
                 
                </div>   





              </div>

            </div>

          </div>

          <ColorCard 
            variant="interface"
          />

          <ColorCard
            variant="gray"
          />
        </section>
      </div>
    </main>
  );
}

export default StyleGuide;
