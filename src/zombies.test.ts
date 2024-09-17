import assert from "node:assert";
import { ok } from "node:assert/strict";
import { test } from "node:test";

const createRoom = (capacity: number, zombies?: number) => {
	const _capacity = capacity;
	let _zombies = zombies || 0;

	return {
		isFull: () => {
			if(_capacity === 1 && _zombies === 0) {
				return false;
			}
			if (_capacity === 0 && _zombies > 0) {
				return false;
			}
			if (_capacity > 0 && _zombies < capacity) {
				return false;
			}
			return true
			
		},

		addZombie: () => {
			_zombies ++;
		}
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

test("room with no capacity cannot fit any zombies", () => {
	const room = createRoom(0);
	room.addZombie();
	const isRoomFull = room.isFull();

	assert.strictEqual(isRoomFull, false);
});

test("one-roomer becomes full when a zombie is added", () => {
	const room = createRoom(1);
	room.addZombie();

	const isRoomFull = room.isFull();
 
	ok(isRoomFull);
});

test("two-roomer is not full when a zombie is added", () => {
	const room = createRoom(2);
	room.addZombie();

	const isRoomFull = room.isFull();

	assert.strictEqual(isRoomFull, false);
});

// test("second zombie consumes first zombie when added to a one-roomer", () => {
// 	const room = createRoom(1, 2);

// 	const isRoomFull = room.isFull();

// 	assert.strictEqual(isRoomFull, true);
// });

// You are free to add more tests that you think are relevant!
