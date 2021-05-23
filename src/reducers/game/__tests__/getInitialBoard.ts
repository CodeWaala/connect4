import { getInitialBoard } from "../getInitialBoard";

describe("getInitialBoard", () => {
  it("should work correctly", () => {
    expect(getInitialBoard()).toEqual(
      [[null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null]
    ]);
  });
});
