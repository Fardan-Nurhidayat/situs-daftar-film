import Button from "../Button/index.js";
import Select from "../Select/index.js";
class FilterMovie {
  constructor(props) {
    const { submitFilter, isLoading } = props;
    this.submitFilter = submitFilter.bind(this);
    this.isLoading = isLoading;
    this.div = document.createElement("div");
  }
  render() {
    // console.log(this.submitFilter);
    this.div.className = "filter-movie";
    const button = new Button({
      text: "Search",
      variant: "primary",
      onclick: () => this.submitFilter(),
      disabled: this.isLoading,
    });
    const select1 = new Select({
      options: [
        { value: "title", label: "Title" },
        { value: "genre", label: "Genre" },
      ],
      width: "100px",
      selectedValue: "title",
      onchange: () => {},
    });
    const select2 = new Select({
      options: [
        { value: "2024", label: "2024" },
        { value: "2023", label: "2023" },
        { value: "2022", label: "2022" },
        { value: "2021", label: "2021" },
        { value: "2020", label: "2020" },
        { value: "2019", label: "2019" },
      ],
      width: "80px",
      selectedValue: "title",
      onchange: () => {},
    });
    this.div.appendChild(select1.render());
    this.div.appendChild(select2.render());
    this.div.appendChild(button.render());
    return this.div;
  }
}

export default FilterMovie;
