import assert from "node:assert";
import { ok } from "node:assert/strict";
import { test } from "node:test";

const createRoom = (capacity: number, zombies?: number) => {
  const _capacity = capacity;
  const _zombies = zombies || 0;

  return {
    isFull: () => {
      if(_capacity === 0) {
        console.log("Room with no capacity, cannot fit any zombies");
        return false;
      }
      if(_capacity === 1 && _zombies === 0) {
        console.log("Room fits one zombie and it is not full");
        return false;
      }
      if (_capacity !== 0 && _capacity === _zombies) {
        return true;
      }
      return false;
    },
  };
};

test.skip("room is full", () => {
  const room = createRoom(0);

  const isRoomFull = room.isFull();

  ok(isRoomFull);
});


test("empty room that fits one zombie is not full", () => {
	const room = createRoom(1, 0);

	const isRoomFull = room.isFull();

  assert.strictEqual(isRoomFull, false);
});

test("room with no capacity cannot fit any zombies", () => {
  const room = createRoom(0);

	const isRoomFull = room.isFull();

  assert.strictEqual(isRoomFull, false);

});

test("one-roomer becomes full when a zombie is added", () => {
  const room = createRoom(1, 1);

	const isRoomFull = room.isFull();

  ok(isRoomFull);

});

test("two-roomer is not full when a zombie is added", () => {
  const room = createRoom(2, 1);

	const isRoomFull = room.isFull();

  assert.strictEqual(isRoomFull, false);

});

test.skip("second zombie consumes first zombie when added to a one-roomer", () => {});

// You are free to add more tests that you think are relevant!
