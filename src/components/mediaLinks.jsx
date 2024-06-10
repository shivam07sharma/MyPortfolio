import {  Link } from "react-router-dom";
const Media=()=>{
    return(
        <>
            <div className="w-[87vmin] h-32 flex gap-8 mx-auto">
                <Link to={"/About"}><div className="h-10 rounded-xl w-10 overflow-hidden border border-white"><img src="src\components\image1.jpg" alt="" /></div></Link>
                <Link to={"/About"}><div className="h-10 rounded-xl w-10 overflow-hidden border border-white"><img src="src\components\image1.jpg" alt="" /></div></Link>
                <Link to={"/About"}><div className="h-10 rounded-xl w-10 overflow-hidden border border-white"><img src="src\components\image1.jpg" alt="" /></div></Link>

                <Link to={"/About"}><div className="h-10 rounded-xl w-10 overflow-hidden border border-white"><img src="src\components\image1.jpg" alt="" /></div></Link>

            </div>
        </>
    )
}
export default Media;