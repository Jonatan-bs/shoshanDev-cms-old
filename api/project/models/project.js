const slugify = require("slugify");

// Function to accept current page data and
// manipulate values before saving/updating
const sanitizeData = async (data) => {
  // If the title has changed and there is no slug,
  // generate a new slug based on the title
  // otherwise if the slug has been manually changed
  // we slugify it to remove unfriendly characters
  if (data.title && !data.slug) {
    data.slug = slugify(data.title, {
      lower: true,
    });
  } else if (data.slug) {
    data.slug = slugify(data.slug, {
      lower: true,
    });
  }

  return data;
};
const setTitleandmetaBoxTitle = async (data) => {
  if (data.title && !data.titleAndMeta.title) {
    data.titleAndMeta.title = data.title
  }
  return data;
};

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      // On initial creation, we only need to sanitze
      // the data as it's not possible for this page to
      // be the parent page of another page just yet
      data = await setTitleandmetaBoxTitle(data);
      data = await sanitizeData(data);
    },
    beforeUpdate: async (params, data) => {
      // Check that this update function wasn't invoked
      // by out afterUpdate function below - if so, let the
      // full slug be set without any more processing
      if (data.updateChild) return;
      
      data = await setTitleandmetaBoxTitle(data);
      data = await sanitizeData(data);
    },
  },
};