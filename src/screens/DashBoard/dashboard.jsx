import { User, PlayCircle, Check, Users, CheckSquare, Calendar, CreditCard, Layers } from "lucide-react"; 
import StatCard from "../../components/DashBoard/stat-card"; 
import NotificationsPanel from "../../components/DashBoard/notification-card"; 
import RevenueChart from "../../components/DashBoard/revenue-chart"; 
import BannerUpload from "../../components/DashBoard/banner-upload"; 
import CourseRatingCard from "../../components/DashBoard/course-rating-card"; 
// import CourseOverview from "@/components/course-overview";

const statCardsData = [
  {title: "Total Ongoing Courses",
    value: "19",
    icon: PlayCircle,
    iconClassName: "bg-blue-100 text-blue-500"
  },
  {title: "Currently Active",
    value: "19",
    icon: Check,
    iconClassName: "bg-purple-100 text-purple-500"
  },
  {title: "Total Instructors",
    value: "241",
    icon: Users,
    iconClassName: "bg-orange-100 text-orange-500"
  },
  {
    title:"Completed Courses",
    value:"951",
    icon:CheckSquare,
    iconClassName:"bg-green-100 text-green-500"
  },
  {
    title:"Students",
    value:"1,674,787",
    icon:User,
    iconClassName:"bg-red-100 text-red-500"
  },
  {
    title:"Online Courses",
    value:"3",
    icon:Calendar,
    iconClassName:"bg-green-100 text-green-500"
  },
  {
    title:"USD Total Earning",
    value:"₹7,461,767",
    icon:CreditCard,
    iconClassName:"bg-gray-100 text-black-500"
  },
  {
    title:"Course Sold",
    value:"56,489",
    icon:Layers,
    iconClassName:"bg-blue-100 text-blue-500"
  },
];

const Dashboard = () => {
  return (
     <section className="bg-gray-100 w-full py-6 md:py-10 px-4 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center w-full">
          {statCardsData.map((card, index) => (
            <StatCard
              key={index}
              title={card.title}
              value={card.value}
              icon={card.icon}
              iconClassName={card.iconClassName}
            />
          ))}
        </div>
          <div className="mt-10 flex flex-wrap gap-6 justify-center">
            <div className="w-full lg:flex-1 flex justify-center">
              <NotificationsPanel />
            </div>
            <div className="w-full lg:flex-1 flex justify-center">
              <BannerUpload />
            </div>
            <div className="w-full lg:flex-1 flex justify-center">
              
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 justify-center">
            <div className="w-full lg:flex-1 flex justify-center">
              <CourseRatingCard />
            </div>
            <div className="w-full lg:flex-1 flex justify-center">
              <RevenueChart />
            </div>
          </div>
        </section>
  
  );
};

export default Dashboard;
