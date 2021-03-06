const express = require('express');
const router = express.Router();
const url = require('url');

module.exports = (server) => {

	router.get('/courses', (req, res, next) => {
		let url_parts = url.parse(req.originalUrl, true),
			query = url_parts.query,
			from = query.start,
			to = +query.start + +query.count,
			sort = query.sort,
			queryStr = query.query,
			courses = server.db.getState().courses,
			resp = {},
			size;

		if (courses.length < to) {
			to = courses.length;
		}

		if (queryStr) {
			courses = courses.filter(course => course.name.includes(queryStr));
		}

		size = courses.length;
		courses = courses.slice(from, to);
		resp.size = size;
		resp.courses = courses;

		res.json(resp);
	});

	return router;
};
