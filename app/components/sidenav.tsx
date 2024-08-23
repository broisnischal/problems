import { NavLink } from "@remix-run/react";

interface SideNavProps {
  onItemClick?: () => void;
}

export const SideNav: React.FC<SideNavProps> = () => {
  return (
    <>
      <nav className="w-full">
        <ul className="flex flex-col">
          <li className="">
            <NavLink
              className={(e) =>
                `block h-full  capitalize text-xl w-[200px] text-ellipsis overflow-hidden whitespace-nowrap ${
                  e.isActive ? "text-red-500" : ""
                }`
              }
              end={true}
              to="games"
            >
              games that i have played in last year
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={(e) =>
                `block h-full w-full  text-xl ${
                  e.isActive ? "text-red-500" : ""
                }`
              }
              end={true}
              to="favorites"
            >
              favorites
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={(e) =>
                `block h-full w-full  text-xl ${
                  e.isActive ? "text-red-500" : ""
                }`
              }
              end={true}
              to="flutter"
            >
              flutter
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={(e) =>
                `block h-full w-full  text-xl ${
                  e.isActive ? "text-red-500" : ""
                }`
              }
              end={true}
              to="postgres"
            >
              postgres database not working
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className={(e) =>
                `block h-full w-full  text-xl ${
                  e.isActive ? "text-red-500" : ""
                }`
              }
              end={true}
              to="flutasdfter"
            >
              coding in the tech
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
