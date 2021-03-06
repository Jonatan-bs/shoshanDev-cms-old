'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async findOneBySlug(ctx) {
    const { full_slug } = ctx.params;

    const entity = await strapi.services.page.findOne({ full_slug });
    return sanitizeEntity(entity, { model: strapi.models.page });
    },
};
