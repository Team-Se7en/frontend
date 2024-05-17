export function getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

export function getPlacementColor(placement: 1 | 2 | 3): string {
    switch (placement) {
        case 1:
            return 'rgba(15, 16, 53, 0.8)';
        case 2:
            return 'rgba(26, 27, 90, 0.8)';
        case 3:
            return 'rgba(43, 44, 138, 0.8)';
    }
}