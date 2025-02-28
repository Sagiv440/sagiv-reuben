import { useState, useEffect  } from "react";
import { motion } from 'framer-motion';
import { textVariant } from "../utils/motion";
import { styles } from '../styles';
import { SectionWrapper } from "../hoc";

const useWindowSize = () => {
    const [size, setSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  
    useEffect(() => {
      const handleResize = () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return size;
  };
const Showreal = () => {

    const { width, height } = useWindowSize();

    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionHeadText} text-center`}>Showreal</h2>
            </motion.div>
            <div style={{
                display: "flex", justifyContent: "center" 
            }}>
            <div style={{
                width: `${width*0.83}px`,
                height: `${width*(0.5625)* 0.83}px`,
                maxHeight: "495px",
                maxWidth: "880px",
            }}>

                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/1RQqJjkSFZA?si=2KC4qbCS-bwCnzEe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </div>
        </>
    )
}

const WrappedShowreal = SectionWrapper(Showreal, 'showreal');

export default WrappedShowreal; 