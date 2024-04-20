import React from "react";
import axios from  "axios";
import {useCookies} from "react-cookie";
import { useSearchParams } from "react-router-dom";

export default function QueueCard(){
    const baseUrl = "https://jsonplaceholder.typicode.com/posts/1";
    const[post,setPost]=React.useState(null);
    const [cookies,setCookie,removeCookie] = useCookies(["queueCard"]);
    const [searchParams, setSearchParams]=useSearchParams();
    // React.useEffect(()=>{
    //     axios.get(baseUrl).then((response)=>{
    //         setPost(response.data);
    //     })
    // }, [])
    async function createPost() {
        const baseUrl = "http://127.0.0.1:12345";
    await axios.post(baseUrl + "/enqueue", { place_id: searchParams.get("place_id")}).then((response) => {
      setCookie("queueCard",{
        "new_queue_no":response.data.new_queue_no,
         "current_calling_queue_no":response.data.current_calling_queue_no,
          "remaining_queues":response.data.remaining_queues},{path:"/queue-card"})
    });
  }
    if (!cookies.queueCard) return (
    <div className="App">
            
    <button onClick= {createPost}> Text</button>

</div>)
    

    return (
        <div className="App">
            
    
            <p>
            Queue No.{cookies?.queueCard.new_queue_no}
            Queues left:{cookies?.queueCard.remaining_queues}
            </p>
        </div>
    )
}