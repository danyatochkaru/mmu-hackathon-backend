'use strict';

/**
 * response-status service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::response-status.response-status');
