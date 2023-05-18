//scroll wrap
import React from "react";
import CourseLayout from "@/components/CourseLayout";

function Lesson() {
  return (
    <CourseLayout>
      <div className="w-full max-w-5xl  mx-auto">
        <div className="p-8">
          <div className="pb-[40px]">
            <h1 className="font-semibold text-[36px] mb-4">
              Python programming language
            </h1>
            <span className="text-[20px]">
              You can learn the basic of python in this lesson
            </span>
          </div>
          <div className="mb-10 aspect-video relative">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/x7X9w_GIm1s"
              title="YouTube video player"
              frameborder="0"
              className="top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
          <p className="box-border">
            Open the door to sought-after technology careers with a world-class
            online Bachelor of Science (BSc) in Computer Science degree from the
            University of London. You’ll master in-demand computing skills,
            solve complex problems, and hone your innovation and creativity.
          </p>
        </div>
      </div>
    </CourseLayout>
  );
}

export default Lesson;