class StaticImagesService {
  constructor({ allFile: { edges } }) {
    this.items = edges.map(
      ({ node: { name, ext, relativePath, publicURL } }) => {
        return {
          name,
          ext,
          path: relativePath,
          url: publicURL,
        };
      }
    );
  }

  getItem(path) {
    return this.items.find(item => {
      return path === item.path;
    });
  }

  get(paths) {
    const found = {};

    if (paths.length === 0) return found;

    this.items.forEach(item => {
      if (paths.indexOf(item.path) !== -1) found[item.path] = item;
    });

    return found;
  }
}

export default StaticImagesService;
