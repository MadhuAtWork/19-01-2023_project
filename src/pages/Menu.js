import * as React from 'react';
import { useState, useEffect } from "react";
import SvgIcon from '@mui/material/SvgIcon';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLock } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

function Mymenu(props) {
    const [usertdata, setuserdata] = useState(false);

    const [navbar, setnavbar] = useState(false);
    const [Menudata, setMenudata] = useState([]);
    const [data, setdata] = useState([]);


    const onhandleOperationtray = (e) => {
        // alert(index)
        // setuserdata(dropdown);
        setuserdata(!usertdata);
        // setuserdata(index);
        // if (index === 0){

        // }
        // if (index === 3)
        // setdatadropdown(!usertdata1);
        // if (index === 8)
        // setdatadropdown(!usertdata2);
    }

    const onhandlechange = () => {
        setnavbar(!navbar);
    }

    const location = useLocation();
    const mainmenuList = location.state;

    useEffect(() => {
        console.log(mainmenuList);
        setMenudata(mainmenuList.menu)
    }, []);

    return (
        <>
            <Header userdata={mainmenuList} />
            <div className="main">
                <div className="menu">
                    <div className={navbar ? "sidenav" : "unset_sidenav"}>
                        <div className="menuIcon" onClick={onhandlechange}><FontAwesomeIcon icon={faBars} /></div>
                        {navbar ?
                            <>                          
                                  <div>
                                    {
                                        Menudata.map((value, index) => {
                                            return (
                                                <div key={index}>
                                                    {
                                                        data == value.menuId % 100 != 0 ?
                                                            <div className="holder" onClick={onhandleOperationtray}><HomeIcon className="me-3" /><span>{value.menuDesc}</span></div>
                                                            :
                                                            <div className={usertdata ? "subMenu" : "subMenuclose"}>
                                                                <Link to={value.screenAction} state={mainmenuList} onClick={onhandlechange}>{value.menuDesc}</Link>
                                                            </div>
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </>
                            :
                             <> <div className="holder"></div>
                                <div className="holder"> <HomeIcon /></div>
                                <div className="holder"> <HomeIcon /></div>
                                <div className="holder"> <HomeIcon /></div>
                                <div className="holder"> <HomeIcon /></div>
                            </>}  </div>
                </div>
                <div className="section">
                    <Outlet>
                    </Outlet>
                </div>
            </div>
        </>
    )
}
export default Mymenu; 