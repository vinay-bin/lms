import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  return (
    <Link to={`/course-detail/${course._id}`}>

      <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform  transition-all duration-300 py-0 gap-0 shadow-slate-300 relative">
        <div className="relative">
          <img
            src={course.courseThumbnail}
            alt="course"
            className="w-full h-36 object-fit rounded-t-lg"
          />
        </div>
        <CardContent className="px-5 py-4 space-y-3">
          <h1 className="hover:underline font-bold text-xl line-clamp-2">
          {course.courseTitle}
          </h1>
          <p className="text-slate-400 line-clamp-2">
          {course.subTitle}
          </p>
          <div
            className="flex mt-5 items-center gap-2 text-amber-500 transition-all duration-500">
            <Star className="w-5 h-5 fill-amber-500" />
            <Star className="w-5 h-5 fill-amber-500" />
            <Star className="w-5 h-5 fill-amber-500" />
            <Star className="w-5 h-5 fill-amber-500" />
            <Star className="w-5 h-5 fill-white" />
            <span className="text-lg font-bold text-slate-500" >(425)</span>
          </div>
          <div className="flex items-center justify-between mt-5">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8 ">
                <AvatarImage className="rounded-full" src={course.creator?.photoUrl || "https://github.com/shadcn.png"} alt="@shadcn" />
                <AvatarFallback>LH</AvatarFallback>
              </Avatar>
              <h1 className="font-bold text-sm">{course.creator?.name}</h1>

            </div>
            <Badge className={'bg-blue-600 text-white px-2 py-1 text-xs rounded-full'}>
            {course.courseLevel}
            </Badge>
          </div>
          <div className="text-lg font-bold flex justify-between">
            <div>
              <span className="">₹{course.coursePrice}</span> &nbsp;
              <span className="line-through text-slate-400">₹{course.coursePrice * 2} </span>
            </div>
            <div>
              <span className="text-indigo-600">50% off</span>
            </div>
          </div>
          <div className="bg-indigo-600 text-white p-2
                                        w-fit absolute top-0 right-0 rounded-bl-xl">
            50% Off
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Course;
