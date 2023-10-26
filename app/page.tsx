import MaxWidthWrapper from "@/components/max-width-wrapper";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="flex flex-col mt-[80px] pt-5 pr-1 pb-5 pl-[30px] text-[0.875rem] leading-[1.05625rem] justify-center">
          <h1>Esteban Valente</h1>
          <p>
            Updated <time dateTime="2023-10-26" /> October 26, 2023
          </p>

          <h2 className="py-5">About me:</h2>

          <div className="px-2">
            <ul>
              <li>• Born in Rosario, Argentina</li>
              <li>• Based in Montevideo, Uruguay</li>
              <li>• Designer and programmer</li>
              <li>• Interested in crafting delightful interfaces</li>
              <li>
                • Founder of{" "}
                <Link
                  href={"https://clockech.com"}
                  className="hover:bg-gray-100 underline"
                  target="_blank"
                >
                  Clockech
                </Link>
                , a software company
                <ul className="px-5">
                  ◦ Now: Making real-time analytics friendly at{" "}
                  <Link
                    href="https://clockech.com"
                    className="hover:bg-gray-100 underline"
                    target="_blank"
                  >
                    Clockech
                  </Link>
                </ul>
                <ul className="px-5">
                  ◦ Past: Created{" "}
                  <Link
                    href="https://checktoken.com"
                    className="hover:bg-gray-100 underline"
                    target="_blank"
                  >
                    CheckToken
                  </Link>
                  , An analytics OpenAI report app
                </ul>
              </li>
              <li>
                • Founder of{" "}
                <Link
                  href={"https://acentus.agency"}
                  className="hover:bg-gray-100 underline"
                  target="_blank"
                >
                  Acentus
                </Link>
                , a design agency
                <ul className="px-5">
                  ◦ We make different things when we can, like{" "}
                  <Link
                    href={"https://grupoboing.com"}
                    className="underline"
                    target="_blank"
                  ></Link>
                </ul>
              </li>
            </ul>
          </div>

          <h2 className="py-5">Find me:</h2>

          <div className="px-2">
            <ul>
              <li>
                •{" "}
                <Link
                  href={"https://twitter.com/joesvart"}
                  className="underline hover:bg-gray-100"
                  target="_blank"
                >
                  Twitter
                </Link>
              </li>
              <li>
                •{" "}
                <Link
                  href={"https://linkedin.com/in/valentesteban/"}
                  className="underline hover:bg-gray-100"
                  target="_blank"
                >
                  Linkedin
                </Link>
              </li>
            </ul>
          </div>

          <h2 className="py-5">Contact me:</h2>

          <div className="px-2">
            <ul>
              <li>
                •{" "}
                <Link
                  href={"mailto:esteban@clockech.com"}
                  className="underline hover:bg-gray-100"
                  target="_blank"
                >
                  Email
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
