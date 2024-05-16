type CatalogParams = {
  genre?: string;
  rating?: string;
  year?: string;
  sort?: string;
};

type Id = number | null | undefined;

export const dashboardPaths = {
  main: "dashboard",
  courses: "/dashboard/courses",
  coursesList: "/dashboard/courses/list",
  manage: "/dashboard/manage",
  projects: "/dashboard/projects",
  settings: "/dashboard/settings",
  settingsTheme: "/dashboard/settings/theem",
  support: "/dashboard/support",
};

export const diagnosticPaths = {
  main: "diagnostic",
  newProject: "/diagnostic/projects/new",
};

export const paths = {
  home: "/",
  login: "/login",
  register: "/register",
  restorePassword: "/restore-password",
  dashboard: dashboardPaths,
  diagnostic: diagnosticPaths,

  // Get the URL for the movie catalog page
  catalog: (params: CatalogParams): string => {
    const searchParams = new URLSearchParams({ ...params });
    const url = `/films?${searchParams}`;

    return url;
  },

  // Get the URL for the movie page
  movie: (id: Id): string => `/film/${id}`,

  // Get the URL for the person page
  person: (id: Id): string => `/name/${id}`,
};
