/* npm imports */
import { ErrorRequestHandler } from 'express';
import createError from 'http-errors';

/* root imports */
import { logger } from '~/utils';

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
	const error =
		err instanceof createError.HttpError ? err : createError(500, 'InternalServerError');

	if (process.env.NODE_ENV !== 'production') {
		logger.error(`${error.statusCode || error.status} %O`, err.message);
	}

	if (['ValidationError', 'UserExistsError'].includes(err.name)) {
		return res.status(405).json(err);
	}

	return res.status(error.status).json({
		code: error.statusCode || error.status,
		message: error.message || error.error,
	});
};

export { errorHandler };