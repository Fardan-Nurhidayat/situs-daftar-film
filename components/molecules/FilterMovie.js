import Button from "../Button/index.js";
import Select from "../Select/index.js";
class FilterMovie {
  constructor(props) {
    const { submitFilter, isLoading, setType, setYear, year, type } = props;
    this.submitFilter = submitFilter.bind(this);
    this.isLoading = isLoading;
    this.setType = setType;
    this.setYear = setYear;
    this.year = year;
    this.type = type;
    this.div = document.createElement("div");
  }
  render() {
    this.div.className = "filter-movie";
    const button = new Button({
      text: "Search",
      variant: "primary",
      onclick: () => this.submitFilter(),
      disabled: this.isLoading,
    });
    const select1 = new Select({
      options: [
        { value: "", label: "Pilih Genre" },
        { value: "Drama", label: "Drama" },
        { value: "Romance", label: "Romance" },
        { value: "Action", label: "Action" },
        { value: "Comedy", label: "Comedy" },
        { value: "Horror", label: "Horror" },
      ],
      width: "100px",
      selectedValue: this.type,
      onchange: e => {
        this.setType(e.target.value);
      },
    });
    const select2 = new Select({
      options: [
        { value: "", label: "Pilih Tahun" },
        { value: "2025", label: "2025" },
        { value: "2024", label: "2024" },
        { value: "2023", label: "2023" },
        { value: "2022", label: "2022" },
        { value: "2021", label: "2021" },
        { value: "2020", label: "2020" },
        { value: "2019", label: "2019" },
      ],
      width: "120px",
      selectedValue: this.year,
      onchange: e => {
        this.setYear(e.target.value);
      },
    });
    this.div.appendChild(select1.render());
    this.div.appendChild(select2.render());
    this.div.appendChild(button.render());
    return this.div;
  }
}

export default FilterMovie;
