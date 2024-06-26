import React from "react";
import { MDBFooter} from 'mdb-react-ui-kit';
import Icon from '@mdi/react';
import { mdiLinkedin } from '@mdi/js';
import { mdiGithub } from "@mdi/js";

export default function Footer() {
    return(
    <MDBFooter className='homepage-footer text-center text-lg-start text-muted fixed-bottom'>
      <div className='text-center p-3' >
        <a href="https://www.linkedin.com/in/giselejfox/" target="_blank" rel="noreferrer" >
          <Icon 
            path={mdiLinkedin}
            title="LikedIn"
            size={1.5}
            horizontal
            vertical
            rotate={180}
            color="black"
          />
        </a>
        <a href="https://github.com/giselejfox" target="_blank" rel="noreferrer" >
          <Icon 
            path={mdiGithub}
            title="Github"
            size={1.5}
            horizontal
            vertical
            rotate={180}
            color="black"
          />
        </a>
      </div>
    </MDBFooter>
    )
}