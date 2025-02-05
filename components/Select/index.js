class Select {
  constructor(props) {
    const { options, selectedValue, onchange, width } = props;
    this.options = options;
    this.selectedValue = selectedValue;
    this.onchange = onchange;
    this.width = width;
  }
  render() {
    const select = document.createElement("select");
    select.className = "form-select";
    select.style.width = this.width;
    this.options.map(option => {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.innerText = option.label;
      if (this.selectedValue === option.value) {
        optionElement.selected = true;
      }
      select.appendChild(optionElement);
    });
    select.onchange = this.onchange;
    return select;
  }
}

export default Select;
