function filter(head, p) {
  let newList = new Node()
  let newHead = newList
  while (head && head.data !== undefined) {
    if (p(head.data)) {
      newHead.next = new Node(head.data)
      newHead = newHead.next
    }
    head = head.next
  }
  return newList.next
}
