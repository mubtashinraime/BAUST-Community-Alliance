import { useEffect, useState } from 'react';
import '../Components/HomePage.css'
import { api } from '../Services/api';
import video from '../Videos/Baust-video.mp4'
import ContentCard from './ContentCard';

interface PostItem {
    id: number;
    heading: string;
    content_about: string;
    image: string;
    dateTime: string;
};
function HomePage() {

    const [stories, setStories] = useState<PostItem[]>([]);
    const [blogs, setBlogs] = useState<PostItem[]>([]);
    const [publications, setPublications] = useState<PostItem[]>([]);
    useEffect(() => {
        api.get("content/stories").then(res => setStories(res.data));
        api.get("content/blogs").then(res => setBlogs(res.data));
        api.get("content/publications").then(res => setPublications(res.data));
    }, []);
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

                            <div className="col-md-4">
                                <h4 className='home-h4-blue'>Stories</h4>
                                {stories.slice(0, 3).map((story) => (
                                    <ContentCard key={story.id} item={story} />
                                ))}
                            </div>

                            <div className="col-md-4">
                                <h4 className='home-h4-blue'>Blogs</h4>
                                {blogs.slice(0, 3).map((blog) => (
                                    <ContentCard key={blog.id} item={blog} />
                                ))}
                            </div>

                            <div className="col-md-4">
                                <h4 className='home-h4-blue'>Publications</h4>
                                {publications.slice(0, 3).map((publication) => (
                                    <ContentCard key={publication.id} item={publication} />
                                ))}
                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default HomePage