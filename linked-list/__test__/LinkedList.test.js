import LinkedList from "../LinkedList";

describe("LinkedList", () => {
  it("should create an empty linked list", () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });
});
