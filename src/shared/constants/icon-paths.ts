const getIconPath = (slug: string) => "/icons/" + slug;
const getPlatformsIconPath = (slug: string) => "/icons/platforms/" + slug;
const getSocialMediaIconPath = (slug: string) => "/icons/social-media/" + slug;
const getIllustrationIconPath = (slug: string) =>
  "/icons/illustrations/" + slug;

export const platformsIconsPaths = {
  gmail: getPlatformsIconPath("gmail.svg"),
  googleAds: getPlatformsIconPath("google-ads.svg"),
  pc: getPlatformsIconPath("pc.svg"),
  yandex: getPlatformsIconPath("yandex.svg"),
  youtube: getPlatformsIconPath("youtube.svg"),
};

export const socialMediaIconsPaths = {
  facebook: getSocialMediaIconPath("facebook.svg"),
  instagram: getSocialMediaIconPath("instagram.svg"),
  telegram: getSocialMediaIconPath("telegram.svg"),
  viber: getSocialMediaIconPath("viber.svg"),
  vk: getSocialMediaIconPath("vk.svg"),
  linkedin: getSocialMediaIconPath("linkedin.svg"),
  twitter: getSocialMediaIconPath("twitter.svg"),
};

export const illustrationsIconsPaths = {
  dashboardInterface: getIllustrationIconPath("dashboard-interface.svg"),
  mobileInterface: getIllustrationIconPath("mobile-interface.svg"),
  bolt: getIllustrationIconPath("bolt.svg"),
  romb: getIllustrationIconPath("romb.svg"),
  paymentGroup: getIllustrationIconPath("payment-group.svg"),
  codeEditor: getIllustrationIconPath("code-editor.svg"),
};

export const iconPaths = {
  logo: getIconPath("logo.svg"),
  platforms: platformsIconsPaths,
  socialMedia: socialMediaIconsPaths,
  illustrations: illustrationsIconsPaths,
};
