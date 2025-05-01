import { ArticleLayout } from "@/components/article/ArticleLayout";
import SampleArticle from "@/database/SampleArticle";

export default function AboutUs() {
  return (
    <ArticleLayout title="About Us">
      <SampleArticle/>
    </ArticleLayout>
  );
}
