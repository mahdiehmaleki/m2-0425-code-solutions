// Define the Node type
type Node<T> = {
  data: T;
  priority: number;
};

export class PriorityQueue<T = any> {
  public nodes: Node<T>[];

  constructor() {
    this.nodes = [];
  }

  /**
   * Adds a value to the queue with a given priority.
   * Higher priority values come before lower ones.
   * If two values have the same priority, the one inserted first comes first (FIFO).
   */
  enqueue(value: T, priority: number): void {
    const newNode: Node<T> = { data: value, priority };

    // Find the first index where the new node should be inserted
    const index = this.nodes.findIndex((node) => node.priority < priority);

    if (index === -1) {
      // Lower than all, add to the end
      this.nodes.push(newNode);
    } else {
      // Insert at the correct index
      this.nodes.splice(index, 0, newNode);
    }
  }

  /**
   * Removes and returns the value with the highest priority.
   * If the queue is empty, returns undefined.
   */
  dequeue(): T | undefined {
    if (this.nodes.length === 0) return undefined;
    return this.nodes.shift()?.data;
  }

  /**
   * Returns the value with the highest priority without removing it.
   * If the queue is empty, returns undefined.
   */
  peek(): T | undefined {
    if (this.nodes.length === 0) return undefined;
    return this.nodes[0].data;
  }
}
