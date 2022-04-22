"use strict";

const DbMixin = require("../mixins/db.mixin");

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "shipments",
	mixins: [DbMixin("shipments")],
	settings: {
		fields: [
			"_id",
			"productId",
			"from",
			"to",
			"status",
			"email",
			"updatedAt",
			"createdAt"
		],
		entityValidator: {
			from: "string", 
			to: "string", 
			status: "string",
			email: "string"
		}
	},
	dependencies: [],
	actions: {
		/**
		 * The "moleculer-db" mixin registers the following actions:
		 *  - list
		 *  - find
		 *  - count
		 *  - create
		 *  - insert
		 *  - update
		 *  - remove
		 */
		notifyCustomer: {
			rest: "POST /:id/notify/customer",
			params: {
				id: "string",
				email: "string"
			},
			async handler(ctx) {
				console.log("EMAIL SENT:" + ctx.params.email);
				return { response: "EMAIL SENT" };
			}

		}
		
	}
};
