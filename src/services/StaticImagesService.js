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

  get(paths) {
    if (paths.length === 0) return {};

    const found = {};

    this.items.forEach(item => {
      if (paths.indexOf(item.path) !== -1) found[item.path] = item;
    });

    return found;
  }

  getArray(paths) {
    if (paths.length === 0) return [];

    const found = [];

    this.items.forEach(item => {
      if (paths.indexOf(item.path) !== -1) found.push(item);
    });

    return found;
  }
}

export default StaticImagesService;
