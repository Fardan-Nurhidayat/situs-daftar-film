class List {
  constructor(props) {
    const { listItems } = props;
    this.listItems = listItems;
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
