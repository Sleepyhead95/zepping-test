import Select, { components } from "react-select";

const customStyles = {
  container: (base) => ({
    ...base,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "auto",
    margin: "0.2rem 0",
  }),
  control: (base, state) => ({
    ...base,
    border: 0,
    width: "90vw",
    height: "auto",
    padding: "1.1rem",
    backgroundColor: "#fff",
    fontSize: "16px",
    fontFamily: "Cabin",
    borderRadius: !state.menuIsOpen ? "10px" : "10px 10px 0 0",
    borderBottom: state.isFocused ? "1px solid #F5F5F5" : "0",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#888888",
    fontSize: "16px",
    fontFamily: "Cabin",
    fontWeight: "600",
  }),
  menu: (base) => ({
    ...base,
    width: "90%",
    margin: "0 auto",
    borderRadius: "0 0 10px 10px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  }),
  menuList: (base) => ({
    ...base,
    padding: "0.7rem 1rem",
    width: "100%",
  }),

  input: (base) => ({
    ...base,
    color: "#888",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
};
const FlagOption = ({ innerProps, isDisabled, innerRef, data, options }) => {
  const isLastOption = data === options[options.length - 1];
  return !isDisabled ? (
    <div
      ref={innerRef}
      {...innerProps}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        cursor: "pointer",
        width: "90%",
        height: "auto",
        padding: "0.7rem 0 0.7rem 0.7rem",
        fontFamily: "Cabin",
        fontSize: "16px",
        fontWeight: "600",
        color: "#888",
        borderBottom: isLastOption ? "none" : "1.5px solid #f5f5f5",
      }}
    >
      <img
        src={data.flagUrl}
        alt={data.label}
        style={{ marginRight: "10px", width: "25px" }}
      />
      {data.label}
    </div>
  ) : null;
};

export default function Nationality() {
  const options = [
    { value: "italia", label: "Italia", flagUrl: "/icons/italy.svg" },
    { value: "francia", label: "Francia", flagUrl: "/icons/france.svg" },
    { value: "germania", label: "Germania", flagUrl: "/icons/germany.svg" },
  ];

  const handleChange = (selectedOption) => {
    console.log(`Option selected:`, selectedOption);
  };

  const CustomSingleValue = ({ children, ...props }) => {
    return (
      <components.SingleValue {...props}>
        <img
          src={props.data.flagUrl}
          alt={props.data.label}
          style={{
            marginRight: "10px",
            verticalAlign: "middle",
            width: "25px",
          }}
        />
        <span
          style={{
            color: "#888",
            fontSize: "16px",
            fontFamily: "Cabin",
            fontWeight: "600",
            verticalAlign: "middle",
          }}
        >
          {props.data.label}
        </span>
      </components.SingleValue>
    );
  };

  const CustomDropdownIndicator = (props) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <img
            src="/icons/down_arrow.svg"
            alt="Open"
            style={{ width: "12px", height: "12px" }}
          />
        </components.DropdownIndicator>
      )
    );
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      unstyled
      styles={customStyles}
      placeholder="Nazionalità"
      components={{
        Option: FlagOption,
        SingleValue: CustomSingleValue,
        DropdownIndicator: CustomDropdownIndicator,
      }}
    />
  );
}
