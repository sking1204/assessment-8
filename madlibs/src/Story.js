function Story ({setShowStory, setStory, story}) {
    const refresh = () =>{
        setShowStory(false);
        setStory([]);
    }

  


    return(
        <div>
            <p>There was a {story.color} {story.noun} who loved a {story.adjective} {story.noun2} </p>
        <button onClick={refresh}>Click to create another story!</button>
        </div>
        
    )

    
}


export default Story;