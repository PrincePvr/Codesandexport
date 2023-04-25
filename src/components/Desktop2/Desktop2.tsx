import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Desktop2.module.css';
import { Group1Icon } from './Group1Icon.js';
import { Group3Icon } from './Group3Icon.js';
import { Group5Icon } from './Group5Icon.js';
import { Vector1Icon } from './Vector1Icon.js';
import { Vector2Icon } from './Vector2Icon.js';
import { Vector3Icon } from './Vector3Icon.js';
import { Vector4Icon } from './Vector4Icon.js';
import { Vector8Icon } from './Vector8Icon.js';
import { Vector9Icon } from './Vector9Icon.js';
import { Vector10Icon2 } from './Vector10Icon2.js';
import { Vector10Icon } from './Vector10Icon.js';
import { Vector11Icon } from './Vector11Icon.js';
import { Vector12Icon } from './Vector12Icon.js';
import { Vector14Icon } from './Vector14Icon.js';
import { Vector16Icon } from './Vector16Icon.js';
import { Vector17Icon } from './Vector17Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 6:191 */
export const Desktop2: FC<Props> = memo(function Desktop2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vector2}>
        <Vector2Icon className={classes.icon} />
      </div>
      <div className={classes.vector1}>
        <Vector1Icon className={classes.icon2} />
      </div>
      <div className={classes.vector4}>
        <Vector4Icon className={classes.icon3} />
      </div>
      <div className={classes.vector3}>
        <Vector3Icon className={classes.icon4} />
      </div>
      <div className={classes.image1}></div>
      <div className={classes.frame1}></div>
      <div className={classes.vector12}>
        <Vector12Icon className={classes.icon5} />
      </div>
      <div className={classes.vector8}>
        <Vector8Icon className={classes.icon6} />
      </div>
      <div className={classes.image2}></div>
      <div className={classes.vector14}>
        <Vector14Icon className={classes.icon7} />
      </div>
      <div className={classes.vector17}>
        <Vector17Icon className={classes.icon8} />
      </div>
      <div className={classes.image3}></div>
      <div className={classes.vector16}>
        <Vector16Icon className={classes.icon9} />
      </div>
      <div className={classes.vector10}>
        <Vector10Icon className={classes.icon10} />
      </div>
      <div className={classes.vector102}>
        <Vector10Icon2 className={classes.icon11} />
      </div>
      <div className={classes.vector9}>
        <Vector9Icon className={classes.icon12} />
      </div>
      <div className={classes.vector11}>
        <Vector11Icon className={classes.icon13} />
      </div>
      <div className={classes.priceStartsFrom40KAED}>
        <div className={classes.textBlock}>Price Starts </div>
        <div className={classes.textBlock2}>from</div>
        <div className={classes.textBlock3}>40K AED</div>
      </div>
      <div className={classes.hexagons}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>H</span>
          <span className={classes.label2}>exagons</span>
        </p>
      </div>
      <div className={classes.real}>Real</div>
      <div className={classes.findTheBestHomesNearYou}>
        <div className={classes.textBlock4}>Find the</div>
        <div className={classes.textBlock5}>
          <p className={classes.labelWrapper2}>
            <span className={classes.label3}>Best Homes</span>
          </p>
        </div>
        <div className={classes.textBlock6}>Near you</div>
      </div>
      <div className={classes.estate}>Estate</div>
      <div className={classes.home}>Home</div>
      <div className={classes.findYourDreamHome}>Find your Dream Home</div>
      <div className={classes.group1}>
        <Group1Icon className={classes.icon14} />
      </div>
      <div className={classes.group3}>
        <Group3Icon className={classes.icon15} />
      </div>
      <div className={classes.group5}>
        <Group5Icon className={classes.icon16} />
      </div>
      <div className={classes.rectangle1}></div>
      <div className={classes.rectangle4}></div>
      <div className={classes.readMore}>Read More</div>
      <div className={classes.readMore2}>Read More</div>
      <div className={classes.HomeIsTheStartingPlaceOfLoveHo}>
        “Home is the starting place of love, hope and dreams.” “The magic thing about home is that it feels good to
        leave, and it feels even better to come back.” “Home is where love resides, memories are created, friends always
        belong, and laughter never ends.
      </div>
      <div className={classes.HomeIsTheStartingPlaceOfLoveHo2}>
        <div className={classes.textBlock7}>“Home is the starting place of love, hope and dreams.” </div>
        <div className={classes.textBlock8}>
          “The magic thing about home is that it feels good to leave, and it feels even better to come back.”{' '}
        </div>
        <div className={classes.textBlock9}>
          “Home is where love resides, memories are created, friends always belong, and laughter never ends.
        </div>
      </div>
      <div className={classes.houses}>Houses</div>
      <div className={classes.agents}>Agents</div>
      <div className={classes.contact}>Contact</div>
      <div className={classes.fEATUREDON}>FEATURED ON</div>
      <div className={classes.rectangle3}></div>
      <div className={classes.tIMESNOW}>
        <p className={classes.labelWrapper3}>
          <span className={classes.label4}>TIMES</span>
          <span className={classes.label5}>NOW</span>
        </p>
      </div>
      <div className={classes.aroundTheGLOBES}>
        <p className={classes.labelWrapper4}>
          <span className={classes.label6}>around the</span>
          <span className={classes.label7}> GLOBES</span>
        </p>
      </div>
      <div className={classes.sUCCESSBusinessPaper}>
        <p className={classes.labelWrapper5}>
          <span className={classes.label8}>SUCCESS</span>
          <span className={classes.label9}> business paper</span>
        </p>
      </div>
      <div className={classes.cNNMagazine}>
        <p className={classes.labelWrapper6}>
          <span className={classes.label10}>CNN</span>
          <span className={classes.label11}> Magazine</span>
        </p>
      </div>
    </div>
  );
});
