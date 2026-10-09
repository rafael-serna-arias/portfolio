import "@/pages/StyleGuide/style-guide.scss";

import ColorCard from "@/components/cards/ColorCard/ColorCard.jsx";

import lexendImage from "@/assets/images/style-guide/lexend.png"
import urbanistImage from "@/assets/images/style-guide/urbanist.png"

import pincelIcon from "@/assets/icons/pincel-icon.svg"
import backgroundIcon from "@/assets/icons/background-icon.svg"
import textIcon from "@/assets/icons/text-icon.svg"
import Navbar from "../../components/layout/Navbar/Navbar";


function StyleGuide() {
  return (
    <div className="grid">
     
        <section className="style-guide">

                    
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
                    <p className="style-guide__heading1-web">Heading 1</p>
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
                    <p className="style-guide__heading2-web">Heading 2</p>
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
                    <p className="style-guide__heading3-web">Heading 3</p>
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
                    <p className="style-guide__heading4-web">Heading 4</p>
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

            <div className="style-guide__web">
              
              <h4>Mobile</h4>

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
                    <p className="style-guide__heading1-mobile">Heading 1</p>
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
                    <p className="style-guide__heading2-mobile">Heading 2</p>
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
                    <p className="style-guide__heading3-mobile">Heading 3</p>
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

              </div>              
            </div>
          </div>


          <div className="style-guide__colors">
            <div className="style-guide__intro">
              <h2>Colors</h2>
              <p className="body-l--emphasis-high">A semantic color system that defines roles for actions, 
                feedback, information, and interface elements, supported 
                by a grayscale scale for structure and hierarchy.
              </p>
            </div>

            <div className="style-guide__user-interface-colors">
              <div className="style-guide__title-colors">
                <h4>User interface</h4>
                <div className="style-guide__explanatory-texts-colors">

                  <div className="style-guide__icon-text">
                    <img src= {pincelIcon } alt="" />
                    <p>Icons + colored elements</p>
                  </div>

                  <div className="style-guide__icon-texts2">
                    <div className="style-guide__icon-text">
                      <img src={textIcon} alt="" />
                      <p>text</p>
                    </div>

                    <div className="style-guide__icon-text">
                      <img src={backgroundIcon} alt="" />
                      <p>background</p>
                    </div>                  
                  </div>  
                  
                </div>             
              </div>

              <ColorCard
                variant="interface"
              />
            </div>


            <div className="style-guide__user-interface-colors">
              <div className="style-guide__title-colors">
                <h4>Grayscale</h4>
                <div className="style-guide__explanatory-texts-colors">

                  <div className="style-guide__icon-text">
                    <img src= {pincelIcon } alt="" />
                    <p>Icons + colored elements</p>
                  </div>

                  <div className="style-guide__icon-texts2">
                    <div className="style-guide__icon-text">
                      <img src={textIcon} alt="" />
                      <p>text</p>
                    </div>

                    <div className="style-guide__icon-text">
                      <img src={backgroundIcon} alt="" />
                      <p>background</p>
                    </div>
                  </div>

                </div>
              </div>
              
              <ColorCard
                variant="gray"
              />
            </div>

          </div>



          <div className="style-guide__spaces">
            <div className="style-guide__intro-spaces">
              <h2>Spaces</h2>
              <p className="body-l--emphasis-high">The spacing system starts with a 16px base value, 
                using factors and multiples to create a consistent scale. 
                This helps maintain proportional relationships between 
                different spaces and creates a more cohesive and structured 
                interface.
              </p>
            </div>

            <div className="style-guide__main-container-spaces">
              <div className="style-guide__content-spaces">

                <div className="style-guide__container-individual-info-spaces">
                  <div className="style-guide__px-spaces">
                    <p>4px</p>
                    <p>(16 x 0.25)</p>
                  </div>
                  <div className="style-guide__box-spaces style-guide__box-spaces--1"></div>
                </div>

                <div className="style-guide__container-individual-info-spaces">
                  <div className="style-guide__px-spaces">
                    <p>8px</p>
                    <p>(16 x 0.5)</p>
                  </div>
                  <div className="style-guide__box-spaces style-guide__box-spaces--2"></div>
                </div>

                <div className="style-guide__container-individual-info-spaces">
                  <div className="style-guide__px-spaces">
                    <p>12px</p>
                    <p>(16 x 0.75)</p>
                  </div>
                  <div className="style-guide__box-spaces style-guide__box-spaces--3"></div>
                </div>

                <div className="style-guide__container-individual-info-spaces">
                  <div className="style-guide__px-spaces">
                    <p>16px</p>
                    <p>(16 x 1)</p>
                  </div>
                  <div className="style-guide__box-spaces style-guide__box-spaces--4"></div>
                </div>

                <div className="style-guide__container-individual-info-spaces">
                  <div className="style-guide__px-spaces">
                    <p>24px</p>
                    <p>(16 x 1.5)</p>
                  </div>
                  <div className="style-guide__box-spaces style-guide__box-spaces--5"></div>
                </div>

                <div className="style-guide__container-individual-info-spaces">
                  <div className="style-guide__px-spaces">
                    <p>32px</p>
                    <p>(16 x 2)</p>
                  </div>
                  <div className="style-guide__box-spaces style-guide__box-spaces--6"></div>
                </div>

                <div className="style-guide__container-individual-info-spaces">
                  <div className="style-guide__px-spaces">
                    <p>48px</p>
                    <p>(16 x 3)</p>
                  </div>
                  <div className="style-guide__box-spaces style-guide__box-spaces--7"></div>
                </div>

                <div className="style-guide__container-individual-info-spaces">
                  <div className="style-guide__px-spaces">
                    <p>64px</p>
                    <p>(16 x 4)</p>
                  </div>
                  <div className="style-guide__box-spaces style-guide__box-spaces--8"></div>
                </div>

                <div className="style-guide__container-individual-info-spaces">
                  <div className="style-guide__px-spaces">
                    <p>96px</p>
                    <p>(16 x 6)</p>
                  </div>
                  <div className="style-guide__box-spaces style-guide__box-spaces--9"></div>
                </div>

                <div className="style-guide__container-individual-info-spaces">
                  <div className="style-guide__px-spaces">
                    <p>128px</p>
                    <p>(16 x 8)</p>
                  </div>
                  <div className="style-guide__box-spaces style-guide__box-spaces--10"></div>
                </div>

                <div className="style-guide__container-individual-info-spaces">
                  <div className="style-guide__px-spaces">
                    <p>192px</p>
                    <p>(16 x 12)</p>
                  </div>
                  <div className="style-guide__box-spaces style-guide__box-spaces--11"></div>
                </div>

                <div className="style-guide__container-individual-info-spaces">
                  <div className="style-guide__px-spaces">
                    <p>256px</p>
                    <p>(16 x 16)</p>
                  </div>
                  <div className="style-guide__box-spaces style-guide__box-spaces--12"></div>
                </div>

                <div className="style-guide__container-individual-info-spaces">
                  <div className="style-guide__px-spaces">
                    <p>384px</p>
                    <p>(16 x 24)</p>
                  </div>
                  <div className="style-guide__box-spaces style-guide__box-spaces--13"></div>
                </div>

                <div className="style-guide__container-individual-info-spaces">
                  <div className="style-guide__px-spaces">
                    <p>512px</p>
                    <p>(16 x 32)</p>
                  </div>
                  <div className="style-guide__box-spaces style-guide__box-spaces--14"></div>
                </div>

                <div className="style-guide__container-individual-info-spaces">
                  <div className="style-guide__px-spaces">
                    <p>640px</p>
                    <p>(16 x 40)</p>
                  </div>
                  <div className="style-guide__box-spaces style-guide__box-spaces--15"></div>
                </div>

                <div className="style-guide__container-individual-info-spaces">
                  <div className="style-guide__px-spaces">
                    <p>768px</p>
                    <p>(16 x 48)</p>
                  </div>
                  <div className="style-guide__box-spaces style-guide__box-spaces--16"></div>
                </div>
          
              </div>
            </div>
           
            


            <div className="style-guide__effects">
    
              <div className="style-guide__intro-effects">
                <h2>Effects</h2>
                <p className="body-l--emphasis-high">Shadows are organized into Raised and Overlay levels. 
                  Raised creates subtle elevation for components above the surface, while Overlay provides
                   stronger depth for elements that sit above the main content.
                </p>
              </div>


              <div className="style-guide__main-container-effects">
                <div className="style-guide__effects-content" >

                  <div className="style-guide__container-effects">
                    <p>Raised</p>
                    <div className="style-guide__container-boxes">
                      <div className="style-guide__effects-box style-guide__effects-box--1"></div>
                      <div className="style-guide__effects-box style-guide__effects-box--2"></div>
                      <div className="style-guide__effects-box style-guide__effects-box--3"></div>
                    </div>
                  </div>

                  <div className="style-guide__container-effects">
                    <p>Overlay</p>
                    <div className="style-guide__container-boxes">
                      <div className="style-guide__effects-box style-guide__effects-box--4"></div>
                      <div className="style-guide__effects-box style-guide__effects-box--5"></div>                   
                    </div>
                  </div>

                </div>
              </div>





            </div>


            <div className="style-guide__radios">
              <div className="style-guide__intro-radios">
                <h2>Radios</h2>
                <p className="body-l--emphasis-high">I use three radius values  to create a consistent 
                  and simple visual language across the interface.
                </p>
              </div>


              <div className="style-guide__main-container-radios">
                <div className="style-guide__radios-content">
                    <div className="style-guide__texts-radios style-guide__texts-radios--8px">
                      <p>Small</p>
                      <p>8px</p>
                    </div>

                    <div className="style-guide__texts-radios style-guide__texts-radios--16px">
                      <p>Medium</p>
                      <p>16px</p>
                    </div>

                    <div className="style-guide__texts-radios style-guide__texts-radios--32px">
                      <p>Large</p>
                      <p>32px</p>
                    </div>              
                </div>
              </div>

         

            </div>

            
          </div>


        </section>
      
    </div>
  );
}

export default StyleGuide;
