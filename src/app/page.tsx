import HomeHeroSection from '@/components/marketing/heroSection';
import type { Metadata } from "next";
import { siteConfig } from '../../app';
import { Shell } from '@/components/wrapper/shellVariants';
import { HomeFeaturedItems } from '@/components/commerce/featureStoreItems';
import HomeMainSection from '@/components/marketing/mainSection';
import { Features } from '@/components/common/features';
import HomeBottomSection from '@/components/marketing/bottomSection';
import { BannerWithButton } from '@/components/marketing/Elements/Banners/with-button';

// @see https://github.com/blefnk/relivator
export async function generateMetadata() {
  // useTranslations works both on the server and client;
  // we only need the getTranslations on async functions.
  // const t = await getTranslations();

  const metadata: Metadata = {
    title: `${("metadata.title.home")} - ${siteConfig.appNameDesc}`,
  };

  return metadata;
}

export default function HomePage() {
  // const t = useTranslations();

  return (
    <>
      <BannerWithButton
        linkHref="https://reliverse.org/relivator/v126"
        tTitle={("banners.announcements-1.title")}
        tDetails={("banners.announcements-1.details")}
        tButton={("banners.announcements-1.button")}
        tDismiss={("banners.announcements-1.dismiss")}
      />
      {/* <HomeHeroSection /> */}
      <Shell
        className={`
          px-10

          2xl:px-32

          lg:20
        `}
      >
        <HomeFeaturedItems />
        <HomeMainSection />
        <Features />
        <HomeBottomSection />
      </Shell>
    </>
  );
}
