const getIllustrationImagePath = (slug: string) =>
  "/images/illustrations/" + slug;

export const illustrations = {
  rocket: getIllustrationImagePath("rocket.png"),
  thunder: getIllustrationImagePath("thunder.png"),
  wallet: getIllustrationImagePath("wallet.png"),
  dahsboardInterface: getIllustrationImagePath("dashboard-interface.png"),
  mobileInterface: getIllustrationImagePath("mobile-interface.png"),
  bgWithTea: getIllustrationImagePath("bg-with-tea.png"),
};

export const imagePaths = {
  illustrations,
};
