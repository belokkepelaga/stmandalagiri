import { Hero, News, Profile } from "@/components/Homepage";
import { ContainerContent } from "@/components/Layout";
import { Footer, Navbar } from "@/components/UI";
import { trpcSSR, type TRPCTypeOutput } from "@/server/api/root";

export const getStaticProps = async () => {
  const homepage = await trpcSSR.keystatic.homepage();
  const hightlights = await trpcSSR.keystatic.highlights();
  const profil = await trpcSSR.keystatic.pages({
    slug: "profil-stt",
  });

  return {
    props: {
      homepage,
      hightlights,
      profil,
    },
  };
};

type Props = {
  homepage: TRPCTypeOutput["keystatic"]["homepage"];
  hightlights: TRPCTypeOutput["keystatic"]["highlights"];
  profil: TRPCTypeOutput["keystatic"]["pages"];
};

const Page = (props: Props) => {
  return (
    <main>
      <Navbar />
      <ContainerContent title="Home | STT Mandala Giri">
        <Hero title={props.homepage.title} subtitle={props.homepage.subtitle} />
        {/* <News data={props.hightlights} /> */}
        <Profile title={props.profil.title} content={props.profil.content} />
      </ContainerContent>
      <Footer />
    </main>
  );
};

export default Page;
