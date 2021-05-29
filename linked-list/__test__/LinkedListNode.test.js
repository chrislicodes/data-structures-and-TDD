import LinkedListNode from "../LinkedListNode";

describe("LinkedListNode", () => {
  it("should create a linked list node with the given value", () => {
    const node = new LinkedListNode(1);

    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });

  it("should link two nodes together", () => {
    const node2 = new LinkedListNode(2);
    const node1 = new LinkedListNode(1, node2);

    expect(node1.value).toBe(1);
    expect(node1.next).toBeDefined();

    expect(node1.next.value).toBe(2);
    expect(node2.next).toBeNull();
  });
});
