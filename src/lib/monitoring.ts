export interface MonitoringEvent {
  type: string;
  description: string;
  date: Date;
}

export type AlertCallback = (event: MonitoringEvent) => void;

export class CreditMonitor {
  private subscribers: AlertCallback[] = [];

  subscribe(callback: AlertCallback) {
    this.subscribers.push(callback);
  }

  unsubscribe(callback: AlertCallback) {
    this.subscribers = this.subscribers.filter(cb => cb !== callback);
  }

  notify(event: MonitoringEvent) {
    this.subscribers.forEach(cb => cb(event));
  }

  async monitor(report: unknown) {
    // Placeholder logic to detect changes in credit data.
    // In a real implementation, you would compare the current report with previous state
    // and emit events when differences are detected.
    const exampleEvent: MonitoringEvent = {
      type: 'BalanceChange',
      description: 'Balance changed on an account.',
      date: new Date(),
    };
    this.notify(exampleEvent);
  }
}
