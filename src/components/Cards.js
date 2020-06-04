import React from 'react';
const Cards = () => {
    return (
        <div>
            <div className="card">
                <div className="container">

                    <div className="card1" style={{ paddingTop: "90px" }}>
                        <h4 className="text-center" style={{ fontWeight: "bold" }}>Why Choose Coding Sastra</h4>
                        <p className="text-center">Ignites passion to learn and make you successful.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4 wow fadeInLeft text-center mt-4 ">
                            <div className="box1  text-center">
                            <img src="images/t2.jfif" width="200px" height="100px" style={{borderRadius:"10px"}} />
                                <h4 className="s1" style={{ color: " rgb(35, 156, 35)" }}>Technology Workshop</h4>
                                <p>
                                    Deva conducting several workshops on
                                    latest technologies in our locations and colleges near you.
                                    Follow our facebook page or download our mobile app to get
                                     notified of meetups and workshops. </p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center mt-4 ">
                            <div className="box2">
                                <img src="images/online.webp" width="200px" height="100px" style={{borderRadius:"10px"}}/>
                                <h4 className="s2" style={{ color: " rgb(35, 156, 35)" }}>Learn Courses Online</h4>
                                <p className="text-center">Hybrid training on latest technologies from convenience of your
                                home without loosing
                                classNameroom experience for practical &
                                project session in classNameroom near you.</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center mt-4">
                            <div className="box3">
                                <img src="images/training.webp" width="200px" height="100px" style={{borderRadius:"10px"}}/>
                                <h4 className="s3" style={{ color: " rgb(35, 156, 35)" }}>World ClassName Training / Dedicated Instructors</h4>
                                <p>Coding Sastra offers world className training with
                                dedicated experienced instructors in latest technologies.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            {/*--->Popular Courses   <------*/}
            <div className="popularcourses">
                <div className="container">
                    <h3 className="text-center text-white">Most Popular Courses</h3>
                    <p className="text-center text-white mt-2">If you are going to use a passage
             of Lorem Ipsum, you need to be sure <br /> there isn't anything embarrassing hidden in the middle of text</p>
                </div>
            </div>
            {/*---> About Us */}
            <div className="aboutus">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>About Us</h2>
                            <p>‘CODING SASTRA’ is an expert level ‘skill development center’ started by industry veterans,
                         having a solid 20 year experience in the USA in multiple technologies.</p>
                            <p className="mt-3">It was started as an initiative to provide ‘qualitative’ & ‘affordable’ training to both freshers & working professionals on some of the most cutting edge technologies, which are in utmost demand in the current market. In the process, we’ve been consistently successful in our attempt to, train & place freshers/professionals
                          (like you) in highly rewarding careers with some of the top corporate companies.</p>
                            <h3 className="mt-2">“Believe in your passion, it drives your career.”</h3>
                            <p className="mt-2 text-right">--Varma Bhupatiraju, Founder</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*---> Students */}
            <div className="students-main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 text-white text-center">
                        <img src="images/counter_icon1.png" style={{color:"white",paddingBottom:"10px"}} />
                            <h3>1000+</h3>
                            <p>Students</p>
                        </div>
                        <div className="col-md-3 text-white text-center">
                           <img src="images/counter_icon2.png" style={{color:"white",paddingBottom:"10px"}} />
                            <h3>20+</h3>
                            <p>Courses</p>
                        </div>
                        <div className="col-md-3 text-white">
                        <img src="images/counter_icon3.png" style={{color:"white",paddingBottom:"10px"}} />
                        <h3>20+</h3>
                        <p>Certified Teachers</p>
                        </div>
                        <div className="col-md-3 text-white">
                        <img src="images/counter_icon4.png" style={{color:"white",paddingBottom:"10px"}} />
                        <h3>100+</h3>
                        <p>Award Winning</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Cards;