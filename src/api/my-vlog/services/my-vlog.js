'use strict';

/**
 * my-vlog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-vlog.my-vlog');
