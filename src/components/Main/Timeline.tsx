import { Line } from "@/styles/ComponentStyles/Icons";
import {
  MobileTimeLineCompStyles,
  TimeLineCompStyles,
} from "@/styles/ComponentStyles/TimelineComp";
import { CircleNum } from "../Icons/Icons";
import { SmallTextStyles } from "@/styles/ComponentStyles/Text";
import { Timelines } from "../../../constants/timeline";
import {motion} from "framer-motion";
import { textVariant } from "@/animations/animations";

export const TimeLineComp = () => {
  return (
    <TimeLineCompStyles>
      <div className="list">
        {Timelines.map((ele, index) => (
          <div className="timeln" key={index}>
            <div className="text-one">
              <h4>{ele.head}</h4>
              <SmallTextStyles>{ele.desc}</SmallTextStyles>
            </div>
            <div className="num">
              <Line height={ele.id === 1 ? "8.5625rem" : "5.375rem"} className="line" />
              <CircleNum num={ele.id} />
            </div>
            <div className="date">
              <motion.h4
              initial = "initial"
              whileInView= "final"
              variants={textVariant}
              >{ele.date}</motion.h4>
            </div>
          </div>
        ))}
      </div>
    </TimeLineCompStyles>
  );
};

export const MobileTimeLineComp = () => {
  return (
    <MobileTimeLineCompStyles>
      <div className="list">
        {Timelines.map((ele, index) => (
          <div className="timeln" key={index}>
            <div className="num">
              <Line height="100%" />
              <CircleNum num={ele.id} />
            </div>
            <div className="text">
              <SmallTextStyles>
                <strong>{ele.head}</strong>
              </SmallTextStyles>
              <SmallTextStyles>{ele.desc}</SmallTextStyles>
              <SmallTextStyles className="date">
                <strong>{ele.date}</strong>
              </SmallTextStyles>
            </div>
          </div>
        ))}
      </div>
    </MobileTimeLineCompStyles>
  );
};
