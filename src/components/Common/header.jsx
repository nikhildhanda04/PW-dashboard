  import { useState, useEffect} from "react";
  import SearchBar from "../../components/Common/searchbar"; 
 import { Bell, User } from "lucide-react";

const Header = ({Title}) => {

    const [greeting, setGreeting] = useState("");
  
    useEffect(() => {
      const currentHour = new Date().getHours();
      if (currentHour < 12) setGreeting("Good Morning!");
      else if (currentHour < 18) setGreeting("Good Afternoon!");
      else setGreeting("Good Evening!");
    }, []);

  return (
      <div className="flex flex-row justify-between items-center px-4 md:px-10 py-4 md:py-6 bg-white shadow">
          <div> 
            <div className="text-sm text-gray-500 font-medium">{greeting}</div>
            <div className="text-xl md:text-2xl font-semibold text-gray-800">{Title}</div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap items-center gap-4 mt-4 md:mt-0">
            <SearchBar />
            <div className="relative">
              <div className="bg-gray-200 p-2 rounded-full">
                <Bell className="w-5 h-5 text-gray-700" />
              </div>
              {/* {hasNotifications && (
                <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
              )} */}
            </div>
            <div className="bg-gray-200 p-2 rounded-full">
              <User className="w-6 h-6 text-gray-700" />
            </div>
          </div>
        </div>
  )
}

export default Header
