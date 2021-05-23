import { dropCoin } from "../dropCoin";

describe('dropCoin action creator', () => {
    it('should work correctly', () => {
        expect(dropCoin(2, 'red')).toEqual({ type: "DROP_COIN", payload: {column: 2, color: 'red'}})
    });
});