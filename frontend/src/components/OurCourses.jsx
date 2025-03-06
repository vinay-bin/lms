import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Course from "@/pages/student/Course";
import { useGetPublishedCourseQuery } from "@/features/api/courseApi";
import CourseSkeleton from "./CourseSkeleton";


const OurCourses = () => {
    const { data, isLoading, isError } = useGetPublishedCourseQuery();

    if (isError) return <h1>Some error occurred while fetching courses.</h1>

    return (
        <section className="pb-20 pt-20 bg-gray-200 flex flex-col items-center justify-center">

            {isLoading ? (
                Array.from({ length: 3 }).map((_, index) => (
                    <CourseSkeleton key={index} />
                ))
            ) : (
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-10/12 md:11/12 lg:w-full max-w-4xl customize-carousel relative"
                >
                    <div className="pb-8 sm:pb-0 mb-10">
                        <h2 className="text-4xl text-center font-bold text-gray-900 ">Our Courses </h2>
                    </div>
                    <CarouselContent>
                        {
                            data?.courses && data.courses.map((course, index) => 
                        
                        <CarouselItem key={index} className={`md:basis-1/2 lg:basis-1/3 carousel-item`}>
                            <div className="p-1">
                            <Course key={index} course={course} />
                            </div>
                        </CarouselItem>
                        )}
                    </CarouselContent>
                    <CarouselPrevious className="group flex justify-center items-center  border-solid border-sky-500 border-2 w-12 h-12 transition-all duration-500 rounded-full hover:bg-sky-500 hover:text-white absolute  top-2/12 left-4/12 sm:top-9 sm:left-auto sm:right-24" />
                    <CarouselNext className="group flex justify-center items-center border-2 border-solid border-sky-500 w-12 h-12 transition-all duration-500 rounded-full hover:bg-sky-500 hover:text-white absolute top-2/12 right-4/12 sm:top-9 sm:right-2.5" />
                </Carousel>
            )}


        </section>
    )
}

export default OurCourses