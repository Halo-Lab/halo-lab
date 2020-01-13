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
}

export default StaticImagesService;
