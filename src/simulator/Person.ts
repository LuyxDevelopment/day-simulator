import { PersonAction } from './typings/person.js';

export class Person {

	private readonly timeZone: number;
	private action?: PersonAction;

	public constructor(timeZone: number, action?: PersonAction) {
		this.timeZone = timeZone;
		this.action = action;
	}

	public setAction(action: PersonAction): void {
		this.action = action;
	}

	public getAction(): PersonAction | undefined {
		return this.action;
	}
}