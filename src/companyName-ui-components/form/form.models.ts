export interface ICustomValidator {
	[key: string]: {
		message: string;
	};
}

export const httpUrlValidatorPattern = '^((http?):\\/\\/)?([w|W]{3}\\.)+[a-zA-Z0-9\\-\\.]{1,}\\.[a-zA-Z]{2,}(\\.[a-zA-Z]{2,})?$'
