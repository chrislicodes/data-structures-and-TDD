import LinkedListNode from "../LinkedListNode";

describe("LinkedListNode", () => {
  it("should create a linked list node with the given value", () => {
    const node = new LinkedListNode(1);

    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });
});
