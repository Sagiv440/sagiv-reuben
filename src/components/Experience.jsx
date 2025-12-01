import React, { useEffect, useMemo, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { AnimatePresence, motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { getAll, loadImage } from "../utils/utils";
import Loading from "./canvas/loading";
import LImage from "./canvas/Image";
import SearchBarTimeline from "./canvas/SearchBarTimeline";
import { SEARCH_TEMP_TIMELINE, TIMELINE_FILE_URL } from "../constants";
import expLocal from "../constants/Experiance.json"

const ExperienceCard = ({ experience, index, expanded, setExpanded }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#242424ff",
      color: "#b1b1b1ff",
    }}
    contentArrowStyle={{ borderRight: "7px solid #696969ff" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <LImage src={experience.icon} alt={experience.company_name} className={"w-[80%] h-[80%] object-contain rounded-full"} hide_text={true} />

      </div>
    }
  >
    <div
      onClick={() => setExpanded(index)}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>
      <div
        className="text-white-100 text-[14px] tracking-wider"
      >
        {experience.about}
      </div>
      <AnimatePresence>
        {expanded === index && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="mt-4 p-3 rounded-lg overflow-hidden"
          >
            {/* Delayed text animation */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.35, duration: 0.2 }}
              className="text-white text-sm mb-3"
            >
              {experience.summery}
              <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                  >
                    {point}
                  </li>
                ))}
              </ul>

            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </VerticalTimelineElement>

);

const Experience = () => {
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(null);
  const [experiences, setExperiences] = useState([]);
  const [search, setSearch] = useState({ ...SEARCH_TEMP_TIMELINE, title: "", category: "", profession: "" });

  const filteredTimeline = useMemo(() => {
    return experiences.filter((event) => {

      // Filter by name
      const matchesName =
        event.title?.toLowerCase().includes(search.title.toLowerCase());

      // Filter by profession
      const matchesProfession =
        search.profession.trim() === "" ||
        event.profession?.toLowerCase().includes(search.profession.toLowerCase());

      // Filter by category
      const matchesCategory =
        search.category.trim() === "" ||
        event.category?.toLowerCase().includes(search.category.toLowerCase());

      return matchesName && matchesProfession && matchesCategory;
    });
  }, [experiences, search.title, search.profession, search.category]);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  useEffect(() => {
    const getExperiences = async () => {
      const res = await fetch(TIMELINE_FILE_URL)
      const data = await res.json()
      setExperiences(data);

      /*const imageUrls = data.map(x => x.icon);
      await Promise.all(imageUrls.map(url => loadImage(url)))*/

      setLoading(false);
    }
    getExperiences();
  });

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>My Time Line</h2>
      </motion.div>
      <SearchBarTimeline search={search} setSearch={setSearch} timeline={experiences} />
      <div className="mt-20 flex flex-col">
        {loading && <Loading />}
        {!loading && <VerticalTimeline>
          {filteredTimeline.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} index={index} expanded={expanded} setExpanded={toggleExpand} />
          ))}
        </VerticalTimeline>}
      </div>
    </>
  )
};

export default SectionWrapper(Experience, "experience");
