import React from "react";
import { MDBFooter} from 'mdb-react-ui-kit';

export default function Footer() {
    return(
    <MDBFooter className='text-center text-lg-start text-muted fixed-bottom'>
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
    )
}