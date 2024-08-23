import { json, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";
import { getProblems, PostMeta } from "~/.server/posts";
import { SideNav } from "~/components/sidenav";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

export async function loader({}: LoaderFunctionArgs) {
  const problems = await getProblems();

  return json({
    problems,
  });
}

export default function Page() {
  const { problems } = useLoaderData<typeof loader>();

  const groupbydate = problems.reduce((acc, item) => {
    const date = new Date(item.frontmatter.date).toLocaleDateString();
    if (!acc[date]) acc[date] = [];
    acc[date].push(item);
    return acc;
  }, {} as any);

  return (
    <div className="flex flex-col">
      {/* <Link to="/" className="">
          <h1 className="text-xl text-center">Problems!</h1>
        </Link> */}
      {/* <div className="flex gap-2 items-center justify-center flex-col">
          <button className="underline">add your problem?</button>
          <input type="text" className="border px-2" placeholder="Search..." />
        </div> */}
      <div className="flex h-full overflow-y-scroll">
        <div className="w-[400px] py-2 flex-1 px-3 bg-white overflow-y-scroll">
          {/* {problems.map((item) => (
            <Link className="block">{item.frontmatter.title}</Link>
          ))} */}
          <div className="flex flex-col gap-3 border-r h-full">
            {Object.entries(groupbydate).map(([key, value]) => (
              <div key={key}>
                <h1 className="text-sm text-zinc-400">
                  {format(new Date(key), "yyyy")}
                </h1>
                <ul>
                  {(value as PostMeta[]).map((problem) => (
                    <li key={problem.slug}>
                      <NavLink
                        key={problem.slug}
                        to={problem.slug}
                        preventScrollReset
                        className={(e) =>
                          `block h-full  capitalize text-xl text-ellipsis overflow-hidden whitespace-nowrap ${
                            e.isActive ? "text-red-500" : ""
                          }`
                        }
                        end={true}
                      >
                        {problem.frontmatter.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* {Object.fromEntries(groupbydate).map((item: any) => (
              <div>
                <h1>{item[0]}</h1>
              </div>
              <NavLink
                key={item.slug}
                to={item.slug}
                className={(e) =>
                  `block h-full  capitalize text-xl text-ellipsis overflow-hidden whitespace-nowrap ${
                    e.isActive ? "text-red-500" : ""
                  }`
                }
                end={true}
              >
                {item.frontmatter.title}
              </NavLink>
            ))} */}
          </div>
        </div>
        <div className="flex-[3] h-screen w-full overflow-y-scroll">
          <div className="div px-2 py-4 lg:prose-xl prose w-full">
            <Outlet />
          </div>
          <div className="footer text-sm flex w-full items-center justify-center border-t py-2">
            Nischal Dahal © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </div>
  );
}
