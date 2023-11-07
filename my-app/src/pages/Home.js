import '../App.css';
import React from 'react';
import redDecor from '../assets/fonts/redDecor.png';
import bird from '../assets/fonts/bird.png';


function Home() {
    const background = true;
    return (
        <div className="App">
            <div id="headerDiv">
                <p className="headerText">
                    Liberation Atlas
                </p>
                <p className="headerTwoText">Data Justice for Migrant Massage Workers</p>
                <div id="headerLine"></div>
                <p className='headerThreeText'> Brown University Center For Slavery & Justice X Red Canary Song</p>
                <p className='headerFourText'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
            <img id='redD' src={redDecor} />
            <img id='bird' src={bird} />

        </div>)

}
export default Home;
