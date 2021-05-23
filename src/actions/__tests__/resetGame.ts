import { resetGame } from "../resetGame";

describe('resetGame action creator', () => {
    it('should work correctly', () => {
        expect(resetGame()).toEqual({ type:  "RESET_GAME" })
    });
});