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

    const users = [
        {
            name : 'Jane D',
            img : 'https://images.pexels.com/photos/7752811/pexels-photo-7752811.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
            rating : 5
        },
        {
            name : 'Andrea',
            img : 'https://images.pexels.com/photos/4855373/pexels-photo-4855373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            rating : 4
        },
        {
            name : 'Ketut',
            img : 'https://images.pexels.com/photos/4307884/pexels-photo-4307884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            rating : 5
        },
        {
            name : 'Wills',
            img : 'https://images.pexels.com/photos/6999225/pexels-photo-6999225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            rating : 5
        },
        {
            name : 'John',
            img : 'https://images.pexels.com/photos/7752805/pexels-photo-7752805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            rating : 5
        }
    ]

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
                    {users.map((user, index) => (
                        <CarouselItem key={index} className={`md:basis-1/2 lg:basis-1/3 carousel-item`}>
                            <div className="p-1">
                                <Card className=" group hover:border-sky-500 transition-all duration-500">
                                    <CardContent className="
                                    group h-auto p-6 transition-all duration-500 w-full flex flex-col items-center
                                    ">
                                        <div>
                                            <img className="rounded-full w-32 h-32 object-cover" src={user.img} alt="avatar" />
                                        </div>
                                        <p className="text-gray-900 mt-5 text-xl font-bold transition-all duration-500  group-hover:text-sky-500 dark:text-white">
                                            {user.name}
                                        </p>
                                        <p
                                            className="text-lg text-center mt-2 text-gray-500 leading-8 transition-all duration-500 group-hover:text-gray-800 dark:hover:text-white">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti excepturi.
                                        </p>
                                        <div
                                            className="flex mt-5 items-center gap-2 text-amber-500 transition-all duration-500">

                                            { 
                                                Array.from({ length: 5 }).map((_, index) => (
                                                     index < user.rating ? (
                                                        <Star className="w-5 h-5 fill-amber-500" />
                                                     ) : (
                                                        <Star className="w-5 h-5 fill-white" />
                                                     ) 
                                                ))
                                            }

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
