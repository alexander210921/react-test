import React, {useState} from 'react'
const SocialMediaLikes=()=>{
    let [video={title:'Medidor de likes', likes:0},setVideo] = useState();
    function addClics() {
        // if(video.likes ==5 ) return null
        setVideo( ()=>{
            return(
                video = {
                    ...video,
                    likes:video.likes+1
                 }
            )                        
        } );
    }
    return(
        <>
        <hr />
        <h1>{video.title}</h1>
        <button onClick={addClics}>
            Likes {`(${video.likes})`}           
        </button>
        </>
    )
}
export default SocialMediaLikes;