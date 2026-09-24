import "@/pages/projects/MoodboardGenerator/moodboard-generator.scss";

import UxDecisionCard from "@/components/cards/UxDecisionCard/UxDecisionCard.jsx";
import { uxDecisionsData } from "./data/uiDecisionsData";


import userFlowImg from "@/assets/images/projects/moodboard-generator/user-flow.png";
import finalUiImg from "@/assets/images/projects/moodboard-generator/final-ui.png";
import initialflow from "@/assets/images/projects/moodboard-generator/initial-flow.png";


function MoodboardGenerator() {
  return (
    <div className="grid">
     
        <div className="moodboard-layout">

          <h1>UX case study</h1>

          <section className="overview">

            <h2>Overview</h2>

            <p>
              The Moodboard Tool is a guided digital experience designed to help clients define 
              their design preferences in a structured and intuitive way. The project originated 
              from recurring communication challenges observed during commercial interior design 
              projects.
            </p>

            <p>
              By transforming a traditionally ambiguous briefing process into a step-by-step
              interactive system, the tool aims to reduce misunderstandings, align expectations 
              early, and improve efficiency during the initial design phase.
            </p>

            <ul className="overview-meta ">
              <li><strong>Role:</strong> UX Designer & Front-End Developer</li>
              <li><strong>Scope:</strong> Research, Interaction Design, UI Design, Front-End Implementation</li>
              <li><strong>Context:</strong> Commercial Interior Design</li>
              <li><strong>Tools:</strong> Figma, JavaScript, Sass</li>
            </ul>
          </section>

          <section className="problem-statement">
            <div>
              <h2>Problem statement</h2>
            </div>

            <div>
              <p>
                While working as a commercial space designer, I repeatedly encountered the same challenge: 
                project briefs were often incomplete, and clients rarely provided visual references to guide the process.
              </p>

              <p>
                This was not due to a lack of interest, but rather the complexity of design decision-making. 
                Design is not just about selecting a “style”; each direction represents a cohesive system of 
                colors, materials, finishes, and furniture. Understanding how these elements interact requires 
                time, exposure, and structured guidance.
              </p>

              <p>
                As a result, the early design phase became inefficient. Misaligned expectations led to 
                additional revisions, delays, and unnecessary friction in communication.
              </p>

              <p>
                There was an opportunity to create a structured, step-by-step system that simplifies 
                decision-making and makes the design selection process more accessible for clients.
              </p>
            </div>
          </section>

          <section className="user-context">

            <div>
              <h2>User context</h2>
            </div>

            <div>

              <p>
                The tool is designed for clients working with interior designers
                who need a structured way to group and select their visual preferences
                before the design process advances.
              </p>

              <p>
                Clients often struggle to clearly communicate what they like,
                which can lead to misunderstandings, unnecessary revisions,
                and duplicated work for the designer.
              </p>

              <p>
                By allowing users to visually organize styles, colors, and materials
                in a guided and mobile-friendly interface,
                the tool aims to reduce ambiguity and improve alignment
                between client and designer from the early stages of the project.
              </p>

            </div>

          </section>



          <section className="goals-constraints">

            <div>
              <h2>Goals & constraints</h2>
            </div>

            <div>

              <p>
                The main objective was to create a structured system of predefined design
                options that are logically connected. Instead of asking clients to define
                everything at once, the experience guides them through a step-by-step
                selection process.
              </p>

              <p>
                Users begin by selecting a design style. Based on that choice, they are
                presented with curated options aligned to that style, including specific
                color palettes, materials, and furniture typologies.
              </p>

              <p>
                The system was designed to be:
              </p>

              <ul>
                <li>Easy to understand</li>
                <li>Fast to complete</li>
                <li>Reduces cognitive overload</li>
                <li>Ensures visual and conceptual consistency</li>
              </ul>

              <p>
                To maintain quality and consistency within the available timeframe, the
                initial version focused on three design styles. Each required careful
                curation to ensure that all associated elements — colors, materials, and
                furniture — worked cohesively as a unified system.
              </p>

            </div>

          </section>


          <section className="initial-concept">
            <div className="header">
              <h2>Initial concept</h2>
              <p className="body-l--emphasis-high">Early user flow concept defining the initial interaction model</p>
            </div>
            <div className="diagram-surface">
              <img
                className="diagram-image"
                src={initialflow}
                alt="initial flow"
              />
            </div>
          </section>

          <section className="usability-issues">
            <div className="header">
              <h2>Usability issues identified</h2>
              <p className="body-l--emphasis-high">
                During the first iteration of the Moodboard tool, several usability frictions were identified through self-testing and mobile-first evaluation.
              </p>
            </div>
            <div className="content">
              <div className="content__items">
                <p className="font-bold font-display">Gesture conflict on mobile</p>
                <p>
                  Vertical scrolling within selection areas caused accidental page refresh on mobile devices, introducing friction and risking progress loss during the selection process.
                </p>
              </div>
              <div className="content__items">
                <p className="font-bold font-display">Forced confirmation steps</p>
                <p>
                  Requiring users to select an option to enable the “Next” button added unnecessary cognitive load and slowed down the overall flow.
                </p>
              </div>
              <div className="content__items">
                <p className="font-bold font-display">Summary embedded in the selection flow</p>
                <p>
                  Placing the summary as part of the selection steps blurred the mental model between making choices and reviewing decisions.
                </p>
              </div>
              <div className="content__items">
                <p className="font-bold font-display">Inconsistent step layouts</p>
                <p>
                  Different visual layouts across selection steps increased decision effort and reduced pattern recognition throughout the experience.
                </p>
              </div>
              <div className="content__items">
                <p className="font-bold font-display">Limited overview in the summary</p>
                <p>
                  The summary view required vertical scrolling to access all selected options, reducing clarity and immediate control.
                </p>
              </div>
              <div className="content__items">
                <p className="font-bold font-display">Unclear back navigation</p>
                <p>
                  The back arrow icon was not visually integrated into the main navigation, causing users to actively search for a way to return to previous steps.
                </p>
              </div>
            </div>

            <p className="body-l--emphasis-high">These insights informed a set of key UX decisions that shaped the final experience.</p>  
          </section>




          <section className="ux-decisions">
            <div className="header">
              <h2>Design principles & UX decisions</h2>
              <p className="body-l--emphasis-high">Based on the identified usability issues, the following design principles and UX decisions guided the evolution of the experience.</p>
            </div>
           
            <div className="ux-decisions__list">
              {uxDecisionsData.map((decision, index) => (
                <UxDecisionCard
                  key={ index }
                  index={index + 1}
                  title={decision.title}
                  rationale={decision.rationale}                
                />
              ))}
            </div>
          </section>

          <section className="user-flow">
            <div className="header">
              <h2>User flow</h2>
              <p className="body-l--emphasis-high">Low-fidelity wireframe focused on interaction and decision-making </p>
            </div>
            <div className="diagram-surface">
              <img
                className="diagram-image"
                src={userFlowImg}
                alt="User flow"
              />
            </div>
          </section>

          <section className="final-ui">
            <div className="header">
              <h2>Final UI</h2>
              <p className="body-l--emphasis-high">Final UI reflecting the defined user flow and interaction decisions. The interface translates the step-based flow, direct selection logic, and progress feedback into a clear and functional experience.</p>  
            </div>
            <div className="diagram-surface">
              <img
                className="diagram-image"
                src={finalUiImg}
                alt="Final UI"
              />
            </div>          
          </section>

          <section className="key-learning">
            <div className="header">
              <h2>Key learning</h2>
              <p className="body-l--emphasis-high">The key learnings below capture the main UX insights gained from testing, iteration, and design refinement.</p>
            </div>
            <div className="content">
              <div className="content__items">
                <p className="font-bold font-display">Removing friction can be more effective than adding guidance</p>
                <p>Eliminating the “Next” button and advancing users through direct selection proved to be more intuitive than explicit confirmation steps.</p>
              </div>
              <div className="content__items">
                <p className="font-bold font-display">Consistency across steps reduces cognitive load</p>
                <p>Reusing the same interaction patterns (cards, sliders, layouts) helped users build confidence and move faster through decisions.</p>
              </div>
              <div className="content__items">
                <p className="font-bold font-display">Mobile-first testing reveals critical usability issues early</p>
                <p>Gesture conflicts and navigation friction were only evident when testing the flow on mobile devices.</p>
              </div>
                <div className="content__items">
                <p className="font-bold font-display">Separating decision-making from review improves clarity</p>
                <p>Isolating the summary step reinforced a clear mental model between choosing and evaluating, improving user control.</p>
              </div>
                <div className="content__items">
                <p className="font-bold font-display">Limited overview in the summary</p>
                <p>The summary view required vertical scrolling to access all selected options, reducing clarity and immediate control.</p>
              </div>
  
            </div>
          </section>

          <section className="future-opportunities">

            <div>
              <h2>Future opportunities</h2>
            </div>

            <div>

              <p>
                Future iterations could expand the system beyond guided selection
                into a more integrated design support platform.
              </p>

              <p>
                The library could grow to include a broader range of styles
                and cross-style combinations,
                allowing users to explore hybrid directions
                while maintaining visual coherence.
              </p>

              <p>
                By connecting predefined selections with supplier databases,
                the tool could evolve into a bridge between inspiration and execution —
                supporting faster quoting and production planning.
              </p>

              <p>
                Ultimately, the system could transform from a preference-selection tool
                into a structured decision framework
                that streamlines the entire early design phase.
              </p>

            </div>

          </section>



       
       
        </div>
      
    
    </div>
  );
}


export default MoodboardGenerator;


