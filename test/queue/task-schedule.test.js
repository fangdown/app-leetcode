import TaskSchedule from '../../code/queue/task-schedule'

test(`taskSchedule`, () => {
  expect(TaskSchedule(['A', 'A', 'A', 'B', 'B', 'B'], 2)).toBe(8)
})
