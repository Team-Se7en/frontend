export class PositionDuration {
    year: number;
    month: number;
    day: number;

    constructor(year: number = 0, month: number = 0, day: number = 0) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    toString() {
        return `${this.year ? `${this.year}y` : ''} ${this.month ? `${this.month}m` : ''} ${this.day ? `${this.day}d` : ''}`;
    }
}

export function getPositionDuration(start_date: Date | string, end_date : Date | string): PositionDuration {
    const _end = new Date(end_date);
    _end.setUTCHours(23, 59, 59, 59);
    const _start = new Date(start_date);
    _start.setUTCHours(0, 0, 0, 0);

    const difference = _end.getTime() - _start.getTime();
    let day = Math.round((difference ? difference : 1) / (1000 * 3600 * 24));

    const year: number = Math.floor(day / 365);
    day = day % 365;

    const month = Math.floor(day / 30);
    day = day % 30;
    
    const duration: PositionDuration = new PositionDuration(year, month, day);
    return duration;
}