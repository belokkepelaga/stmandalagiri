import { type InferGetStaticPropsType } from "next";

import { SimpleLayout } from "@/components/Layout";
import { Footer, Navbar } from "@/components/UI";
import { trpcSSR } from "@/server/api/root";

export const getStaticProps = async () => {
  const berita = await trpcSSR.keystatic.pages({
    slug: "profil-desa",
  });

  return {
    props: {
      berita,
    },
  };
};

const Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <main>
      <Navbar />
      <SimpleLayout
        meta={{
          title: `${props.berita.title} | Berita`,
        }}
        article={{
          title: props.berita.title,
          image: props.berita.image,
          // date: props.berita.datePublished,
          content: props.berita.content,
        }}
        breadcrumb={[
          {
            title: "Beranda",
            href: "/",
          },
          {
            title: "Profil Desa",
            href: "/profil-desa",
          },
        ]}
      />
      <Footer />
    </main>
  );
};

export default Page;
