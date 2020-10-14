import { ErrorRequestHandler} from "express"

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {

    return response.status(500).json({ message: "Interval server error"});

}

export default errorHandler;