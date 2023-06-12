const STATUS_VARIABLES = {
  SUCCESSFUL_REQUEST: "SUCCESSFUL_REQUEST", // Code 0
  INVALID_ARGUMENTS: "INVALID_ARGUMENTS", // Code 1000
  INVALID_CREDENTIALS: "INVALID_CREDENTIALS", // Code 1001
  EMAIL_OR_USER_NOT_FOUND: "EMAIL_OR_USER_NOT_FOUND", // Code 1002
  EMAIL_EXIST: "EMAIL_EXIST", // Code 1003
  EMAIL_NOT_VERIFIED: "EMAIL_NOT_VERIFIED", // Code 1004
  INVALID_TOKEN: "INVALID_TOKEN", // Code 1005
  INVALID_GOOGLEAUTH_CODE: "INVALID_GOOGLEAUTH_CODE", // Code 1006
  INVALID_IMAGE_TYPE: "INVALID_IMAGE_TYPE", // Code 1007
  INVALID_PHONE_VERIFICATION_CODE: "INVALID_PHONE_VERIFICATION_CODE", // Code 1008
  UNAVAILABLE: "UNAVAILABLE", // Code 1009
  USER_BANNED: "USER_BANNED", // Code 1010
  INVALID_PASSWORD: "INVALID_PASSWORD", // Code 1011
  CERTIFICATE_EXIST: "CERTIFICATE_EXIST", // Code 1012
  NAME_OR_NUMBER_EXIST: "NAME_OR_NUMBER_EXIST", // Code 1013
  INSUFFICIENT_BALANCE: "INSUFFICIENT_BALANCE", // Code 1014
  NO_RECORD_FOUND: "NO_RECORD_FOUND", // Code 1015
  NUMBER_EXIST: "NUMBER_EXIST", // Code 1016
  INVALID_OTP_CODE: "INVALID_OTP_CODE", // Code 1017
  UNSPECIFIED_ERROR: "UNSPECIFIED_ERROR", // Code 2000
  FORBIDDEN: "FORBIDDEN", // Code 2001
  UNAUTHORIZED: "UNAUTHORIZED", // Code 2002
  SESSION_TIMEOUT: "SESSION_TIMEOUT", // Code 2003
  TOKEN_EXPIRED: "TOKEN_EXPIRED", // Code 2004
  EXCEPTION_ERROR: "EXCEPTION_ERROR", // Code 9999
};

