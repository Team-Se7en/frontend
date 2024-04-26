export function formatTime(timeInString: string) {
    return new Date(timeInString).toLocaleDateString('en-US');
}