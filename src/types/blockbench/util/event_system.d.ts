
type EventCallback<T = any> = (data: T) => void;

interface EventSweeper {
	delete: () => void;
}

declare class EventSystem {
	private events: Record<string, EventCallback[]>;

	constructor();

	dispatchEvent<T = any>(event_name: string, data: T): void;
	on(event_name: string, cb: EventCallback): EventSweeper | undefined;
	once(event_name: string, cb: EventCallback): EventSweeper | undefined;
	addListener(event_name: string, cb: EventCallback): EventSweeper | undefined;
	removeListener(event_name: string, cb: EventCallback): void;
}