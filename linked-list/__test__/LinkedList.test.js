import LinkedList from "../LinkedList";

describe("LinkedList", () => {
  it("should create an empty linked list", () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it("should append a new node", () => {
    const linkedList = new LinkedList();
    linkedList.append(1);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(1);
    expect(linkedList.head.next).toBeNull();
    expect(linkedList.tail.next).toBeNull();

    linkedList.append(2);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(2);
    expect(linkedList.head.next.value).toBe(2);
  });

  it("should prepend a new node", () => {
    const linkedList = new LinkedList();
    linkedList.prepend(1);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(1);
    expect(linkedList.head.next).toBeNull();

    linkedList.prepend(2);

    expect(linkedList.head.value).toBe(2);
    expect(linkedList.tail.value).toBe(1);
    expect(linkedList.head.next.value).toBe(1);
  });
});
