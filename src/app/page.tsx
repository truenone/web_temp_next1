import ArticleCardGroup from "@/components/ArticleCardGroup";
import HeroContentLeft from "@/components/Hero";

export default function Home() {
  return (
    <main className="h-full flex flex-col gap-10 bg-gradient-to-r from-orange-500 to-red-500">
      <HeroContentLeft />
      <ArticleCardGroup />

    </main>
  );
}
