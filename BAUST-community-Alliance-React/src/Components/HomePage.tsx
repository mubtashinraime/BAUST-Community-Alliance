import '../Components/HomePage.css'
import video from '../Videos/Baust-video.mp4'
function HomePage() {
    return (
        <>
            <div id='home-div1' className='d-flex justify-content-between' >
                <h1 >
                    <p id='home-first-p1'>We are the voice of
                        <strong><span id='baust-bold'><br /> BAUST-Community-Alliance.</span></strong>
                    </p>
                    <p id='home-first-p2'>"Our member universities specialise in working with employers to
                        empower students with career-ready skills and develop the knowledge
                        industries need to innovate and thrive."
                    </p>

                    <p id='home-first-p3'>
                        "University Alliance provides expertise to policy makers and supports
                        our members and their communities to thrive through collaboration."
                    </p>
                </h1>

                <video controls autoPlay loop src={video}>Baust Academy video</video>
            </div>
            <div id='home-div2'>
                <div id='home-div3'>
                    <h2>Latest from the Alliance</h2><br />
                    <div className="container text-left">
                        <div className="row align-items-start">
                            <div className="col">
                                <h4 className='home-h4-blue'>Stories</h4>
                                <section id='home-section1'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, rerum!</p>
                                </section>
                                <section id='home-section2'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, rerum!</p>
                                </section>
                                <section id='home-section3'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, rerum!</p>
                                </section>
                            </div>
                            <div className="col">
                                <h4 className='home-h4-blue'>Blogs</h4>
                                <section id='home-section4'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, rerum!</p>
                                </section>
                                <section id='home-section5'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, rerum!</p>
                                </section>
                                <section id='home-section6'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, rerum!</p>
                                </section>
                            </div>
                            <div className="col">
                                <h4 className='home-h4-blue'>Publications</h4>
                                <section id='home-section7'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, rerum!</p>
                                </section>
                                <section id='home-section8'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, rerum!</p>
                                </section>
                                <section id='home-section9'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, rerum!</p>
                                </section>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default HomePage