import arrayToTree from '@/array-to-tree';

const data = [
  { id: 1, parentId: 0, name: 'node1' },
  { id: 2, parentId: 1, name: 'node1.1' },
  { id: 3, parentId: 1, name: 'node1.2' },
  { id: 4, parentId: 0, name: 'node2' },
  { id: 5, parentId: 4, name: 'node2.1' },
  { id: 6, parentId: 5, name: 'node2.1.1' },
];

const tree = [
  {
    id: 1,
    parentId: 0,
    name: 'node1',
    children: [
      { id: 2, parentId: 1, name: 'node1.1' },
      { id: 3, parentId: 1, name: 'node1.2' }
    ]
  },
  {
    id: 4,
    parentId: 0,
    name: 'node2',
    children: [
      {
        id: 5,
        parentId: 4,
        name: 'node2.1',
        children: [
          { id: 6, parentId: 5, name: 'node2.1.1' },
        ]
      },
    ]
  }
];

describe('test arrayToTree function', () => {
  it('test success', () => {
    expect(arrayToTree(data)).toEqual(tree);
  });
});


