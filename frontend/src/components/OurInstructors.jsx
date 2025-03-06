import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export const OurInstructors = () => {

    const instructors = [
        {
            name : 'George Milton',
            img : 'https://images.pexels.com/photos/7752848/pexels-photo-7752848.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
        },
        {
            name:'Griffin Wooldrige',
            img : 'https://images.pexels.com/photos/4348266/pexels-photo-4348266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            name : 'Anand Kumar',
            img : 'https://images.pexels.com/photos/7752844/pexels-photo-7752844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            name : 'JnrJose Jose',
            img : 'https://images.pexels.com/photos/9957550/pexels-photo-9957550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            name : 'Ben Khatry',
            img : 'https://images.pexels.com/photos/23437059/pexels-photo-23437059/free-photo-of-portrait-of-a-young-man-in-traditional-outfit.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
        },
        {
            name : 'Tran Nhu Tuan',
            img : 'https://images.pexels.com/photos/14438788/pexels-photo-14438788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
    ]

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
                    {instructors.map((value, index) => (
                        <CarouselItem key={index} className={`md:basis-1/2 lg:basis-1/3 carousel-item`}>
                            <Card className="rounded-lg group hover:border-sky-500 transition-all duration-500">
                                <CardContent className="
                                    group h-auto transition-all duration-500 w-full flex flex-col items-center
                                    ">
                                    <div className="pt-2">
                                        <img className="rounded-full w-52 h-52 object-cover" src={value.img} alt="avatar" />
                                    </div>
                                    <p className="text-gray-900 mt-5 text-xl font-bold transition-all duration-500  group-hover:text-sky-500 dark:text-white">
                                        { value.name }
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
