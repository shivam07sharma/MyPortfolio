import {  Link } from "react-router-dom";
const Media=(props)=>{
    return(
        <>
            <div className={`w-[87vmin] h-32 flex gap-8 mx-auto `+props.width}>
                <Link to={"https://github.com/shivam07sharma"}><div  className="h-10 rounded-xl w-10 overflow-hidden hover:shadow-sm hover:shadow-cyan-200 transition-all hover:scale-110 "><img src="images/githubicon.png" alt="" /></div></Link>
                <Link to={"https://www.linkedin.com/in/shivamsharma0701"}><div className="h-10 rounded-xl w-10 overflow-hidden  hover:shadow-sm hover:shadow-cyan-200 transition-all hover:scale-110"><img src="images/linkedinicon.png" alt="" /></div></Link>
                <Link to={"https://www.instagram.com/sh.ivem/?utm_source=ig_web_button_share_sheet"}><div className="h-10 rounded-xl w-10 overflow-hidden   hover:shadow-sm hover:shadow-cyan-200 transition-all hover:scale-110"><img src="images/instaicon4.png" alt=""/></div></Link>

                <Link to={"https://webblogwriter.netlify.app"}><div className="h-10 rounded-xl w-10 overflow-hidden hover:shadow-sm hover:shadow-cyan-200 transition-all hover:scale-110"><img src="images/blog.jpeg" alt="" /></div></Link>

            </div>
        </>
    )
}
export default Media;