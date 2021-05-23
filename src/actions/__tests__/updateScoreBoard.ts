import { updateScoreBoard } from "../updateScoreBoard";

describe('updateScoreBoard action creator', () => {
    it('should work correctly', () => {
        expect(updateScoreBoard('red')).toEqual({ type: "UPDATE_SCORE_BOARD", payload: {color: 'red'}})
    });
});