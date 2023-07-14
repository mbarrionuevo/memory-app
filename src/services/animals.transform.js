export const getAnimalsTransform = (entries) =>
  entries.map(({ fields: { image } }) => ({
    imgUrl: image.url,
    title: image.title,
    id: image.uuid,
  }));
