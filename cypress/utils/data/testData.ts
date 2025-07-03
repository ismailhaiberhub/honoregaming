export type stradivariusTypeTestData = {
  homePage: {
    country: string;
    language: string;
  };
};

export const buildStradivariusTestData = (): stradivariusTypeTestData => {
  return {
    homePage: {
      country: "France",
      language: "français",
    },
  };
};
