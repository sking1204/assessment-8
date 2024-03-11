import {useState} from 'react';
import MadlibForm from './MadlibForm';
import Story from './Story';
import {v4 as uuid} from 'uuid';


function Madlib () {
     const INITIAL_STATE = [];
     const [story, setStory] = useState(INITIAL_STATE);
     const [showStory, setShowStory] = useState(false);
     const makeStory =(newStory) =>{
        setStory((userinputs)=> [...userinputs, {...newStory, id: uuid()}])
     }

     return (
		<div className='Madlib'>
			<h1>Madlib Container</h1>
			{showStory ? (
				<Story
					setShowStory={setShowStory}
					setStory={setStory}
					story={story[0]}
				/>
			) : (
				<MadlibForm setShowStory={setShowStory} makeStory={makeStory} />
			)}
		</div>
	);
}

export default Madlib;                                    