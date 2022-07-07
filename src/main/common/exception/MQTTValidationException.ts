import { ErrorHandler } from '../../config/Exception';
import { ValidationError } from 'express-validator';

export class MQTTValidationException extends ErrorHandler {

  constructor(errorMessage: Array<ValidationError>) {
    super(
        "ERR0001",
        `Bad Request - ${(errorMessage[0].msg)}`,
        errorMessage
    );
  }

}