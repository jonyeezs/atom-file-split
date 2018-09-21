"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const atom_1 = require("atom");
class CursorToCursorBuffer {
    constructor(fileContext) {
        this.fileContext = fileContext;
    }
    retrieveBuffers() {
        const cursorPoints = this.fileContext.retrieveLocations();
        const sortedPoints = this.sortPointsDesc(cursorPoints);
        return sortedPoints.map((endPoint, index, array) => {
            const startPoint = index === 0 ?
                this.fileContext.retrieveEndOfFilePoint() :
                array[index - 1];
            const range = new atom_1.Range(startPoint, endPoint).freeze();
            return {
                range: range,
                text: this.fileContext.getText(range)
            };
        });
    }
    sortPointsDesc(points) {
        return points.sort((pA, pB) => pA.compare(pB))
            .reverse();
    }
}
exports.default = CursorToCursorBuffer;
//# sourceMappingURL=cursor-to-cursor-buffer.js.map