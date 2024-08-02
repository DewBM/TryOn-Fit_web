import React from "react";

const SizeColorTable: React.FC = () => {
  const sizes = ["Small", "Medium", "Large", "X-Large"];
  const colors = ["Red", "Blue", "Green", "Yellow"];
  const quantities = {
    Small: { Red: 5, Blue: 8, Green: 2, Yellow: 4 },
    Medium: { Red: 7, Blue: 10, Green: 3, Yellow: 6 },
    Large: { Red: 9, Blue: 12, Green: 5, Yellow: 8 },
    "X-Large": { Red: 4, Blue: 6, Green: 7, Yellow: 3 },
  };

  return (
    <div style={{ padding: "2rem" }}>
     
      <table
        style={{ width: "50%", borderCollapse: "collapse", margin: "2rem 0" }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "0.8rem",
                backgroundColor: "#f2f2f2",
              }}
            >
              Size
            </th>
            {colors.map((color) => (
              <th
                key={color}
                style={{
                  border: "1px solid #ddd",
                  padding: "0.8rem",
                  backgroundColor: "#f2f2f2",
                }}
              >
                {color}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sizes.map((size) => (
            <tr key={size}>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "0.8rem",
                  backgroundColor: "#fafafa",
                }}
              >
                {size}
              </td>
              {colors.map((color) => (
                <td
                  key={color}
                  style={{
                    border: "1px solid #ddd",
                    padding: "0.8rem",
                    backgroundColor: "#fafafa",
                  }}
                >
                  {quantities[size][color]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SizeColorTable;
