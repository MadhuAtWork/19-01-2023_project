import * as React from 'react';
import { useState, useEffect } from "react";
import SvgIcon from '@mui/material/SvgIcon';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLock } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import ApplicationDetails from './ApplicationDetails';
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
    const [usertdata1, setuserdata1] = useState(false);
    const [usertdata2, setuserdata2] = useState(false);
    const [navbar, setnavbar] = useState(false);
    const [Menudata, setMenudata] = useState([]);
    const [data, setdata] = useState([]);
    const [datadropdown, setdatadropdown] = useState();
    const Navigate = useNavigate();


    const onhandleOperationtray = (e) => {
        // setuserdata(dropdown);
        setuserdata(!usertdata);
        // setuserdata(index);
        // if (index === 0)
        //     setdatadropdown(!usertdata);
        // if (index === 3)
        // setdatadropdown(!usertdata1);
        // if (index === 3)
        // setdatadropdown(!usertdata2);
    }
// useEffect(()=>{
//     window.addEventListener
// })
    const onhandleMeetingCenter = () => {
        setuserdata1(!usertdata1);
    }

    const onhandleReport = () => {
        setuserdata2(!usertdata2);
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
    console.log(Menudata);

    const onHandleMenuMytask = () => {
        Navigate("/index/MyTask", { state: mainmenuList })
        setnavbar(!navbar);
    }
    const onHandleAssignTask = () => {
        Navigate("/index/assignTask", { state: mainmenuList })
    }

    const onhandleAddMc = () => {
        Navigate("/index/AddMeetingMaster", { state: mainmenuList })
    }
    const onHandleCrecUpadte = () => {
        Navigate("/index/CRECBulkUpadate", { state: mainmenuList })
    }
    const OnHandleMigrate = () => {
        Navigate("/index/Migrate", { state: mainmenuList })
    }
    const onHandleNFD = () => {
        Navigate("/index/Migrate", { state: mainmenuList })
    }
   
const sideMenu = () =>{
    return(
        <div>
            {
               Menudata.map((value,index)=>{
                return(
                    <div>
                        {
                         data == value.menuId % 100 == 0 ? <div></div> :""
                        }
                    </div>
                )
               }) 
            }
        </div>
    )
}
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
                                                        data == value.menuId % 100 == 0 ?
                                                            <div>
                                                             {usertdata  ?
                                                                    <>
                                                                         {/* <div className="subMenu">
                                                                            <div className="assignTask">                                                                           
                                                                                <Link to="/index/assignTask" state={mainmenuList}>{value.menuDesc}</Link>
                                                                            </div>
                                                                        </div>  */}
                                                                             <AccordionDetails className="subMenu">
                                                                     <Link to="/index/assignTask" state={mainmenuList} >{value.menuDesc}</Link>
                                                            </AccordionDetails> 
                                                                    </>
                                                                     :
                                                                    ""}     
                                                                                                                                  
                                                            </div>                                                       
                                                            :         
                                                            <Accordion>
                                                            <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon />}
                                                                aria-controls="panel1a-content"
                                                                id="panel1a-header"
                                                                onClick={onhandleOperationtray}
                                                                className={value.menuDesc}
                                                            >
                                                                <Typography><HomeIcon className="me-3" />{value.menuDesc}</Typography>
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                            <Typography>{data.true}</Typography>
                                        </AccordionDetails>
                                                        </Accordion>                                          
                                                            // <div className={value.screenAction} onClick={onhandleOperationtray(value.screenAction)}><HomeIcon className="me-3" />
                                                            //     <span>{value.menuDesc}
                                                            //     </span>
                                                            // </div>
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>Accordion 1</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>Lorem</Typography>
                                            <Typography>Lorem</Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>

                                {/* <div>
                                <div className="holder" onClick={onhandleOperationtray}><HomeIcon className="me-3" />{Menudata[0].menuDesc}</div>
                                {usertdata ?
                                    <>
                                        <div className="subMenu">
                                            <div className="assignTask" onClick={onHandleAssignTask}> <p>{Menudata[1].menuDesc}</p></div>
                                            <div className="Mytask" onClick={onHandleMenuMytask}><p>{Menudata[2].menuDesc}</p> </div>
                                        </div>
                                    </>
                                    :
                                    ""}
                            </div>
                            <div>
                                <div className="holder" onClick={onhandleMeetingCenter}><HomeIcon className="me-3" />{Menudata[3].menuDesc}</div>
                                {usertdata1 ?
                                    <>
                                        <div className="subMenu">
                                            <div className="addMc" onClick={onhandleAddMc}><p>{Menudata[4].menuDesc}</p></div>
                                            <div className="Crecupdate" onClick={onHandleCrecUpadte}> <p>{Menudata[5].menuDesc}</p> </div>
                                            <div className="MigrateMc" onClick={OnHandleMigrate}> <p>{Menudata[6].menuDesc}</p> </div>
                                            <div className="nfd" onClick={onHandleNFD}><p>{Menudata[7].menuDesc}</p></div>
                                        </div>
                                    </>
                                    :
                                    ""}
                            </div>
                            <div>
                                <div className="holder" onClick={onhandleReport}><HomeIcon className="me-3" />{Menudata[8].menuDesc}</div>
                                {usertdata2 ?
                                    <>
                                          {
                                Menudata.map((value,index)=>{
                                    <div key={index}><p>{value.menuDesc}</p></div>
                                })
                            }
                                    </>
                                    :
                                    ""}
                            </div> */}
                            </>
                            : <> <div className="holder"></div>
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