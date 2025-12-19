/**
 * Generates a stable 8-digit numeric hash for a string.
 */
function getNumericHash(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash | 0; // Convert to 32bit integer
    }
    // Return positive 8-digit numeric string
    return String(Math.abs(hash) % 100000000).padStart(8, '0');
}

/**
 * Formats a media slug with pattern: media-[8-digit-hash]-[YYYY-MM-DD]
 */
export function formatMediaSlug(filename: string, date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;
    const hash = getNumericHash(filename);

    return `media-${hash}-${dateStr}`;
}
