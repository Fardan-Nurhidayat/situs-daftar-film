class List {
  constructor() {
    this.listItems = ["item1", "item2", "item3"];
  }

  render() {
    const ul = document.createElement("ul");
    this.listItems.map(item => {
      const li = document.createElement("li");
      li.innerHTML = item;
      ul.appendChild(li);
    });
    return ul;
  }
}

export default List;
