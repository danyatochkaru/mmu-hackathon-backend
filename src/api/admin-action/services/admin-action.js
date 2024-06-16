'use strict';

/**
 * admin-action service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::admin-action.admin-action');
