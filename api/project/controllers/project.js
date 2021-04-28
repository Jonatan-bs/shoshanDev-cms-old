'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async findOneBySlug(ctx) {
    const { slug } = ctx.params;
    
    const entity = await strapi.services.project.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.project });
    },
};
