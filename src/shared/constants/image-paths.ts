const getIllustrationImage = (slug: string) => "/images/illustrations/" + slug;

export const illustrations = {
  rocket: getIllustrationImage("rocket.png"),
  thunder: getIllustrationImage("thunder.png"),
  wallet: getIllustrationImage("wallet.png"),
};

export const imagePaths = {
  illustrations,
};
