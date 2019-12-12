import Circular from '../../code/queue/circule-queue'

test('circularQueue', () => {
  let queue = new Circular(4)
  queue.enQueue(2)
  expect(queue.isFull()).toBe(false)
  expect(queue.enQueue(1)).toBe(true)
  expect(queue.Front()).toBe(2)
  expect(queue.Rear()).toBe(1)
})
