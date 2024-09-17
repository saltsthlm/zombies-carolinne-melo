import assert from "node:assert";
import { ok } from "node:assert/strict";
import { test } from "node:test";

const createRoom = (capacity: number, zombies?: number) => {
  const _capacity = capacity;
  const _zombies = zombies || 0;

  return {
    isFull: () => {
      if(_capacity === 0) {
        console.log("Room is full");
        return true;
      }
      if(_capacity === 1 && _zombies === 0) {
        console.log("Room fits one zombie and It is not full");
        return false;
      }
      return false;
    },
  };
};

test("room is full", () => {
  const room = createRoom(0);

  const isRoomFull = room.isFull();

  ok(isRoomFull);
});


test("empty room that fits one zombie is not full", () => {
	const room = createRoom(1, 0);

	const isRoomFull = room.isFull();

  assert.strictEqual(isRoomFull, false);
});

test.skip("room with no capacity cannot fit any zombies", () => {
  const room = createRoom(1, 0);

	const isRoomFull = room.isFull();

  assert.strictEqual(isRoomFull, false);

});

test.skip("one-roomer becomes full when a zombie is added", () => {});

test.skip("two-roomer is not full when a zombie is added", () => {});

test.skip("second zombie consumes first zombie when added to a one-roomer", () => {});

// You are free to add more tests that you think are relevant!
