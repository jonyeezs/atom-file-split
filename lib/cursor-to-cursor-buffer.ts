import FileContext from './file-context';
import { Point, Range } from 'atom';

export interface SplitBuffer {
    text: string;
    range: Range;
}

export default class CursorToCursorBuffer {
    constructor(private fileContext: FileContext) {}

    retrieveBuffers(): SplitBuffer[] {
        const cursorPoints = this.fileContext.retrieveLocations();
        const sortedPoints = this.sortPointsDesc(cursorPoints);

        return sortedPoints.map((endPoint, index, array) => {
            const startPoint = index === 0 ?
                this.fileContext.retrieveEndOfFilePoint() :
                array[index - 1];

            const range = new Range(startPoint, endPoint).freeze();
            return {
                range: range,
                text: this.fileContext.getText(range)
            } as SplitBuffer;
        });
    }

    private sortPointsDesc(points: Point[]) {
        return points.sort((pA: Point, pB: Point) => pA.compare(pB))
            .reverse();
    }
}