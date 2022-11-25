import { SortingAlgorithm } from "./sorting-algorithm";

export class ListSorter {
    // use composition rather than inheritance (extending a concrete sorting algorithm class)
    // this makes it interchangeable
    private sortingAlgorithm: SortingAlgorithm;

    constructor(sortingAlgorithm: SortingAlgorithm) {
        this.sortingAlgorithm = sortingAlgorithm;
    }

    sortList(list: unknown[]) {
        this.sortingAlgorithm.sort(list);
    }

    setSortingAlgorithm(algorithm: SortingAlgorithm) {
        this.sortingAlgorithm = algorithm;
    }
}
