import { format } from 'date-fns'

export function formatTime(timeInString: string) {
    return new Date(timeInString).toLocaleDateString('en-US');
}

export const formatDateForApi = (date: Date): string => {
    console.log(date);
    return format(date, 'yyyy-MM-dd').substring(0, 10);
};

export const formatDatesInData = (data: any): any => {
    if (data === null || data === undefined) return data;

    if (data instanceof Date) {
        return formatDateForApi(data);
    }

    if (Array.isArray(data)) {
        return data.map(formatDatesInData);
    }

    if (typeof data === 'object') {
        return Object.keys(data).reduce((acc, key) => {
            acc[key] = formatDatesInData(data[key]);
            return acc;
        }, {} as any);
    }

    return data;
};