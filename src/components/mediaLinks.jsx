import {  Link } from "react-router-dom";
const Media=()=>{
    return(
        <>
            <div className="w-[87vmin] h-32 flex gap-8 mx-auto">
                <Link to={"https://github.com/shivam07sharma"}><div className="h-10 rounded-xl w-10 overflow-hidden border border-white"><img src="images/githubicon.png" alt="" /></div></Link>
                <Link to={"https://www.linkedin.com/in/shivamsharma0701"}><div className="h-10 rounded-xl w-10 overflow-hidden border border-white"><img src="images/linkedinicon.png" alt="" /></div></Link>
                <Link to={"https://www.instagram.com/sh.ivem/?utm_source=ig_web_button_share_sheet"}><div className="h-10 rounded-xl w-10 overflow-hidden border border-white"><img src="images/instaicon.png" alt="" /></div></Link>

                <Link to={"/ContactMe"}><div className="h-10 rounded-xl w-10 overflow-hidden border border-white"><img src="images/xicon.png" alt="" /></div></Link>

            </div>
        </>
    )
}
export default Media;