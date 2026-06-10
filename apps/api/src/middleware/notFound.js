import { STATUS_CODES } from "../utils/constant.js";
import localizationString from "../utils/en-us.js";

const notFound = (req, res) => {
  res.status(STATUS_CODES.STATUS_404).json({success: false, 
    message: localizationString.ROUTE_NOT_FOUND
  })
}

export default notFound;