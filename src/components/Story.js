import React, { useState, useEffect, useRef } from 'react';
import bgImage from '../assets/bg-story.jpg'; // Assuming the background image is stored in assets folder
import './story.css';

const Story = ({ mode }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isTypingAnimationComplete, setIsTypingAnimationComplete] = useState(false);
  const storiesContainerRef = useRef(null);

  const stories = [
    { id: 1, text: "My fascination with computers began at a tender age of 8, when I first witnessed my elder brother coding. The lines of code flowing on the screen mesmerized me, and I knew I had found my passion." },
    { id: 2, text: "As I delved deeper into the world of computing, every piece of code felt like a secret language, akin to hacking into the mysteries of technology. It was exhilarating to wield this power and create something out of nothing." },
    { id: 3, text: "My first significant project was building a calculator using C++. The thrill of seeing the program execute calculations flawlessly fueled my desire to explore more complex programming challenges." },
    { id: 4, text: "From there, my journey with computers evolved into a quest for knowledge and innovation. I immersed myself in learning new languages, exploring algorithms, and tackling real-world problems through software development." },
    { id: 5, text: "Each line of code became a story waiting to unfold, each bug a puzzle to solve. With every project completed, my skills grew, and so did my passion for creating impactful technology solutions." },
    { id: 6, text: "Today, as I reflect on my journey, I am grateful for the early inspiration that set me on this path. It has shaped not only my career but also my perspective on what is possible with dedication, creativity, and a love for computers." }
    // Feel free to add more stories or expand further as needed
  ];
  

  useEffect(() => {
    setIsTypingAnimationComplete(false);
    
    const timeout = setTimeout(() => {
      setIsTypingAnimationComplete(true);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [currentStoryIndex]);

  const handleWheel = (event) => {
    const delta = Math.sign(event.deltaY);

    if (delta > 0 && currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    } else if (delta < 0 && currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    }

    // Adjust the scrollLeft of the container to scroll horizontally
    if (storiesContainerRef.current) {
      storiesContainerRef.current.scrollLeft += event.deltaY;
    }

    // Prevent default to avoid vertical scrolling
    event.preventDefault();
  };

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center relative overflow-hidden ${mode === 'dark' ? 'bg-slate-800 text-white' : 'bg-white text-gray-800'}`} onWheel={handleWheel}>
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={bgImage} alt="Background" className="w-full h-full object-cover opacity-30" />
        <div className={`w-full h-full ${mode === 'dark' ? 'bg-slate-900' : 'bg-white'} opacity-40 absolute inset-0`}></div>
      </div>
      
      {/* Stories Content */}
      <div className={`z-10 relative text-center ${mode === 'dark' ? 'text-white' : 'text-gray-800'}`}>
        <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${isTypingAnimationComplete ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 1s ease-out' }}>Stories of My Journey</h1>
        <div ref={storiesContainerRef} className="max-w-full h-full overflow-x-auto scrollbar-hidden flex">
          {stories.map((story, index) => (
            <div key={story.id} className={` flex-none w-full h-full`}>
              <p className={`typewriter ${currentStoryIndex === index && isTypingAnimationComplete ? 'typewriter-animation' : ''}text-lg leading-relaxed mx-auto max-w-3xl mt-8 bg-opacity-40 backdrop-blur-l`}>
                {story.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;