const statuscode = (type, msg = "", data = null) => {
  const STATUS = {
    SUCCESSFUL_REQUEST: {
      httpcode: 200,
      data: {
        status: {
          code: 0,
          type: "SUCCESSFUL_REQUEST",
        },
        body: {
          message: msg,
          data: data,
        },
      },
    },
    EXCEPTION_ERROR: {
      httpcode: 400,
      data: {
        status: {
          code: 9999,
          type: "EXCEPTION_ERROR",
        },
        body: {
          message: msg,
          data: data,
        },
      },
    },
    UNSPECIFIED_ERROR: {
      httpcode: 400,
      data: {
        status: {
          code: 2000,
          type: "UNSPECIFIED_ERROR",
        },
        body: {
          message: "Something went wrong",
          data: data,
        },
      },
    },
    INVALID_ARGUMENTS: {
      httpcode: 400,
      data: {
        status: {
          code: 1000,
          type: "INVALID_ARGUMENTS",
        },
        body: {
          message: "Empty Fields OR Arguments",
          data: data,
        },
      },
    },
    INVALID_CREDENTIALS: {
      httpcode: 400,
      data: {
        status: {
          code: 1001,
          type: "INVALID_CREDENTIALS",
        },
        body: {
          message: "Email or Password incorrect",
          data: data,
        },
      },
    },
    INVALID_PASSWORD: {
      httpcode: 400,
      data: {
        status: {
          code: 1011,
          type: "INVALID_PASSWORD",
        },
        body: {
          message: "Incorrect Password",
          data: data,
        },
      },
    },
    UNAVAILABLE: {
      httpcode: 404,
      data: {
        status: {
          code: 1009,
          type: "UNAVAILABLE",
        },
        body: {
          message: "Not Available",
          data: data,
        },
      },
    },
    EMAIL_OR_USER_NOT_FOUND: {
      httpcode: 404,
      data: {
        status: {
          code: 1002,
          type: "EMAIL_OR_USER_NOT_FOUND",
        },
        body: {
          message: "Email address or User not registered",
          data: data,
        },
      },
    },
    EMAIL_EXIST: {
      httpcode: 400,
      data: {
        status: {
          code: 1003,
          type: "EMAIL_EXIST",
        },
        body: {
          message: "Email address already exists",
          data: data,
        },
      },
    },
    EMAIL_NOT_VERIFIED: {
      httpcode: 400,
      data: {
        status: {
          code: 1004,
          type: "EMAIL_NOT_VERIFIED",
        },
        body: {
          message: "Email address not verified",
          data: data,
        },
      },
    },
    INVALID_TOKEN: {
      httpcode: 401,
      data: {
        status: {
          code: 1005,
          type: "INVALID_TOKEN",
        },
        body: {
          message: "Invalid Token",
          data: data,
        },
      },
    },
    INVALID_GOOGLEAUTH_CODE: {
      httpcode: 400,
      data: {
        status: {
          code: 1006,
          type: "INVALID_GOOGLEAUTH_CODE",
        },
        body: {
          message: "Invalid Google Authenticator Code",
          data: data,
        },
      },
    },
    INVALID_IMAGE_TYPE: {
      httpcode: 400,
      data: {
        status: {
          code: 1007,
          type: "INVALID_IMAGE_TYPE",
        },
        body: {
          message:
            "Invalid Image Type - Only image with extension (jpg, jpeg, png) are supported",
          data: data,
        },
      },
    },
    INVALID_PHONE_VERIFICATION_CODE: {
      httpcode: 400,
      data: {
        status: {
          code: 1008,
          type: "INVALID_PHONE_VERIFICATION_CODE",
        },
        body: {
          message: "Invalid Verification Code",
          data: data,
        },
      },
    },
    USER_BANNED: {
      httpcode: 400,
      data: {
        status: {
          code: 1010,
          type: "USER_BANNED",
        },
        body: {
          message: "The User is Locked or Banned. Please contact the support.",
          data: data,
        },
      },
    },
    NAME_OR_NUMBER_EXIST: {
      httpcode: 400,
      data: {
        status: {
          code: 1013,
          type: "NAME_OR_NUMBER_EXIST",
        },
        body: {
          message: "Name or Number already exists",
          data: data,
        },
      },
    },
    NUMBER_EXIST: {
      httpcode: 400,
      data: {
        status: {
          code: 1016,
          type: "NUMBER_EXIST",
        },
        body: {
          message: "Number already exists",
          data: data,
        },
      },
    },
    INVALID_OTP_CODE: {
      httpcode: 400,
      data: {
        status: {
          code: 1017,
          type: "INVALID_OTP_CODE",
        },
        body: {
          message: "Invalid Otp Code",
          data: data,
        },
      },
    },
    INSUFFICIENT_BALANCE: {
      httpcode: 400,
      data: {
        status: {
          code: 1014,
          type: "INSUFFICIENT_BALANCE",
        },
        body: {
          message: "Your Balance is not enough to make this transaction",
          data: data,
        },
      },
    },
    NO_RECORD_FOUND: {
      httpcode: 400,
      data: {
        status: {
          code: 1015,
          type: "NO_RECORD_FOUND",
        },
        body: {
          message: "This transaction record is not existing",
          data: data,
        },
      },
    },
    FORBIDDEN: {
      httpcode: 403,
      data: {
        status: {
          code: 2001,
          type: "FORBIDDEN",
        },
        body: {
          message: "You are not allowed",
          data: data,
        },
      },
    },
    UNAUTHORIZED: {
      httpcode: 401,
      data: {
        status: {
          code: 2002,
          type: "UNAUTHORIZED",
        },
        body: {
          message: "You are not Authorized",
          data: data,
        },
      },
    },
    SESSION_TIMEOUT: {
      httpcode: 401,
      data: {
        status: {
          code: 2003,
          type: "SESSION_TIMEOUT",
        },
        body: {
          message: "Your session is expired due to inactivity",
          data: data,
        },
      },
    },
    TOKEN_EXPIRED: {
      httpcode: 401,
      data: {
        status: {
          code: 2004,
          type: "TOKEN_EXPIRED",
        },
        body: {
          message: "Token is expired",
          data: data,
        },
      },
    },
    CERTIFICATE_EXIST: {
      httpcode: 400,
      data: {
        status: {
          code: 1012,
          type: "CERTIFICATE_EXIST",
        },
        body: {
          message: "Reference Certificate already exists",
          data: data,
        },
      },
    },
  };

  if (STATUS[type]) {
    return STATUS[type];
  }

  return STATUS.EXCEPTION_ERROR;
};

// Default Error Response
const serverResponse = (res, type, msg = null, data = null) => {
  const e = statuscode(type, msg, data);
  res.statusCode = e.httpcode;
  res.statusMessage = " ";
  return res.json(e.data);
};

module.exports = {
  STATUS_VARIABLES,
  statuscode,
  serverResponse,
};
