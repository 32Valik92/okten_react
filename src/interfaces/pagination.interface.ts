// Дженерік передаємо бо наш items і буде мати всі ті машинки
export interface IPagination<T> {
    total_items: number;
    total_pages: number;
    prev: string;
    next: string;
    items: T;
}