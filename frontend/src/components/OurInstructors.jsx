import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export const OurInstructors = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-sky-300 to bg-sky-600 flex flex-col items-center dark:from-gray-800 dark:to-gray-900 justify-center">

            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-8/12 md:11/12 lg:w-full max-w-4xl customize-carousel relative"
            >
                <div className="pb-7 sm:pb-0 mb-10">
                    <h2 className="text-4xl text-center font-bold text-white ">Our Instructors </h2>
                </div>
                <CarouselContent>
                    {Array.from({ length: 8 }).map((_, index) => (
                        <CarouselItem key={index} className={`md:basis-1/2 lg:basis-1/3 carousel-item`}>
                                <Card className="rounded-lg group hover:border-sky-500 transition-all duration-500">
                                    <CardContent className="
                                    group h-auto transition-all duration-500 w-full flex flex-col items-center
                                    ">
                                        <div className="pt-2">
                                            <img className="rounded-full w-52 h-52 object-cover" src="https://res.cloudinary.com/dazzgeqc5/image/upload/c_thumb,w_200,g_face/v1740757693/samples/smile.jpg" alt="avatar" />
                                        </div>
                                        <p className="text-gray-900 mt-5 text-xl font-bold transition-all duration-500  group-hover:text-sky-500 dark:text-white">
                                            Jane D
                                        </p>
                                    </CardContent>
                                </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="group flex justify-center items-center  border-solid border-black border-2 w-12 h-12 transition-all duration-500 rounded-full hover:bg-black hover:text-white absolute top-2/3 -left-14" />
                <CarouselNext className="group flex justify-center items-center border-2 border-solid border-black w-12 h-12 transition-all duration-500 rounded-full hover:bg-black hover:text-white absolute top-2/3 -right-14" />
            </Carousel>
        </section>
  )
}
