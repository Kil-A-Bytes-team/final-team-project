import Link from "next/link";
import React from "react";
import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import { Shapes } from "@/components/Shapes";

const MotionLink = motion(Link);
export const Logo = () => {
  const transition = {
    type: "spring",
    duration: 0.7,
    bounce: 0.2,
  };

  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // const resetMousePosition = () => {
  //   mouseX.set(0);
  //   mouseY.set(0);
  // };
  return (
    <>
      {/* <motion.div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full font-bold text-2x1"
        whileHover={{
          scale: 1.5,
          backgroundColor: [
            "#121212",
            "rgba(65,147,140,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        KAB
      </MotionLink>
    </motion.div> */}
      <MotionConfig transition={transition}>
        <motion.button
          className="signButton w-32 h-16"
          ref={ref}
          initial={false}
          animate={isHover ? "hover" : "rest"}
          whileTap="press"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.1 },
            press: { scale: 1.1 },
          }}
          onHoverStart={() => {
            // resetMousePosition();
            setIsHover(true);
          }}
          onHoverEnd={() => {
            // resetMousePosition();
            setIsHover(false);
          }}
          onTapStart={() => setIsPress(true)}
          onTap={() => setIsPress(false)}
          onTapCancel={() => setIsPress(false)}
          onPointerMove={(e) => {
            mouseX.set(e.clientX - bounds.x - bounds.width / 2);
            mouseY.set(e.clientY - bounds.y - bounds.height / 2);
          }}
        >
          <motion.div
            className="shapes"
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
          >
            <div className="pink blush" />
            <div className="blue blush" />
            <div className="container">
              <Suspense fallback={null}>
                <Shapes
                  isHover={isHover}
                  isPress={isPress}
                  mouseX={mouseX}
                  mouseY={mouseY}
                />
              </Suspense>
            </div>
          </motion.div>
          <MotionLink
            variants={{
              hover: { scale: 0.85 },
              press: { scale: 1.1 },
            }}
            // className="label flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
            className="label flex items-center"
            href="/"
          >
            Kil-A-Bytes
          </MotionLink>
        </motion.button>
      </MotionConfig>
    </>
  );
};
