import { render } from "@testing-library/react"; // Import fireEvent
import CountryDropdown from "../../components/CountryDropdown";
import "@testing-library/jest-dom";
jest.mock("../utils/data/CountryList", () => ({
  USA: { name: "United States of America" },
  CAN: { name: "Canada" },
  MEX: { name: "Mexico" },
}));

describe("CountryDropdown Component", () => {
  const handleChange = jest.fn();
  const countries = ["USA", "CAN", "MEX"];

  test("renders dropdown with all country options plus the default option", () => {
    const { getByRole, getAllByRole } = render(
      <CountryDropdown countries={countries} onChange={handleChange} />
    );

    const selectElement = getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    const options = getAllByRole("option");
    expect(options).toHaveLength(4); // Includes the default "Select a country" option
    expect(options[0]).toHaveTextContent("Select a country");
    expect(options[1]).toHaveTextContent("United States of America");
    expect(options[2]).toHaveTextContent("Canada");
    expect(options[3]).toHaveTextContent("Mexico");
  });
});
