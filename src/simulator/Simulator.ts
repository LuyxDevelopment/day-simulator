import { Person } from './Person.js';

export class Simulator {

	private readonly people: Person[];

	public constructor() {
		this.people = this.generatePeople();
	}

	private generatePeople(): Person[] {
		const people: Person[] = [];

		for (let i = 0; i < 24; i++) {
			people.push(new Person(i));
		}

		return people;
	}

	public start(): void {
		const hour = new Date(Date.now()).getHours();

		for (let i = 0; i < 24; i++) {
			
		}
	}
}