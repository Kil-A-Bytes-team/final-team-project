import Card from "@/components/CourseCard";
         const placeHolder = "https://via.placeholder.com/400x230";

         const data = [
           {
             imageSrc: placeHolder,
             title: "HTML, CSS, JS",
             description:
               "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
             buttonLabel: "Сагсанд хийх",
             buttonUrl: "#",
           },
         ];
export default function Courses({data}) {
    const course = data
    return (
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {course.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    );
}
