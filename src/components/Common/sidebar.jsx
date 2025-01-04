import React, { useState, useEffect } from "react";
import { GraduationCap, BarChart3, PlusCircle, Users, UserSquare2, MessageCircle, Settings, LogOut, ChevronLeft, Book, ListChecks, Star, Share2, Menu, ChevronDown, ChevronUp } from 'lucide-react';
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import "./sidebar.css";

const navigationItems = [
  { id: 1, name: "Dashboard", to: "/", icon: BarChart3 },
  { id: 2, name: "Queries", to: "/query", icon: MessageCircle },
  { id: 3, name: "Settings", to: "/settings", icon: Settings },
  { id: 4, name: "New Test Series", to: "/testseries", icon: ListChecks },
  { id: 5, name: "Reviews", to: "/reviews", icon: Star },
  { id: 6, name: "Referral", to: "/referral", icon: Share2 },
  {
    id: 7,
    name: "Course",
    icon: Book,
    subItems: [
      { id: 8, name: "Courses", to: "/courses", icon: Book },
      { id: 9, name: "Create New Course", to: "/createcourse", icon: PlusCircle },
      { id: 10, name: "Live Class", to: "/liveclass", icon: ListChecks },
      { id: 11, name: "Free Course", to: "/freecourse", icon: Book },
    ],
  },
  {
    id: 12,
    name: "Management",
    icon: Users,
    subItems: [
      { id: 13, name: "Faculty", to: "/faculty", icon: UserSquare2 },
      { id: 14, name: "Instructors", to: "/instructors", icon: UserSquare2 },
    ],
  },
];

export default function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setCollapsed(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleSubMenu = (id) => {
    setOpenSubMenu(openSubMenu === id ? null : id);
  };

  return (
    <>
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-20 p-2 bg-[#1a1b1e] text-white rounded-md block md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      )}
      <div
        className={`flex flex-col justify-between bg-[#1a1b1e] text-gray-300 transition-all duration-300 ${
          collapsed ? "w-[80px]" : "w-[215px]"
        } h-screen fixed top-0 left-0 z-10 ${
          isMobile && collapsed ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="px-4 py-5 border-2 border-l-0 border-[#363B47] bg-[#1a1b1e] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <GraduationCap
              style={{ height: "48px", width: "48px" }}
              className="text-blue-500"
            />
            {!collapsed && (
              <span className="text-xl font-semibold text-white">OS Code</span>
            )}
          </div>
         
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-800/50 transition-all lg:hidden "
          >
            <ChevronLeft
              className={`h-6 w-6 text-gray-400 transition-transform ${
                collapsed && "rotate-180"
              }`}
            />
          </button>
        </div>

        <div className="flex-grow mt-3 overflow-auto scrollbar-hide">
          <ul className="space-y-1">
            {navigationItems.map((item) => (
              <li key={item.id}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleSubMenu(item.id)}
                      className="group relative flex w-full items-center gap-x-2 px-6 py-3 text-[15px] leading-6 rounded-none hover:text-white text-gray-400"
                    >
                      <item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                      <span
                        className={`transition-opacity ${
                          collapsed ? "opacity-0 hidden" : "opacity-100"
                        }`}
                      >
                        {item.name}
                      </span>
                      {openSubMenu === item.id ? (
                        <ChevronUp className="h-5 w-5 ml-auto" />
                      ) : (
                        <ChevronDown className="h-5 w-5 ml-auto" />
                      )}
                    </button>
                    {openSubMenu === item.id && (
                      <ul className="pl-8 space-y-1">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.id}>
                            <NavLink
                              to={subItem.to}
                              className={({ isActive }) =>
                                `group relative flex w-full items-center gap-x-2 px-6 py-3 text-[15px] leading-6 rounded-l-lg ${
                                  isActive
                                    ? "bg-blue-600 text-white"
                                    : "hover:text-white text-gray-400"
                                }`
                              }
                            >
                              <subItem.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                              <span
                                className={`transition-opacity ${
                                  collapsed ? "opacity-0 hidden" : "opacity-100"
                                }`}
                              >
                                {subItem.name}
                              </span>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `group relative flex w-full items-center gap-x-2 px-6 py-3 text-[15px] leading-6 rounded-none ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "hover:text-white text-gray-400"
                      }`
                    }
                  >
                    <item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                    <span
                      className={`transition-opacity ${
                        collapsed ? "opacity-0 hidden" : "opacity-100"
                      }`}
                    >
                      {item.name}
                    </span>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="px-3 py-4">
          <button className="flex w-full items-center gap-3 px-6 py-5 text-[15px] font-semibold text-white hover:bg-gray-800/50 rounded-none" onClick={handleLogout}>
            <LogOut className="h-5 w-5 text-blue-500" />
            <span
              className={`transition-opacity ${
                collapsed ? "opacity-0 hidden" : "opacity-100"
              }`}
            >
              Sign Out
            </span>
          </button>
        </div>
      </div>
    </>
  );
}