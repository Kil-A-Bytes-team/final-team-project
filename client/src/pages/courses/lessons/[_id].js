//scroll wrap
import React from "react";
import CourseLayout from "@/components/CourseLayout";
import axios from "axios";

function Lesson(props) {
  const { course } = props;
  return (
    <CourseLayout course={course}>
      <div className="w-full max-w-5xl  mx-auto ">
        <div className="p-8">
          <div className="pb-[40px]">
            <h1 className="font-semibold text-[36px] mb-4">{course.name}</h1>
          </div>
          <div className="mb-10 aspect-video relative">
            <iframe
              width="560"
              height="315"
              src={`${course.videoUrl}`}
              title="YouTube video player"
              frameBorder="0"
              className="top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen="allowFullScreen"
              mozallowFullScreen="mozallowFullScreen"
              msallowFullScreen="msallowFullScreen"
              oallowFullScreen="oallowFullScreen"
              webkitallowFullScreen="webkitallowFullScreen"
            ></iframe>
          </div>
          <div className="text-[16px] mb-10">{course.description}</div>
          <hr></hr>
          <p className="box-border mt-10">
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
export const getServerSideProps = async (ctx) => {
  const { _id } = ctx.params;
  const coursesRequest = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/courses/${_id}`
  );
  const course = coursesRequest.data;
  return {
    props: {
      course,
    },
  };
};

export default Lesson;
