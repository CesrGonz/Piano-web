import getNoteFromKey from "./noteUtils";
import {expect, test} from "vitest"

test('si le paso la letra a devolvera C4', () => {
    let note = getNoteFromKey('a');
    expect(note).toBe('C4')
});

test('si le paso la letra A devolvera C4', () => {
    let note = getNoteFromKey('A');
    expect(note).toBe('C4')
});



test('si no le paso la letra devolvera undefined', () => {
    let note = getNoteFromKey();
    expect(note).toBeUndefined()
});

test('si no le paso la letra devolvera undefined', () => {
    let note = getNoteFromKey('null');
    expect(note).toBeUndefined()
});

test('si le paso undefined devolvera undefined', () => {
    let note = getNoteFromKey(undefined);
    expect(note).toBeUndefined()
});
