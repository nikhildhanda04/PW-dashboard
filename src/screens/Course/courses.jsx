import { useState } from "react";
import SearchBar from "../../components/Common/searchbar";
import CourseCard from "../../components/Courses/coursecard";
import PaginationDemo from "../../components/Courses/pagination";

const sampleCourses = [
  {
    title: "Premiere Pro CC for Beginners: Video Editing in Premiere",
    price: 24,
    rating: 4.9,
    students: "982,941",
    image: "path/to/image1.jpg",
    category: "Developments",
  },
  {
    title: "Premiere Pro CC for Beginners: Video Editing in Premiere",
    price: 24,
    rating: 4.9,
    students: "982,941",
    image: "path/to/image1.jpg",
    category: "Developments",
  },  {
    title: "Premiere Pro CC for Beginners: Video Editing in Premiere",
    price: 24,
    rating: 4.9,
    students: "982,941",
    image: "path/to/image1.jpg",
    category: "Developments",
  },  {
    title: "Premiere Pro CC for Beginners: Video Editing in Premiere",
    price: 24,
    rating: 4.9,
    students: "982,941",
    image: "path/to/image1.jpg",
    category: "Developments",
  },  {
    title: "Premiere Pro CC for Beginners: Video Editing in Premiere",
    price: 24,
    rating: 4.9,
    students: "982,941",
    image: "path/to/image1.jpg",
    category: "Developments",
  },  {
    title: "Premiere Pro CC for Beginners: Video Editing in Premiere",
    price: 24,
    rating: 4.9,
    students: "982,941",
    image: "path/to/image1.jpg",
    category: "Developments",
  },  {
    title: "Premiere Pro CC for Beginners: Video Editing in Premiere",
    price: 24,
    rating: 4.9,
    students: "982,941",
    image: "path/to/image1.jpg",
    category: "Developments",
  },  {
    title: "Premiere Pro CC for Beginners: Video Editing in Premiere",
    price: 24,
    rating: 4.9,
    students: "982,941",
    image: "path/to/image1.jpg",
    category: "Developments",
  },
];

const Courses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 8; 
  const totalPages = Math.ceil(sampleCourses.length / coursesPerPage);



  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentCourses = sampleCourses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  
  return (
  <section className="px-4 sm:px-6 lg:px-[100px] py-6 sm:py-[40px]">
      <div className="flex flex-wrap justify-between gap-4 mb-6">
        <SearchBar className="flex-1 sm:flex-none" />
        <div className="flex gap-4 flex-wrap">
          <select className="border px-4 py-2 bg-white shadow w-full sm:w-auto">
            <option>Sort by: Latest</option>
            <option>Sort by: Popular</option>
          </select>
          <select className="border px-4 py-2 bg-white shadow w-full sm:w-auto">
            <option>Category: All</option>
            <option>Development</option>
            <option>Design</option>
          </select>
          <select className="border px-4 py-2 bg-white shadow w-full sm:w-auto">
            <option>Rating: 4 Stars & Up</option>
            <option>Rating: 3 Stars & Up</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
        {sampleCourses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>

      <div className="mt-6 sm:mt-8">
        <PaginationDemo
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </section>

  );
};

export default Courses;
