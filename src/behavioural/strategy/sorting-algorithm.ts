export interface SortingAlgorithm {
    sort(list: unknown[]): void;
}

export class BubbleSort implements SortingAlgorithm {
    sort(_list: unknown[]): void {
        console.log("Sorting with Bubble Sort");
    }
}

export class MergeSort implements SortingAlgorithm {
    sort(_list: unknown[]): void {
        console.log("Sorting with Merge Sort");
    }
}

export class QuickSort implements SortingAlgorithm {
    sort(_list: unknown[]): void {
        console.log("Sorting with Quick Sort");
    }
}
