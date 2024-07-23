import React, { useState, useEffect, useRef, useContext } from "react";
import bgImage from "../assets/bg-story.jpg";
import "./story.css";
import { AppContext } from "../context/AppContext";

const Story = ({ mode }) => {
  const { setStoriesCompleted } = useContext(AppContext);

  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isTypingAnimationComplete, setIsTypingAnimationComplete] = useState(false);
  const [isStoriesCompleted, setIsStoriesCompleted] = useState(false);
  const storiesContainerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  const stories = [
    {
      id: 1,
      text: "My fascination with computers began at a tender age of 8, when I first witnessed my elder brother coding. The lines of code flowing on the screen mesmerized me, and I knew I had found my passion. As I delved deeper into the world of computing, every piece of code felt like a secret language, akin to hacking into the mysteries of technology. It was exhilarating to wield this power and create something out of nothing.",
    },
    {
      id: 2,
      text: "My first significant project was building a calculator using C++. The thrill of seeing the program execute calculations flawlessly fueled my desire to explore more complex programming challenges. From there, my journey with computers evolved into a quest for knowledge and innovation. I immersed myself in learning new languages, exploring algorithms, and tackling real-world problems through software development.",
    },
    {
      id: 3,
      text: "Each line of code became a story waiting to unfold, each bug a puzzle to solve. With every project completed, my skills grew, and so did my passion for creating impactful technology solutions. Today, as I reflect on my journey, I am grateful for the early inspiration that set me on this path. It has shaped not only my career but also my perspective on what is possible with dedication, creativity, and a love for computers"
    }
  ];

  useEffect(() => {
    setIsTypingAnimationComplete(false);

    const timeout = setTimeout(() => {
      setIsTypingAnimationComplete(true);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [currentStoryIndex]);

  const handleWheel = (event) => {
    event.preventDefault();

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      const delta = Math.sign(event.deltaY);

      if (delta > 0 && currentStoryIndex < stories.length - 1) {
        setCurrentStoryIndex(currentStoryIndex + 1);
      } else if (delta < 0 && currentStoryIndex > 0) {
        setCurrentStoryIndex(currentStoryIndex - 1);
      }

      if (storiesContainerRef.current) {
        storiesContainerRef.current.scrollLeft += event.deltaY;
      }

      if (storiesContainerRef.current) {
        const containerWidth = storiesContainerRef.current.offsetWidth;
        const scrollLeft = storiesContainerRef.current.scrollLeft;
        const scrollWidth = storiesContainerRef.current.scrollWidth;
        const endOfLastStory = scrollWidth - containerWidth <= scrollLeft;

        if (endOfLastStory) {
          setIsStoriesCompleted(true);
          setStoriesCompleted(true);
        }
      }
    }, 2);
  };

  useEffect(() => {
    if (isStoriesCompleted) {
      const nextSection = document.getElementById("projects");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [isStoriesCompleted]);

  useEffect(() => {
    const container = storiesContainerRef.current;

    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div
      className={`min-h-[100vh] flex flex-col z-0 justify-center items-center relative overflow-hidden ${mode === "dark" ? "bg-slate-800 text-white" : "bg-white text-gray-800"
        } ${isStoriesCompleted ? "relative" : "fixed inset-0"}`}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div
          className={`w-full h-full ${mode === "dark" ? "bg-slate-900" : "bg-white"
            } opacity-40 absolute inset-0`}
        ></div>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mt-8 animate-bounce">My story</h1>
      <p className="text-base sm:text-sm md:text-md lg:text-ms leading-relaxed mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mt-4  p-4 text-[#9433e9]">Scroll though the story to read the whole story</p>
      <div 
        ref={storiesContainerRef}
        className="mx-auto h-full w-[500px] overflow-x-auto overflow-y-hidden scrollbar-hidden flex flex-nowrap stories-container"
      >
        {stories.map((story, index) => (
          <div
            key={story.id}
            className={`flex-none w-full h-full mt-4 sm:mt-6 md:mt-8 lg:mt-10 ${currentStoryIndex === index ? "bg-opacity-60" : ""}`}
          >
            <p
              className={`animate-typing text-base sm:text-sm md:text-md lg:text-lg leading-relaxed mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mt-4 bg-opacity-40 backdrop-blur-lg p-4 ${
                currentStoryIndex === index && isTypingAnimationComplete ? "" : ""
              }`}
            >
              {story.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;
