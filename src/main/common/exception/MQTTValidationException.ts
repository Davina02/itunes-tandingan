import { ErrorHandler } from '../../config/Exception';

export class MQTTValidationException extends ErrorHandler {

  constructor(){
    super(
        "ERR01",
        "Please try to input again."
    );
  }

}