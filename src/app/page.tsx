import { twMerge } from "tailwind-merge";
import { Banner } from "@/components/Banner/Banner";
import { Stories } from "@/components/Stories/Stories";
import JPEGBeautifulStories from "#/JPEG/beautiful-stories.jpg";
import JPEGCreateAndShare from "#/JPEG/create-and-share.jpg";
import JPEGDesignedForEveryone from "#/JPEG/designed-for-everyone.jpg";

const Home = () => (
  <main>
    <section className="sm:flex sm:flex-col sm:w-full">
      <div className="sm:flex sm:flex-col sm:items-center sm:mx-auto sm:w-full">
        <div className="sm:bg-pure-black sm:flex sm:justify-center sm:w-full">
          <Banner
            articleProps={{ className: twMerge("sm:max-w-[90rem]") }}
            imageProps={{
              alt: "A beautiful sunset over a calm ocean with vibrant orange and pink hues reflecting on the water.",
              loading: "eager",
              priority: true,
              src: JPEGCreateAndShare,
            }}
          >
            <Banner.Heading>
              Create and share your photo stories.
            </Banner.Heading>

            <Banner.Paragraph>
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </Banner.Paragraph>

            <Banner.Link
              className={twMerge("sm:mt-2", "md:mt-7")}
              href="#"
            >
              GET AN INVITE
            </Banner.Link>
          </Banner>
        </div>

        <div className="sm:bg-pure-white sm:flex sm:justify-center sm:w-full">
          <Banner
            articleProps={{ className: twMerge("sm:max-w-[90rem]") }}
            className="sm:bg-pure-white sm:text-pure-black"
            direction="reversed"
            imageProps={{
              alt: "A laptop on a desk with a photo of a woman.",
              src: JPEGBeautifulStories,
            }}
          >
            <Banner.Heading>BEAUTIFUL STORIES EVERY TIME</Banner.Heading>

            <Banner.Paragraph>
              We provide design templates to ensure your stories look terrific.
              Easily add photos, text, embed maps and media from other networks.
              Then share your story with everyone.
            </Banner.Paragraph>

            <Banner.Link
              className={twMerge("sm:mt-2", "md:mt-7")}
              href="#"
            >
              VIEW THE STORIES
            </Banner.Link>
          </Banner>
        </div>

        <div className="sm:bg-pure-white sm:flex sm:justify-center sm:w-full">
          <Banner
            articleProps={{ className: twMerge("sm:max-w-[90rem]") }}
            className="sm:bg-pure-white sm:text-pure-black"
            imageProps={{
              alt: "A man holding a camera and looking at it.",
              src: JPEGDesignedForEveryone,
            }}
          >
            <Banner.Heading>DESIGNED FOR EVERYONE</Banner.Heading>

            <Banner.Paragraph>
              Photosnap can help you create stories that resonate with your
              audience. Our tool is designed for photographers of all levels,
              brands, businesses you name it.
            </Banner.Paragraph>

            <Banner.Link
              className={twMerge("sm:mt-2", "md:mt-7")}
              href="#"
            >
              VIEW THE STORIES
            </Banner.Link>
          </Banner>
        </div>
      </div>
    </section>

    <section className="sm:flex sm:flex-col sm:w-full">
      <div className="sm:flex sm:flex-col sm:items-center sm:max-w-[90rem] sm:mx-auto sm:w-full">
        <Stories.Home />
      </div>
    </section>
  </main>
);

export default Home;
