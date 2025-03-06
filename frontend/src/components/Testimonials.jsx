import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Star } from "lucide-react";

const Testimonials = () => {

    return (
        <section className="py-20 bg-gray-200 flex flex-col items-center justify-center">

            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-10/12 md:11/12 lg:w-full max-w-4xl customize-carousel relative"
            >
                <div className="pb-7 sm:pb-0 mb-10">
                    <h2 className="text-4xl text-center font-bold text-gray-900 ">Testimonials </h2>
                    <p className="text-2xl text-center mt-5 dark:text-black">What our happy user says!</p>
                </div>
                <CarouselContent>
                    {Array.from({ length: 8 }).map((_, index) => (
                        <CarouselItem key={index} className={`md:basis-1/2 lg:basis-1/3 carousel-item`}>
                            <div className="p-1">
                                <Card className=" group hover:border-sky-500 transition-all duration-500">
                                    <CardContent className="
                                    group h-auto p-6 transition-all duration-500 w-full flex flex-col items-center
                                    ">
                                        <div>
                                            <img className="rounded-full w-32 h-32 object-cover" src="https://res.cloudinary.com/dazzgeqc5/image/upload/c_thumb,w_200,g_face/v1740757693/samples/smile.jpg" alt="avatar" />
                                        </div>
                                        <p className="text-gray-900 mt-5 text-xl font-bold transition-all duration-500  group-hover:text-sky-500 dark:text-white">
                                            Jane D
                                        </p>
                                        <p
                                            className="text-lg text-center mt-2 text-gray-500 leading-8 transition-all duration-500 group-hover:text-gray-800 dark:hover:text-white">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti excepturi.
                                        </p>
                                        <div
                                            className="flex mt-5 items-center gap-2 text-amber-500 transition-all duration-500">
                                            <Star className="w-5 h-5 fill-amber-500" />
                                            <Star className="w-5 h-5 fill-amber-500" />
                                            <Star className="w-5 h-5 fill-amber-500" />
                                            <Star className="w-5 h-5 fill-amber-500" />
                                            <Star className="w-5 h-5 fill-white" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="group flex justify-center items-center  border-solid border-sky-500 border-2 w-12 h-12 transition-all duration-500 rounded-full hover:bg-sky-500 hover:text-white absolute  top-3/12 left-4/12 sm:top-9 sm:left-auto sm:right-24" />
                <CarouselNext className="group flex justify-center items-center border-2 border-solid border-sky-500 w-12 h-12 transition-all duration-500 rounded-full hover:bg-sky-500 hover:text-white absolute top-3/12 right-4/12 sm:top-9 sm:right-2.5" />
            </Carousel>
        </section>
    )
}

export default Testimonials
